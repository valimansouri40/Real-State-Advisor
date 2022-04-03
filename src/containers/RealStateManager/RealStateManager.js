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

const RealStateManager=(props)=>{
    const {REALSTATEGETALLINIT,length , AllData, REALSTATEDELETEONEINIT}=props;
    console.log(length)
    const [Tab, settab]=useState('rahn');
    const [page, setpage]=useState(1)
    const [modal, setmodal]=useState(false);
    const [cardid,setcardid]=useState();
    console.log(Tab)
    useEffect(()=>{

        REALSTATEGETALLINIT(page, `Tipic=${Tab}`)
    },[REALSTATEGETALLINIT, Tab,page])
        console.log(AllData)
    const setvaluehd=(e)=>{
        settab(e.target.value);
    }

    const realstateDeleteHandller=(id)=>{
        console.log(id)
        REALSTATEDELETEONEINIT(cardid);
    }
    const showmodalhandller=(id)=>{
        setcardid(id);
        setmodal(true)
    }
    let mdl=null;
    if(modal){
        mdl =<Modal setmodal={setmodal}><div className='realstatemanager-modal' >
                <h3 className="realstatemanager-h3"> اطمینان دارید از حذف این مورد؟</h3>
                <button className='ok' onClick={realstateDeleteHandller}>حذف شود</button>
                <button className='cancel' onClick={()=>setmodal(false)}>لغو</button>
        </div></Modal>
    }
    return(
        <section class="posts">
            {mdl}
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
                    <div className="tab-content"  >
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
                                    {/* <p className='field'>{mp.Flooring}</p>
                                    <p className='field'>{mp.Balcony}</p>
                                    <p className='field'>{mp.City}</p>
                                    <p className='field'>{mp.Type}</p>
                                    <p className='field'>{mp.HeaterSystem}</p>
                                    <p className='field'>{mp.Floors}</p>
                                    <p className='field'>{mp.PropertySituation}</p> */}
                                    
                                    </div>
                              
                              <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button>
                              </div>
                      )):null}
                      
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
        length:state.realstate.length
    }
}
const MapDispatchToProps=dispatch=>{
    return{
        REALSTATEGETALLINIT:(page, limit, query)=> dispatch(action.REALSTATEGETALLINIT(page,limit, query)),
        REALSTATEDELETEONEINIT:(id)=> dispatch(action.REALSTATEDELETEONEINIT(id))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(RealStateManager)


