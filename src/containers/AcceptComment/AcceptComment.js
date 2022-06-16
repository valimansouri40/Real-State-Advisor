import React,{useEffect, useState}  from "react";
import './AcceptComment.css';
import * as action from '../../store/action/index';
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";
import { connect } from "react-redux";
import StarRatings from 'react-star-ratings'
import Paginate from '../../components/Paginate/Paginate';
import Spinner from "../../components/UI/spinner/Spinner";
import { Link } from "react-router-dom";


///   بخش مدیریت کامنت ها در پنل مدیریت

const AcceptComment =props=>{
        const { data, reviwegetinit, reviwepatchinit,deletereqs, length}= props;
            const [bol, setbol]= useState('limit');
            const [page, setpage]= useState(1);
            const statushandller=(e, id)=>{
                    const data={
                        Accept: e
                    }
                    reviwepatchinit(data, id);

                    setTimeout(() => {
                        if(bol === 'limit'){
                            reviwegetinit(`/reviwe/get?page=${page}&limit=20&Accept=not`);
                        }else if(bol === 'all'){
                            reviwegetinit(`/reviwe/get?page=${page}&limit=20`);
                        }
                    }, 100);
                   
            }

            useEffect(()=>{
                if(bol === 'limit'){
                reviwegetinit(`/reviwe/get?page=${page}&limit=20&Accept=not`);
            }else if(bol === 'all'){
                reviwegetinit(`/reviwe/get?page=${page}&limit=20`);
            }
            },[reviwegetinit, bol])
            
            const deletehandller=(id)=>{
                    const url= `/reviwe/${id}`;

                    deletereqs(url);
                    if(bol === 'limit'){
                        reviwegetinit(`/reviwe/get?page=${page}&limit=20&Accept=not`);
                    }else if(bol === 'all'){
                        reviwegetinit(`/reviwe/get?page=${page}&limit=20`);
                    }
            }
    return(
        <section className='changerole-target-comment-3'>
                <AdminPannelNav/>
                <div className='acceptcoment-target'>
                    <div className='acceptcoment-tabbox'>
                        <button onClick={()=>setbol('all')} className={bol === 'all'?"nav-link-active":"nav-link "}> همه</button>
                        <button onClick={()=>setbol('limit')} className={bol === 'limit'?"nav-link-active":"nav-link "}>تایید نشده</button>
                    </div>
                    {data? data.length === 0?<div>موردی یافت نشد!!</div>:null:<Spinner/>} 
                        <div className='acceptcoment-frame'>
                        
                        {data? data.map(mp=>mp.RealStateId?<div className='allcomment-box'>
                       { mp.UserId.Image?<img src={mp.UserId.Image} className="acceptcomment-profile"/>:
                       <img className='acceptcomment-profile' src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                                     <div className='allappointment-delete' onClick={()=>deletehandller(mp._id)}>
                                    
                                    <img width='30px' height='30px' title="حذف کردن دیدگاه"
                                     src="https://img.icons8.com/windows/32/000000/multiply.png"/>
                                    </div>
                                    
                                        <div className='allcomment-fieldbox'>
                                            
                                            <h3 className='allappointment-field3'> نام بازدید کننده :
                                            
                                             {mp.UserId.FristName 
                                            + '  '+ 
                                            `${mp.UserId.LastName? mp.UserId.LastName:''}`}</h3>
                                         <div className="rate-box">   
                                             <h3 className='allappointment-field4'>   
                                              امتیاز کاربر : 
                                               </h3>
                                               <StarRatings
                                            rating={mp.Rate}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="2vh"
                                            starSpacing="3px"
                                            /> 
                                            </div>
                                        </div>
                                        <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> شماره بازدید کننده : {mp.UserId.PhoneNumber}</h3>
                                            <h3 className='allappointment-field3'> ایدی ملک : {mp.RealStateId.RealStateNumber}</h3>
                                        </div>
            
                                   { mp.RealStateId?<>
                                        <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> دیدگاه کاربر : {mp.Message}</h3>
                                        </div>
                                        {/* <div className='allcomment-fieldbox'>
                                        امتیاز کاربر : <StarRatings
                                            rating={mp.Rate}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="2vh"
                                            starSpacing="3px"
                                            /> </div>*/}
                                        {/* <div className='allcomment-fieldbox'> 
                                            <h3 className='allappointment-field3'> متراژ ملک : {mp.RealStateId.Measure}</h3>
                                        </div> */}
                                        {/* <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> شهر : {mp.RealStateId.City}</h3>
                                        </div>
                                        <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> منطقه : {mp.RealStateId.Area}</h3>
                                        </div>
                                        <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> نوع ملک : {mp.RealStateId.TypeState}</h3>
                                        </div>
                                        <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> شماره مالک : {mp.RealStateId.EsquierPhoneNumber}</h3>
                                        </div>
                                        <div className='allcomment-fieldbox'>
                                            <h3 className='allappointment-field3'> نام مالک : {mp.RealStateId.EsquierName}</h3>
                                        </div> */}
                                        <div className="allcomment-fieldbox">
                                        <select value={mp.Accept} onChange={(e)=>statushandller(e.target.value, mp._id)} 
                                        className='allreq-slect'>
                                        <option  className='allreq-option' value='not'  >پذیرفته نشده</option>
                                        <option className='allreq-option' value='ok'> پذیرفته شده</option>
                                        </select>
                                        <button className="card-btn"><Link style={{textDecoration:"none" ,color:"#fff"}} 
                                        to={`/viewrealstate/${mp.RealStateId._id}`}> مشاهده صفحه </Link></button> 
                                        </div>
                                        </>:null}
                        </div>:null):null}
                        </div>
                        <Paginate page={page} setpage={setpage} length={length}></Paginate>
                </div>
        </section>
    )
}


const MapStateToProps=state=>{

    return{
        data: state.rate.reviwes,
        auth: state.auth.data,
        length: state.rate.length
    }
}
const MapDispatchToProps=dispatch=>{

    return{
        
        reviwegetinit: (id)=> dispatch(action.reviwegetinit(id)),
        reviwepatchinit: (id, data)=> dispatch(action.reviwepatchinit(id, data)),
        deletereqs: (url)=> dispatch(action.deletereqs(url))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(AcceptComment)