import React ,{useState, useEffect} from "react";
import './RealStateManager.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import Edit from '../../assets/icons/icons8-edit-32.png';
import Trash from '../../assets/icons/icons8-trash-can-64.png';
import Paginate from '../../components/Paginate/Paginate';
import { Link } from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";
import Spinner from "../../components/UI/spinner/Spinner";
import { changeprice } from "../../components/UI/CardRealState/changePrice";
// صفحه مدیریت ملک در پنل مدیریت

const RealStateManager=(props)=>{
    const {REALSTATEGETALLINIT,length , AllData,
         changefilehandller, REALSTATEDELETEONEINIT,
         role, cityall, areaall}=props;
    
    const [Tab, settab]=useState('');
    const [page, setpage]=useState(1)
    const [modal, setmodal]=useState(false);
    const [cardid,setcardid]=useState();
    const [city, setcity]= useState();
    const [area, seterea]= useState();
    const [realstatenum, setrealstatenum]= useState();
    const [esquirename, setesquiername]= useState('')
    const [esquireph, setesquierph]= useState('')
    const [cityid, setcityid]=useState('');
    const [allerea, setallerea]= useState([]);
    const [AdvisorId, setAdvisorId] = useState()

   
    useEffect(()=>{
        // if(!localStorage.getItem('tipicManager')){
        //     localStorage.setItem('tipicManager', 'rahn')
        // }
        settab(localStorage.getItem('tipicManager'))
        changefilehandller(null, 'getallcity','')
    },[])
    useEffect(()=>{
        if(areaall){
        setallerea(areaall)
    }
    },[areaall])
    useEffect(()=>{

        REALSTATEGETALLINIT(page, `Tipic=${Tab}`, role)
        
    },[REALSTATEGETALLINIT, Tab,page])
      
    const setvaluehd=(e)=>{
        settab(e.target.value);
        setpage(1);
        localStorage.setItem('tipicManager', e.target.value)
    }

    const realstateDeleteHandller=(id)=>{
        REALSTATEDELETEONEINIT(cardid);
    }
    const showmodalhandller=(id)=>{
        setcardid(id);
        setmodal(true)
    }
    const rolear= ['admin','dealer']
    const setvaluehandller= (e)=>{
        if(role){
            if(e && e !== 'شهر' && rolear.includes(role.role)){
         const citid= cityall.find(er=>  er.name === e);
         setcity(e)
        changefilehandller(null, 'getallarea',`id=${citid._id}`)
     
}else{
    const citid= cityall.find(er=>  er.name === role.City[e].name);
        changefilehandller(null, 'getallarea',`id=${citid._id}`)
    setcity(role.City[e].name);
    setcityid(role.City[e]._id);

}}
        
    }

  const setareahandller=(e)=>{
      if(e && e !== 'منطقه'){
      
      const oneeria= areaall.find(rs=> rs.areaName === e);
     const strid = JSON.stringify(oneeria.CityId) + JSON.stringify(oneeria.Id) * 1;
    
      seterea(oneeria.areaName);
      
    }else{
            seterea();
      }

  }

    let mdl=null;
    if(modal){
        mdl =<Modal modal={modal} setmodal={setmodal}><div className='realstatemanager-modal' >
                <h3  className="realstatemanager-h3"> اطمینان دارید از حذف این مورد؟</h3>
                <div className="realstatemanager-modal-box">
                    <button className='realstatemanager-modal-box-btn' onClick={realstateDeleteHandller}>حذف شود</button>
                <button className='realstatemanager-modal-box-btn red' onClick={()=>setmodal}>لغو</button>
                </div>
        </div></Modal>
    }
    
    const searchhandller=()=>{
        const data= {
            Tipic:Tab,
            City: city,
            Area: area,
            RealStateNumber:realstatenum,
            EsquierName: esquirename,
            EsquierPhoneNumber: esquireph,
            NoneId: AdvisorId
        }
        const dataenterise= Object.entries(data);

        let querystr='';
        dataenterise.map(mp=>{
            if(mp[1] !== '' && mp[1] !== undefined){
                querystr = querystr + `&${mp[0]}=${mp[1]}`
            }
        });
        
        REALSTATEGETALLINIT(page, querystr,role)
    }
    return(
        <section class="changerole-target3">
            <AdminPannelNav/>
            {mdl}
            <div className="search-frame">
            <div className='searc-target'>
                <div className='searc-box'>
                <div className="selectbox-one">
                <label className='label' >   ملک برای </label>
                    <select className='select' value={Tab} onChange={setvaluehd}  >
                        <option value="rahn" className='option'>
                        رهن و اجاره
                        </option> 
                        <option value="sells" className='option'>
                        فروش
                        </option> 
                    </select>
                </div>
                <div className='selectbox'>
                    <label className='label'>   شهر</label>
                <select className='select' onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'>
                        شهر
                    </option>
            {role?cityall && rolear.includes(role.role)?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):null:null}
            {role?!rolear.includes(role.role) && role.CitysAndAreas.length > 0?role.City.map((mp, i)=>(
                <option value={i} className='option'>
                    {mp.name}</option>
            )):null:null}
        </select>
        </div>
        {role?rolear.includes(role.role) && allerea?  <div className='selectbox'>
                <label className='label'> منطقه</label>
           <select className='select' disabled={allerea && city !== ''?false:true} 
           onChange={(e)=>setareahandller(e.target.value)} >
                    <option className='option'  >
                        منطقه
                    </option>
            {allerea.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            ))}
