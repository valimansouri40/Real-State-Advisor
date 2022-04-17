import React,{useEffect, useState}  from "react";
import './AcceptComment.css';
import * as action from '../../store/action/index';
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";
import { connect } from "react-redux";
import StarRatings from 'react-star-ratings'
import Paginate from '../../components/Paginate/Paginate';
import Spinner from "../../components/UI/spinner/Spinner";


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
                    if(bol === 'limit'){
                        reviwegetinit(`/reviwe/get?page=${page}&limit=20&Accept=not`);
                    }else if(bol === 'all'){
                        reviwegetinit(`/reviwe/get?page=${page}&limit=20`);
                    }
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
        <section className='changerole-target'>
                <AdminPannelNav/>
                <div className='acceptcoment-target'>
                    <div className='acceptcoment-tabbox'>
                        <button onClick={()=>setbol('all')} className={bol === 'all'?"nav-link-active":"nav-link "}> همه</button>
                        <button onClick={()=>setbol('limit')} className={bol === 'limit'?"nav-link-active":"nav-link "}>تایید نشده</button>
                    </div>
                    {data? data.length === 0?<div>موردی یافت نشد!!</div>:null:<Spinner/>} 
                        <div className='acceptcoment-frame'>
                        {data? data.map(mp=>mp.RealStateId?<div className='allappointment-box'>
                                     <div className='allappointment-delete' onClick={()=>deletehandller(mp._id)}>
                                    <img width='50px' height='50px'
                                     src="https://img.icons8.com/windows/32/000000/multiply.png"/>
                                    </div>
                                    <div className='allappointment-part'>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> نام بازدید کننده :{mp.UserId.FristName 
                                            + '  '+ 
                                            `${mp.UserId.LastName? mp.UserId.LastName:''}`}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> شماره بازدید کننده : {mp.UserId.PhoneNumber}</h3>
                                        </div>
            
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> ایدی ملک : {mp.RealStateId.RealStateNumber}</h3>
                                        </div>
                                     </div>
                                   { mp.RealStateId?<div className='allappointment-part'>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> دیدگاه کاربر : {mp.Message}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                        امتیاز کاربر : <StarRatings
                                            rating={mp.Rate}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="2vh"
                                            starSpacing="3px"
                                            /> </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> متراژ ملک : {mp.RealStateId.Measure}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> شهر : {mp.RealStateId.City}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> منطقه : {mp.RealStateId.Area}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> نوع ملک : {mp.RealStateId.TypeState}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> شماره مالک : {mp.RealStateId.EsquierPhoneNumber}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> نام مالک : {mp.RealStateId.EsquierName}</h3>
                                        </div>
                                        <select value={mp.Accept} onChange={(e)=>statushandller(e.target.value, mp._id)} className='allreq-slect'>
                                        <option  className='allreq-option' value='not'  >دیده نشده</option>
                                        <option className='allreq-option' value='ok'> پذیرفته شده</option>
                                        </select>
                                    </div>:null}
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