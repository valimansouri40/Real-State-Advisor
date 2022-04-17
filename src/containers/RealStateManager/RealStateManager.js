import React ,{useState, useEffect} from "react";
import './RealStateManager.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import video1 from '../../assets/icons/icons8-car-cleaning-48.png';
import Edit from '../../assets/icons/icons8-edit-32.png';
import Trash from '../../assets/icons/icons8-trash-can-64.png';
import Paginate from '../../components/Paginate/Paginate';
import { Link } from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";
import Spinner from "../../components/UI/spinner/Spinner";
// صفحه مدیریت ملک در پنل مدیریت

const RealStateManager=(props)=>{
    const {REALSTATEGETALLINIT,length , AllData, changefilehandller, REALSTATEDELETEONEINIT,
         role, cityall, areaall}=props;
    
    const [Tab, settab]=useState('rahn');
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
  
    useEffect(()=>{
        setallerea(areaall)
    },[areaall])
    useEffect(()=>{

        REALSTATEGETALLINIT(page, `Tipic=${Tab}`, role)
    },[REALSTATEGETALLINIT, Tab,page])
       
    const setvaluehd=(e)=>{
        settab(e.target.value);
        setpage(1);
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
                <button className='ok' onClick={realstateDeleteHandller}>حذف شود</button>
                <button className='cancel' onClick={()=>setmodal(false)}>لغو</button>
        </div></Modal>
    }
    const searchhandller=()=>{
        const data= {
            Tipic:Tab,
            City: city,
            Area: area,
            RealStateNumber:realstatenum,
            EsquierName: esquirename,
            EsquierPhoneNumber: esquireph
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
        <section class="changerole-target">
            <AdminPannelNav/>
            {mdl}
            <div className='searc-target'>
                <div className='searc-box'>
                <div className='selectbox'>
                    <label className='label'>   شهر</label>
                <select className='select' onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'  >
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
                        <label className='search-label'>آیدی ملک</label>
                        <input className='search-inp' value={realstatenum}
                         onChange={(e)=> setrealstatenum(e.target.value)} type='number' name='id' />
                        </div>
                        <div className='search-inputbox'>
                        <label className='search-label'>شماره همراه مالک</label>
                        <input className='search-inp' value={esquireph}
                         onChange={(e)=> setesquierph(e.target.value)} type='number' name='tell' />
                        </div>
                        <div className='search-inputbox'>
                        <label className='search-label'>نام مالک</label>
                        <input className='search-inp' value={esquirename}
                         onChange={(e)=>setesquiername(e.target.value)} type='text' name='nam' />
                        </div>
                        <button className='search-btn' onClick={searchhandller} >جستجو</button>
                </div>
                
            </div>
        <div class="container">

            <div class="row">
                <div class="tabs">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            {/* <button onClick={setvaluehd} className={Tab !==""?"nav-link":"nav-link active"} value="" >پیشنهاد ویژه سایت</button> */}
                            <button onClick={setvaluehd} className={Tab !=="rahn"?"nav-link":"nav-link active"}value="rahn" >رهن و اجاره</button>
                            <button onClick={setvaluehd} className={Tab !=="sells"?"nav-link":"nav-link active"} value="sells" >خرید ملک</button>
                            
                        </div>
                    </nav>
                    <div className="tab-content1"  >
                      {AllData? AllData.map((mp,i)=>(
                          <div className='realstate-box'>
                              <div className='card-imbox'>
                                <div className='card-change'>  
                                <Link to={`/realstateupdate/${mp._id}`}> 
                                <img src={Edit} className='card-edit' />
                                </Link> 
                                 <img src={Trash} onClick={()=>showmodalhandller(mp._id)}
                                  className='card-edit' /> 
                                </div>
                                <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                                 width='100px' height='100px' />
                                <span className="card-status">{mp.Tipic?"":""}</span>
                                <img src={video1} />
                              </div>
                              <div className='card-middle'>
                                  <div className='card-headbox'>
                                  <h2 className='card-head'>{mp.TypeState}</h2>
                                    <h3 className='card-address'>{mp.Type}</h3>
                                  </div>
                                    <p className='field'>{`${mp.YearBuild} سال ساخت`}</p>
                                    <p className='field'>{mp.TypeState}</p>
                                    <p className='field'>{mp.Type}</p>
                                    <p className='field'>{mp.SomeRoom}</p>
                                    <p className='field'>{mp.Measure}</p>
                                    <p className='field'>{mp.Mortgage}</p>
                                    
                                    
                                    </div>
                              
                              <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button>
                              </div>
                      )):<Spinner/>}
                      
                       </div>
                       <Paginate setpage={setpage} page={page} length={length} />
                </div>
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