</select>
 </div>:null:null}
{ role?!rolear.includes(role.role) && role.CitysAndAreas.length > 0? <div className='selectbox'>
                <label className='label'> منطقه</label>
           <select className='select' disabled={cityid && city !== ''?false:true} 
           onChange={(e)=>setareahandller(e.target.value)} >
                    <option className='option'  >
                        منطقه
                    </option>
             {role.CitysAndAreas.map(mp=>(
                mp.objid._id === cityid ?<option className='option'>
                    {mp.areaName}</option>:null
            ))}
</select>
 </div>:null:null}
                    <div className='search-inputbox'>
                        <label className='label'>آیدی ملک</label>
                        <input className='search-inp' value={realstatenum}
                         onChange={(e)=> setrealstatenum(e.target.value)} type='number' name='id' />
                    </div>
                    <div className='search-inputbox'>
                        <label className='label'>آیدی مشاور</label>
                        <input className='search-inp' value={AdvisorId}
                         onChange={(e)=> setAdvisorId(e.target.value)} type='number' name='advisor-Id' />
                        </div>
                        <div className='search-inputbox'>
                        <label className='label'>شماره همراه مالک</label>
                        <input className='search-inp' value={esquireph}
                         onChange={(e)=> setesquierph(e.target.value)} type='number' name='tell' />
                        </div>
                        <div className='search-inputbox'>
                        <label className='label'>نام مالک</label>
                        <input className='search-inp' value={esquirename}
                         onChange={(e)=>setesquiername(e.target.value)} type='text' name='nam' />
                        </div>
                        <div className="search-btnbox">
                        <button className='search-btn' onClick={searchhandller} >جستجو</button>
                        </div>
                </div>
                
            </div>
        <div class="container3">
                    <div className="tab-content-management"  >
                    {AllData? AllData.length === 0?<div className="not-exist-state">موردی یافت نشد!!</div>:null:
                <div className="not-exist-realstate"><Spinner/></div>}   
                      { AllData?.map((mp,i)=>(
                          <div className='realstate-box-2'>
                             
                             <div className='card-middle2'>
                              <div className='card-headbox2'>
                              <h2 className='field'>  {mp.TypeState + " " + mp.Area}</h2>
                             <div className="card-textandicon"> 
                              <img width='20px' height='20px' 
                            src="https://img.icons8.com/ios-filled/50/000000/marker.png"/>
                            <h2 className='field'>    {mp.Type}</h2>
                            </div>
                              </div>
                          <div className="card-mid-box3">
                          <div className="card-textandicon"> 
                          <img width="20px" heigth="20px" 
                          src="https://img.icons8.com/material-rounded/24/000000/2016.png"/>

                              <h2 className='field'>{`${mp.YearBuild} سال ساخت  `}</h2>
                          </div>
                          <div className="card-textandicon"> 
                          <img 
                              width='20px' height='20px'
                              src="https://img.icons8.com/fluency-systems-filled/48/000000/double-bed.png"/>
                              <h2 className='field'> 
                               {mp.EsquierName}</h2>
                              </div>
                         <div className="card-textandicon"> 
                         <img width="20px" heigth="20px" 
                         src="https://img.icons8.com/ios-filled/50/000000/equal-housing-opportunity.png"
                         />
                              <h2 className='field'>  {mp.EsquierPhoneNumber}</h2>
                              </div>
                        <div className="card-textandicon"> 
                        <img 
                            width="25px"  height="25px"
                        src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-measure-home-tools-photo3ideastudio-solid-photo3ideastudio.png"/>
                              <h2 className='field'>   {mp.RealStateNumber}</h2>
                              </div>
                            </div> 
                            <div className="card-foot" >
                            {/* {mp.Mark?<img width='25px' height='25px' onClick={()=>lessmarkhandller(mp._id)} 
                            src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/>
                            :<img width='25px' height='25px' onClick={()=>addmarkhandller(mp._id)}
                            src="https://img.icons8.com/ios/50/000000/like--v1.png"
                            />} */}
                                {/* <h2 className='field'> متراژ : {mp.Measure} متر</h2> */}
                                <h2 className='field'> {mp.Tab === 'sells'? 'قیمت':"رهن"} : {changeprice(mp.Mortgage)}</h2>
                               
                                {/* {mp.Lease? <h2 className='field'> اجاره : {changeprice(mp.Lease)}</h2>:null } */}
                               </div>
                                </div>
                              {/* <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button> */}
                              
                              <div className='card-imbox-management'>
                                <div className='card-change'>  
                                <Link to={`/realstateupdate/${mp._id}`}> 
                                <img src={Edit} className='card-edit' />
                                </Link> 
                                 <img src={Trash} onClick={()=>showmodalhandller(mp._id)}
                                  className='card-edit' /> 
                                </div>
                                 <Link to={`/viewrealstate/${mp._id}`}> <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                                 className="management-img" />
                                 </Link>
                                <span className="card-status">{mp.Tipic?"":""}</span>
                                {/* <img src={video1} /> */}
                              </div>
                              </div>
                      ))}
                      
                       </div>
                       <Paginate setpage={setpage} page={page} length={length} />
                </div>
            
        </div>
    </section>
    )
}

const MapStateToProps=state=>{
    return{
        AllData: state.realstate.AllData,
        length:state.realstate.length,
        cityall: state.realstate.cityall,
        areaall: state.realstate.areaall,
        role: state.auth.data
    }
}
const MapDispatchToProps=dispatch=>{
    return{
        REALSTATEGETALLINIT:(page, limit, query)=> dispatch(action.REALSTATEGETALLINIT(page,limit, query)),
        changefilehandller:(data,path, query)=>dispatch(action.changefilehandller(data,path, query)),
        REALSTATEDELETEONEINIT:(id)=> dispatch(action.REALSTATEDELETEONEINIT(id))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(RealStateManager)


