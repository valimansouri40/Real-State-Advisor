import React, { useEffect, useState }  from "react";
import './AllRequest.css';
import * as action from '../../store/action/index';
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";
import { connect } from "react-redux";
import Paginate from '../../components/Paginate/Paginate';
import { changeprice } from "../../components/UI/CardRealState/changePrice";
import Spinner from "../../components/UI/spinner/Spinner";

// بخش مدیریت درخواست ها در پنل مدیریت

const AllRequest= props=>{
        const {allreqinit, deletereqs, patchreqinit, alldata, length} = props;
        const  [AllData, setAlldata]= useState();
        const [page, setpage]= useState(1);
        const [bol, setbol]= useState('unseen');


        useEffect(()=>{
            switch(bol){
                case 'unseen':
            allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                break;
             case 'Pending':
                    allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                        break;
                case 'Accepted':
                    allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                                break;
                 default:
                         allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                               break;
}        },[allreqinit, page, bol])
            
       useEffect(()=>{
            if(alldata){
                setAlldata(alldata)
            }
       },[alldata, page])

        const statushandller =(e,i, id)=>{
                    e.preventDefault()
                const data = {
                    Status: e.target.value
                }
                
                patchreqinit(data, id);
                switch(e.target.value){
                    case 'unseen':
                allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                    break;
                 case 'Pending':
                        allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                            break;
                    case 'Accepted':
                        allreqinit(`/request/allrequest?Status=${bol}&page=${page}&limit=20`);
                                    break;
                }
        }
        
        const objtab={mapdesign:"طراحی نقشه",Mapping:'نقشه برداری',
        Registrationwork:'کار های ثبتی',Advocacy:'وکالت دادگاهی',Executionandconstruction:'اجرا و ساخت',
        ExpertofJustice:'کارشناس دادگستری',endofwork:'پایان کار', lisense:'جواز'};

        const objtype= {"Buy land" : "خرید زمین با قابلیت رشد",
                "cooperation": "مشارکت در ساخت", "sendrealstate" : "سپردن ملک", 
            "recr" : "درخواست همکاری", "engine" : "خدمات مهندسی"}
        const deletehandller=(id)=>{
            const url= `/request/${id}`;
            deletereqs(url);
            allreqinit(page);
            setAlldata(alldata)
        }

    return(
        <section className='changerole-target'>
            <AdminPannelNav/>
            <div className='allreq-target'>
                <div className='allreq-tabbar'>
                <button onClick={()=>setbol('unseen')} className={bol === 'unseen'?"nav-link-active":"nav-link "}> دیده نشده ها</button>
                <button onClick={()=>setbol('Pending')} className={bol === 'Pending'?"nav-link-active":"nav-link "}>  در حال بررسی ها</button>
                <button onClick={()=>setbol('Accepted')} className={bol === 'Accepted'?"nav-link-active":"nav-link "}> پذیرفته شده ها</button>

                </div>
                    <div className='allreq-frame'>
                    {AllData? AllData.length === 0?<div>موردی یافت نشد!!</div>:null:<Spinner/>} 
                            {AllData?AllData.map((mp, i)=><div className='allreq-box'>
                            <div className='allappointment-delete' onClick={()=>deletehandller(mp._id)}>
                                    <img width='50px' height='50px'
                                     src="https://img.icons8.com/windows/32/000000/multiply.png"/>
                                    </div>
                            { mp.Objid?<><div className='allreq-fieldbox'>
                                          <h3 className='allreq-field'> نام درخواست کننده :
                                             {mp.Objid.FristName 
                                            + '  '+ 
                                            `${mp.Objid.LastName? mp.Objid.LastName:''}`}</h3>
                                        </div>  
                                        <div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> شماره تلفن درخواست کننده : {mp.Objid.PhoneNumber}</h3>
                                        </div></> :null}
                                        <div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> نوع درخواست : {objtype[mp.Type]}</h3>
                                        </div> 
                                       { mp.TypeWork?<div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'>  نوع خدمات مهندسی : {objtab[mp.TypeWork]}</h3>
                                        </div> :null}
                                        {mp.City?<><div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> شهر : {mp.City}</h3>
                                        </div> 
                                        <div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> منطقه : {mp.Area}</h3>
                                        </div></> :null}
                                        {mp.TypeState?<div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> نوع ملک : {mp.TypeState}</h3>
                                        </div> :null}
                                        {mp.Cooperation?<div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> آمادگی مشارکت در ساخت را دارم</h3>
                                        </div>:null }
                                        {mp.Job?<div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> نوع همکاری در خواست شده : {mp.Job} </h3>
                                        </div>:null }
                                        {mp.Land?<div className='allreq-fieldbox'>
                                            <h3 className='allreq-field'> زمین با قابلیت رشد</h3>
                                        </div>:null} 
                                        {mp.Price?
                                        <div className='allreq-fieldbox'>
                                        <h3 className='allreq-field'> {changeprice(mp.Price)}</h3>
                                    </div>
                                        :null}
                                    {mp.Text?
                                        <div className='allreq-fieldboxtext'>
                                        <p className='allreq-text'> توضیحات : {mp.Text}</p>
                                    </div>
                                        :null}
                                    <div className='allreq-checkblock'>
                                        <label className='allreq-label'>
                                            وضعیت درخواست :
                                        </label >
                                        <select value={mp.Status} onChange={(e)=>statushandller(e,i,mp._id)} className='allreq-slect'>
                                        <option  className='allreq-option' value='unseen'  >دیده نشده</option>
                                        <option className='allreq-option' value='Pending'> در حال بررسی</option>
                                        <option className='allreq-option' value='Accepted'> پذیرفته شده</option>
                                        </select>
                                    </div>
                            </div>)
                            :null}
                    </div>
                    <Paginate page={page} setpage={setpage} length={length}></Paginate>
            </div>
        </section>
    )
}


const MapStateToProps=state=>{

    return{
        alldata: state.request.alldata,
        length: state.request.length
    }
}

const MapDispatchToProps= dispatch=>{
    return{
        allreqinit: (page)=> dispatch(action.getallreqinit(page)),
        patchreqinit: (data, id)=> dispatch( action.patchreqinit(data, id)),
        deletereqs: (url)=> dispatch(action.deletereqs(url))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(AllRequest);


{/* <div className='allreq-checkbx'>
<label className='allreq-label'> دیده نشده </label>
        <input className='allreq-radio' checked={mp.Status === 'unseen'?true:false}
         type='radio' name='status' value='unseen'
         />
    </div>
     <div className='allreq-checkbx'>
     <label className='allreq-label'> رد شده </label>
        <input className='allreq-radio' checked={mp.Status === 'Pending'?true:false}
         type='radio' name='status' value='Pending'
         />
    </div>
    <div className='allreq-checkbx'>
    <label className='allreq-label'> پذیرفته شده </label>
        <input className='allreq-radio' checked={mp.Status === 'Accepted'?true:false}
         type='radio' name='status' value='Accepted'
         />
    </div> */}