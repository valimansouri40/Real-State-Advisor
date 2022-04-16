import React, { useEffect, useState } from "react";
import './MyProfile.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import ok from '../../assets/icons/icons8-ok-32.png';
import see from '../../assets/icons/icons8-hide-32.png';
import pend from '../../assets/icons/icons8-data-pending-24.png';
import { changeprice } from "../../components/UI/CardRealState/changePrice";
import Header from "../../components/Header/Header";

/// بخش درخواست های من در نوبار صفحه سایت

const MyReqeust=(props)=>{
        const {data, getallmyreqinit,auth, sendreq}=props;
        
       
        const [querytab, setquerytab]=useState('sendrealstate')
        
        const objtab={mapdesign:"طراحی نقشه",Mapping:'نقشه برداری',Registrationwork:'کار های ثبتی',Advocacy:'وکالت دادگاهی',Executionandconstruction:'اجرا و ساخت',
        ExpertofJustice:'کارشناس دادگستری',endofwork:'پایان کار', lisense:'جواز'}
        
        useEffect(()=>{
                getallmyreqinit(1 , 30)
        },[getallmyreqinit, querytab])
       
        const objtype= {"Buy land" : "خرید زمین با قابلیت رشد",
                "cooperation": "مشارکت در ساخت", "sendrealstate" : "سپردن ملک", 
            "recr" : "درخواست همکاری", "engine" : "خدمات مهندسی"}
    return(
        <div className='req-target'>

            <Header sendreq={sendreq} auth={auth}></Header>
        
            <div className='req-box' style={{width:'100%',minHeight:'100vh',
             display:'flex',alignItems:'flex-start',
        justifyContent:'space-around',flexFlow:'row wrap'}}>
             {data? data.length === 0?<div>موردی یافت نشد!!</div>:null:null} 
                    {data?data.map(mp=>(
                        <div style={{width:'30%',height:'10rem'}} className='req-card'>
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
                          <p className='req-p'> 
                                    {mp.Status === 'unseen'?<span>دیده نشده<img src={see} /></span>:null}
                                    {mp.Status === 'Pending'? <span>در حال بررسی<img src={pend} /></span>:null}
                                    {mp.Status === 'Accepted'? <span>تایید شده<img src={ok} /></span>:null}
                          </p>
                        </div>
                    )):null}
            </div>
        </div>
    )
}
const MapStateToProps=state=>{

    return{
        data: state.request.data,
        auth: state.auth.data
    }
}

const MapDispatchToProps=dispatch=>{
    return{
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
        getallmyreqinit:(query,page,limit)=> dispatch(action.getallmyreqinit(query,page, limit))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(MyReqeust);
