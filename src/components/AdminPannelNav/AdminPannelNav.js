import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import './AdminPannelNav.css';


const AdminPannelNav=props=>{
            const {role}=props;
        const path= window.location.hash.replace('#', '');    

       
        let rolelimitnav=null;

        if(role){
            switch(role){
             case 'user':
                    rolelimitnav= null;
                    break
             case 'dealer':
                        rolelimitnav= [{path: '/', icon:'',text: 'صفحه اصلی'},{path: '/buildrealstatepost', 
                        icon:'' , text: 'ساخت ملک'},
                        ,{path: '/alladvisorappointments', icon:'',text: 'درخواست های بازدید ملک های من'}] ;
                        break;
             case 'advisor':
                    rolelimitnav= [{path: '/', icon:'',text: 'صفحه اصلی'},
                    {path: '/buildrealstatepost', icon:'',text: 'ساخت ملک'},
                    ,{path: '/alladvisorappointments', icon:'',text: 'درخواست های بازدید ملک های من'}];
                    break
             case 'employee':
                    rolelimitnav= [{path: '/', icon:'',text: 'صفحه اصلی'}
                    ,{path: '/realstatemanger', icon:'',text: 'مدیریت ملک ها'},
                    {path: '/allappointments', icon:'',text: 'زمان بازدید ها'},{path: '/buildrealstatepost', icon:'',text: 'ساخت ملک'},
                    {path: '/allrequest', icon:'',text: ' مدیریت درخواست ها'},{path: '/changerole', icon:'',text: 'مدیریت کاربران'},
                    {path: '/buildsampel', icon:'',text: 'اضافه کردن نمونه کار'},
                    {path: '/addcity', icon:'',text: 'مدیریت شهر ها'},{path: '/addarea', icon:'',text: 'مدیریت منطقه ها'},
                {path:'/commentmanagement', icon:'', text: 'مدیریت کامنت ها'},{path: '/alladvisorappointments', icon:'',text: 'درخواست های بازدید ملک های من'}];
                    break
             case 'admin':
                    rolelimitnav= [{path: '/', icon:'',text: 'صفحه اصلی'}
                    ,{path: '/realstatemanger', icon:'',text: 'مدیریت ملک ها'},
                    {path: '/allappointments', icon:'',text: 'زمان بازدید ها'},{path: '/buildrealstatepost', icon:'',text: 'ساخت ملک'},
                    {path: '/allrequest', icon:'',text: ' مدیریت درخواست ها'},{path: '/changerole', icon:'',text: 'مدیریت کاربران'},
                    {path: '/buildsampel', icon:'',text: 'اضافه کردن نمونه کار'},
                    {path: '/addcity', icon:'',text: 'مدیریت شهر ها'},{path: '/addarea', icon:'',text: 'مدیریت منطقه ها'},
                {path:'/commentmanagement', icon:'', text: 'مدیریت کامنت ها'},{path: '/alladvisorappointments', icon:'',text: 'درخواست های بازدید ملک های من'}];
                    break
                default : rolelimitnav = null
                break;
    
            }
        }
    return(
        <div className="adnav-all">
        <div className='adnav-target'>
          
            
            <div className='adnav-box'>
            <h1 className="adnav-h1"> پنل مدیریت  </h1>
                    {rolelimitnav?rolelimitnav.map(mp=><NavLink 
                    className={'adnav-link'}
                     to={mp.path}>
                            {mp.icon}
                            <h2 className={path === mp.path?'adnav-link-active':'adnav-h2'}>{mp.text}</h2>
                    </NavLink>):null}
            </div>
            </div>
        </div>
    )
}
const MapStateToProps=state=>{
    return{
        role: state.auth.role
    }
}

export default connect(MapStateToProps,null)(AdminPannelNav);