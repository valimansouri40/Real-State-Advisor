import React from "react";
import { NavLink } from "react-router-dom";
import './Drawer.css';


const Drawer= (props)=>{
    const {setmodal,closeModalInit, drw,ul,roleslimit2,auth,deletecookie, roleslimit, settab}= props;
    return(
        <>
        {ul?auth?<ul onClick={()=>closeModalInit(false, false)}  className="dropdown-content-responsive"  
                                        style={{position:'absolute', left:'0' , top:'90%'}} >
                                            <li >
                                                ناحیه کاربری</li>
                                                <li>
                                          <NavLink to='/'className="drw-navlink"><span>  خانه  </span>
                                          <svg style={{width:'20px', height:'20px',display:"flex",alignItems:"center"
                                          ,justifyContent:"space-around"}} 
        class="svg-inline--fa fa-home-lg fa-w-18" aria-hidden="true" 
        focusable="false" data-prefix="fad" data-icon="home-lg" role="img"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
             <g class="fa-group"><path class="fa-secondary" fill="currentColor" 
             d="M496 512H368a16 16 0 0 1-16-16V368a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v128a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 0 1-16 16z"></path><path class="fa-primary" fill="currentColor" d="M527.92 283.88L298.6 81.61a16 16 0 0 0-21.17 0L48.11 283.89a16 16 0 0 1-22.59-1.21L4.1 258.89a16 16 0 0 1 1.21-22.59l256-226a39.85 39.85 0 0 1 53.45 0L416 99.67V48a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v136.43l58.69 51.83a16 16 0 0 1 1.22 22.59l-21.4 23.82a16 16 0 0 1-22.59 1.21z"></path></g></svg>
        </NavLink></li>
                                          <li>
                                          <NavLink to='/myrequest' className="drw-navlink"><span>پیگیری درخواست ها </span>
                                          <svg style={{width:'20px', height:'20px'}}
                                           class="svg-inline--fa fa-long-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M193.456 357.573L127.882 292H424c13.255 0 24-10.745 24-24v-24c0-13.255-10.745-24-24-24H127.882l65.574-65.573c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L7.029 239.029c-9.373 9.373-9.373 24.568 0 33.941l135.515 135.515c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.372 9.373-24.568 0-33.941z"></path></svg>
                                            </NavLink>
                                         </li>
                                         {/* <li  className="drw-navlink" >
                                         <NavLink to='/'>  <span>   </span>
                                         </NavLink>
                                        </li>  */}
                                        <li onClick={setmodal} >
                                        استخدام همکار</li>
                                            <li><NavLink to='/myprofile'>
                                            ویرایش نام کاربری</NavLink></li>
                                            
                                            <li><NavLink to='/myappointments'>
                                            زمان بازدید  من</NavLink></li>
                                            {/* <li><NavLink to='/changepassword'>تغییر رمز</NavLink></li> */}
                                            <li><NavLink to='/cooperationpage'>فرصت سرمایه گذاری</NavLink></li>
                                            <li><NavLink to='/mymarks'>
                                                علاقه مندی ها</NavLink></li> 
                                               {/* { auth.role === 'advisor'?<li><NavLink to='/buildrealstatepost'>
                                                ساخت ملک</NavLink></li>:null } */}
                                                 { roleslimit2.includes(auth.role)?<li><NavLink to='/realstatemanger'>
                                                پنل مدیریت</NavLink></li>:null }
                                                { roleslimit.includes(auth.role)?<><li><NavLink to='/buildrealstatepost'>
                                                ساخت ملک</NavLink></li>
                                                <li><NavLink to='/alladvisorappointments'>
                                                درخواست های بازدید ملک های من
                                                </NavLink></li>
                                                </>:null }
                                            <li onClick={()=>deletecookie()}>
                                            خروج از حساب</li>
                                        </ul>:
                                        <ul onClick={()=>closeModalInit(false, false)} className="dropdown-content-responsive"  
                                        style={{position:'absolute', left:'0' , top:'73%'}}>
                                           <li> <NavLink to='/'className="drw-navlink"><span>  خانه  </span>
                                          <svg style={{width:'20px', height:'20px',display:"flex",alignItems:"center"
                                          ,justifyContent:"space-around"}} 
        class="svg-inline--fa fa-home-lg fa-w-18" aria-hidden="true" 
        focusable="false" data-prefix="fad" data-icon="home-lg" role="img"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
             <g class="fa-group"><path class="fa-secondary" fill="currentColor" 
             d="M496 512H368a16 16 0 0 1-16-16V368a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v128a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 0 1-16 16z"></path><path class="fa-primary" fill="currentColor" d="M527.92 283.88L298.6 81.61a16 16 0 0 0-21.17 0L48.11 283.89a16 16 0 0 1-22.59-1.21L4.1 258.89a16 16 0 0 1 1.21-22.59l256-226a39.85 39.85 0 0 1 53.45 0L416 99.67V48a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v136.43l58.69 51.83a16 16 0 0 1 1.22 22.59l-21.4 23.82a16 16 0 0 1-22.59 1.21z"></path></g></svg>
        </NavLink></li>
                                        <li><NavLink to='/sineup'>
                                        ایجاد حساب</NavLink></li>
                                        <li><NavLink to='/login'>ورود به حساب</NavLink></li>
                                        <li><NavLink to='/forgotpassword'>پسورد خود را فراموش کردم</NavLink></li>
                                        <li onClick={setmodal} >
                                        استخدام همکار</li>
                                        </ul>
                                        :null}
       { drw?<ul  className="drawer-box" onClick={()=>closeModalInit(false, false)}>
                    <li  class="drawer-item" 
                onClick={()=>settab('sells')}>
                    <NavLink class="drawer-item-link" to="/">
                <svg style={{width:'20px', height:'20px', marginLeft:'10px'}} 
                class="svg-inline--fa fa-home-lg fa-w-18" aria-hidden="true" 
                focusable="false" data-prefix="fad" data-icon="home-lg" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                    <g class="fa-group"><path class="fa-secondary" fill="currentColor" 
                    d="M496 512H368a16 16 0 0 1-16-16V368a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v128a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 0 1-16 16z"></path><path class="fa-primary" fill="currentColor" d="M527.92 283.88L298.6 81.61a16 16 0 0 0-21.17 0L48.11 283.89a16 16 0 0 1-22.59-1.21L4.1 258.89a16 16 0 0 1 1.21-22.59l256-226a39.85 39.85 0 0 1 53.45 0L416 99.67V48a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v136.43l58.69 51.83a16 16 0 0 1 1.22 22.59l-21.4 23.82a16 16 0 0 1-22.59 1.21z"></path></g></svg>
                <span>  خانه  </span></NavLink></li>
                
                <li class="drawer-item" 
                onClick={()=>settab('engine')}><NavLink className="drawer-item-link" to="/"><svg style={{width:'20px', height:'20px', marginLeft:'10px'}} className="svg-inline--fa fa-sack-dollar fa-w-16" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sack-dollar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g className="fa-group"><path class="fa-secondary" fill="currentColor" d="M192 96h128l47.4-71.12A16 16 0 0 0 354.09 0H157.94a16 16 0 0 0-13.31 24.88zm128 32H192C-10.38 243.4.09 396.64.09 416c0 53 49.11 96 109.68 96h292.48c60.58 0 109.68-43 109.68-96 0-19 9.35-173.24-191.93-288zm-46.58 278v17.34a8.68 8.68 0 0 1-8.7 8.62h-17.41a8.69 8.69 0 0 1-8.71-8.62v-17.51a63.14 63.14 0 0 1-34.16-12.17 8.52 8.52 0 0 1-.67-13l12.84-12.06a8.93 8.93 0 0 1 11-.76 26.71 26.71 0 0 0 13.93 4h30.58c7.07 0 12.84-6.35 12.84-14.22 0-6.46-3.92-12.06-9.58-13.67l-49-14.54c-20.24-6-34.39-25.2-34.39-46.74 0-26.38 20.68-47.82 46.46-48.57v-17.48a8.69 8.69 0 0 1 8.75-8.62h17.41a8.68 8.68 0 0 1 8.7 8.62v17.55a63.15 63.15 0 0 1 34.17 12.17 8.54 8.54 0 0 1 1.58 12 8.72 8.72 0 0 1-.92 1l-12.73 12.2a8.91 8.91 0 0 1-11 .75 26.8 26.8 0 0 0-13.93-4h-30.57c-7.07 0-12.84 6.35-12.84 14.21 0 6.46 3.92 12.06 9.57 13.68l49 14.54c20.24 6 34.38 25.2 34.38 46.74-.14 26.4-20.92 47.94-46.6 48.54z"></path><path class="fa-primary" fill="currentColor" d="M285.64 310.72l-49-14.54c-5.65-1.62-9.57-7.22-9.57-13.68 0-7.86 5.77-14.21 12.84-14.21h30.56a26.8 26.8 0 0 1 13.93 4 8.91 8.91 0 0 0 11-.75l12.73-12.2a8.72 8.72 0 0 0 .92-1 8.54 8.54 0 0 0-1.56-12 63.15 63.15 0 0 0-34.17-12.17v-17.55a8.68 8.68 0 0 0-8.7-8.62H247.2a8.69 8.69 0 0 0-8.74 8.62v17.48c-25.78.75-46.46 22.19-46.46 48.57 0 21.54 14.15 40.74 34.39 46.74l49 14.54c5.66 1.61 9.58 7.21 9.58 13.67 0 7.87-5.77 14.22-12.84 14.22h-30.58a26.71 26.71 0 0 1-13.93-4 8.93 8.93 0 0 0-11 .76l-12.84 12.06a8.52 8.52 0 0 0 .67 13 63.14 63.14 0 0 0 34.16 12.17v17.51a8.69 8.69 0 0 0 8.71 8.62h17.41a8.68 8.68 0 0 0 8.7-8.62V406c25.68-.6 46.46-22.14 46.6-48.54-.03-21.54-14.15-40.74-34.39-46.74zM329 96H183a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h146a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"></path></g></svg>
            <span> خدمات مهندسی  </span></NavLink></li>
                <li class="drawer-item" onClick={()=>settab('cooperation')}><NavLink class="drawer-item-link" to="/"><svg style={{width:'20px', height:'20px', marginLeft:'10px'}} class="svg-inline--fa fa-brush fa-w-12" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="brush" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M384 32v224H0V32A32 32 0 0 1 32 0h320a32 32 0 0 1 32 32z"></path><path class="fa-primary" fill="currentColor" d="M0 288v32a64 64 0 0 0 64 64h64v64a64 64 0 0 0 128 0v-64h64a64 64 0 0 0 64-64v-32zm192 184a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>
            <span> فرصت سرمایه گذاری </span></NavLink></li>
                <li onClick={setmodal}><NavLink to="/"  class="drawer-item-link">
                <svg style={{width:'20px', height:'20px', marginLeft:'10px'}}
                class= "svg-inline--fa fa-headset fa-w-16" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="headset" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M192 464a48 48 0 0 1 48-48h32a48 48 0 0 1 48 48h101.72A42.28 42.28 0 0 0 464 421.72s0-163.29-.12-165.72h.12c0-114.69-93.31-208-208-208S48 141.31 48 256v16a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-16C4.58 118.83 113.18 0 256 0s251.42 118.83 256 256v165.72A90.28 90.28 0 0 1 421.72 512H240a48 48 0 0 1-48-48z"></path><path class="fa-primary" fill="currentColor" d="M368 176h-16a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h16a64 64 0 0 0 64-64v-48a64 64 0 0 0-64-64zm-208 0h-16a64 64 0 0 0-64 64v48a64 64 0 0 0 64 64h16a32 32 0 0 0 32-32V208a32 32 0 0 0-32-32z"></path></g></svg>
            <span>  استخدام همکار </span></NavLink></li> 
        </ul>:null}
        </>
    )
}

export default Drawer;