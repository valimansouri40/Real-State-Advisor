import React, { useEffect, useState } from "react";
import './MyProfile.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import ok from '../../assets/icons/icons8-ok-32.png';
import see from '../../assets/icons/icons8-hide-32.png';
import pend from '../../assets/icons/icons8-data-pending-24.png';

const MyReqeust=(props)=>{
    // const status =[{sta:'unseen', txt:'دیده نشده'}, {sta:'Pending', txt:'در حال بررسی'},{sta:'Accepted',txt:'تایید شده'}]
        const tabsarrr= [{value:'Buy land', txt:'خرید زمین با قابلیت رشد'},
        {value:'cooperation', txt:'مشارکت در ساخت'},{value:'sendrealstate', txt:'سپردن ملک'},
       {value:'recr', txt:'درخواست همکاری'}, {value:'engine', txt:'خدمات مهندسی'}];
        const [querytab, setquerytab]=useState('sendrealstate')
        const {data, getallmyreqinit,auth}=props;
        const objtab={mapdesign:"طراحی نقشه",Mapping:'نقشه برداری',Registrationwork:'کار های ثبتی',Advocacy:'وکالت دادگاهی',Executionandconstruction:'اجرا و ساخت',
        ExpertofJustice:'کارشناس دادگستری',endofwork:'پایان کار', lisense:'جواز'}
        
        useEffect(()=>{
                getallmyreqinit(querytab,1 , 10)
        },[getallmyreqinit, querytab])
        console.log(data)

        const getdatatabinit=(e)=>{
                setquerytab(e);
              console.log(e)
        }

    return(
        <div className='req-target'>
           <div className='req-headtabar'> {tabsarrr.map(ar=>(
                <button onClick={()=>getdatatabinit(ar.value)} className='req-btn'>{ar.txt}</button>
            ))}
            </div>
            <div className='req-box' style={{width:'100%',minHeight:'100vh',
             display:'flex',alignItems:'flex-start',
        justifyContent:'space-around',flexFlow:'row wrap'}}>
                    {data?data.map(mp=>(
                        <div style={{width:'30%',height:'10rem'}} className='req-card'>
                          <h3 className='req-h3'> :{mp.Type}</h3>
                          <p className='req-p'><span> {mp.Text} </span> <span> : توضیحات</span></p>
                          <p className='req-p'> {mp.Job}</p>
                          <p className='req-p'> {mp.Price}</p>
                          <p className='req-p'> {mp.Area}</p>
                          <p className='req-p'> {mp.City}</p>
                          <p className='req-p'> {mp.TypeState}</p>
                          {mp.Type === 'engine'?<p className='req-p'> درخواست: {objtab[mp.TypeWork]}</p>:null}
                          <p className='req-p'> {mp.Cooperation?'  من آمادگی مشارکت در ساخت را دارم':null}</p>
                          <p className='req-p'> {mp.Land?' من آمادگی سرمایه گذاری در زمین برای مشارکت در ساخت را دارم':null}</p>
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
        getallmyreqinit:(query,page,limit)=> dispatch(action.getallmyreqinit(query,page, limit))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(MyReqeust);
