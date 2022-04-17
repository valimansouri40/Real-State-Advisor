import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import './AllAppointments.css';
import * as action from '../../store/action/index';
import { changeprice } from "../../components/UI/CardRealState/changePrice";
import Header from "../../components/Header/Header";
import Paginate from "../../components/Paginate/Paginate";
import Spinner from "../../components/UI/spinner/Spinner";
import Footer from "../../components/Footer/Footer";

const AdminPannelNav= React.lazy(()=>{
    return import("../../components/AdminPannelNav/AdminPannelNav")
})

///   شامل سه صفحه زمان های بازدید من در نوبار صفحه اصلی مدیریت زمان بازدید ها در پنل مدیریت و زمان بازدید ملک های من در پنل مدیریت

const AllAppointments= props=>{
        const {appogetinit, data, role, deletereqs, length, appoupdateinit,auth, setauthgetmeinit }= props;
        const path= window.location.hash;
        const [page, setpage]= useState(1);
        const [bol, setbol]= useState('not');
       const roleslimit= ['admin', 'employee', 'advisor'];
        
        useEffect(()=>{
            setauthgetmeinit();
        },[setauthgetmeinit, path])
        let limittab= '';
        if(bol !== ''){
            limittab= `Accept=${bol}`
        }
        useEffect(()=>{
            if(auth){if( path === '#/allappointments'){
                appogetinit(`/appointment?page=${page}&limit=20&${limittab}`);
            }else if( path === '#/alladvisorappointments'){
                appogetinit(`/appointment?page=${page}&limit=20&AdvisorId=${auth._id}`);
            }else if(path === '#/myappointments'){
                appogetinit(`/appointment?page=${page}&limit=20${auth._id}&Accept=ok`);
            }}
            
        },[appogetinit, path, role, bol])

        let header= null;
        let tabbar=null;
           switch(path){
             case '#/myappointments':
                   header = <Header auth={auth}></Header>
                   break;
            case '#/alladvisorappointments':
                    header = <AdminPannelNav></AdminPannelNav>
                    break; 
            case '#/allappointments':
                header = <AdminPannelNav></AdminPannelNav>;
                tabbar=  <div className='acceptcoment-tabbox'>
                <button onClick={()=>setbol('')} className={!bol?"nav-link-active":"nav-link "}> همه</button>
                <button onClick={()=>setbol('not')} className={bol?"nav-link-active":"nav-link "}>تایید نشده</button>
            </div>
                break
                default: header= null;
           }
        
           const statushandller=(dt, id)=>{
                const dts= {
                    Accept: dt
                }
                appoupdateinit(dts, id);
                if( path === '#/allappointments'){
                    appogetinit(`/appointment?page=${page}&limit=20&${limittab}`);
                }else if( path === '#/alladvisorappointments'){
                    appogetinit(`/appointment?page=${page}&limit=20&AdvisorId=${auth._id}`);
                }
           }

           const deletehandller= (id)=>{
                    const url= `/appointment/${id}`
                    deletereqs(url);
                    if( path === '#/allappointments'){
                        appogetinit(`/appointment?page=${page}&limit=20&${limittab}`);
                    }else if( path === '#/alladvisorappointments'){
                        appogetinit(`/appointment?page=${page}&limit=20&AdvisorId=${auth._id}`);
                    }
           }
    return(
        <section className={path === '#/myappointments'?'allappointment':'changerole-target'}>
                {header}
                <div className='allappointment-target'>
                    <div className='allappointment-frame'>
                    
                            {tabbar}
                    {data? data.length === 0?<div>موردی یافت نشد!!</div>:null:<Spinner/>} 
                        {data? data.map(mp=>mp.Accept?<div className='allappointment-box'>
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
                                        {mp.AdvisorId?<><div className='allappointment-fieldbox'>
                                        <h3 className='allappointment-field'> نام اقدام کننده :{mp.AdvisorId.FristName 
                                            + '  '+ 
                                            `${mp.AdvisorId.LastName? mp.AdvisorId.LastName:''}`}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> شماره اقدام کننده : {mp.AdvisorId.PhoneNumber}</h3>
                                        </div></>:null}
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> تاریخ بازدید : {mp.Appointment}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> زمان بازدید : {mp.Time}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> ایدی ملک : {mp.RealStateNumber}</h3>
                                        </div>
                                     </div>
                                   { mp.RealStateId?<div className='allappointment-part'>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'>  {changeprice(mp.RealStateId.Mortgage)}</h3>
                                        </div>
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
                                        {roleslimit.includes(role)?<><div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> شماره مالک : {mp.RealStateId.EsquierPhoneNumber}</h3>
                                        </div>
                                        <div className='allappointment-fieldbox'>
                                            <h3 className='allappointment-field'> نام مالک : {mp.RealStateId.EsquierName}</h3>
                                        </div></>:null}
                                        <div className='allappointment-fieldbox'>
                                            {path === '#/allappointments' || path=== '#/alladvisorappointments'?
                                            <select value={mp.Accept} onChange={(e)=>statushandller(e.target.value, mp._id)}
                                             className='allreq-slect'>
                                            <option  className='allreq-option' value='not'  >دیده نشده</option>
                                            <option className='allreq-option' value='ok'> پذیرفته شده</option>
                                            </select >:null}
                                            
                                        </div>
                                    </div>:null}
                        </div>:null):null}

                    </div>
                    <Paginate length={length} page={page} setpage={setpage}></Paginate>
                </div>
                {path === '#/myappointments'? <Footer/>:null}
        </section>
    )
}

const MapStateToProps= state=>{
    return{
        data: state.appointment.data,
        role: state.auth.role,
        auth: state.auth.data,
        length: state.appointment.length
    }
}

const MapDispatchToProps= dispatch=>{
    return{
        appogetinit: (query)=>dispatch(action.appogetinit(query)),
        appoupdateinit: (dt,id)=> dispatch(action.appoupdateinit(dt,id)),
        setauthgetmeinit:()=> dispatch(action.setauthgetmeinit()),
        deletereqs: (url)=> dispatch(action.deletereqs(url))
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(AllAppointments);