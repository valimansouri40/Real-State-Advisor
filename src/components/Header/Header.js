import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShowAlert } from "../../store/utility/alert";
import { deletecookie } from "../../store/utility/cookie";
import Modal from "../UI/Modal/Modal";
import Navigation from "../UI/Navigation/Navigation";
import './Header.css';
import Goooya from '../../assets/goooya-logo.png';
import Drawer from "../UI/Drawer/Drawer";
import { connect } from "react-redux";
import * as action from '../../store/action/index';

const Header= (props)=>{
        const {auth, sendreq,modalstatus, closeModalInit, modalstatus2,   settab}= props;
        
        const [modal, setmodal]= useState(false);
        const [modal2, setmodal2]= useState(false);
        const [work, setwork]= useState('');
        const [valid, setvalid]=useState(true);
        const [drw, setdrw]= useState(false);
        const roleslimit= ['admin', 'employee', 'advisor', 'dealer']
        const roleslimit2= ['admin', 'employee']
        
        const changephonenumber=(e)=>{
           
            const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
            setvalid(pattern.test(e))
            // if(!pattern.test(e)){
            //     setvalid(true)
            // }else{
            // setvalid(false)}
        }
    
        const modalhandller=()=>{
            if(!modal2){
                setmodal(e=>!e)
                setvalid(true)
            }
        }
        const modalhandller2= ()=>{
            if(!modal){
                setmodal2(e=>!e)
                setvalid(true)
            }
        }
        const workhhandller=(e)=>{
            if(e !== 'انتخاب کنید'){
                    setwork(e.target.value)
            }else{
                setwork('')
            }
        }


        const submithandller=(e)=>{
            e.preventDefault()
            let data;

            if(modal){
                data={
                    FristName:e.target[0].value,
                    PhoneNumber: e.target[1].value,
                    Job:work,
                    Text: e.target[3].value,
                    Type: 'recr'
                }
                const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
                if(pattern.test(data.PhoneNumber)){
                if(data.FristName !== '' && data.Job !== ''){
                        sendreq(data, auth?._id);
                }else{
                    ShowAlert([], 'اطلاعات وارد شده ناقص است', 'fail')
                }
            }else{
                ShowAlert([], 'لطفا شماره تلفن همراه خود را وارد کنید', 'fail')

            }
            }else if(modal2){
                data={
                    FristName:e.target[0].value,
                    PhoneNumber: e.target[1].value,
                    Text: e.target[2].value,
                    Type:'sendrealstate'
                }
                const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
                if(pattern.test(data.PhoneNumber)){
                if(data.FristName !== '' ){
                    sendreq(data, auth?._id);
                }else{
                    ShowAlert([], 'اطلاعات وارد شده ناقص است', 'fail')
                }
            }else{
                ShowAlert([], 'لطفا شماره تلفن همراه خود را وارد کنید', 'fail')
}
            
            }
        }

        const closehandller = ()=>{
            if(modalstatus || modalstatus2){
                closeModalInit(false, false)
            }
        }
        return(
            <React.Fragment>
            <header  onClick={closehandller}>
                <div  class="containerone">
                    <div class="row" >
                        
                            <div class="header-item">
                            <div class="drop-down-menu-berger">
              <a href="#">
                <i class="fa fa-bars"> </i>
              </a>
            </div>
            <div className="drawer-target">
            <img className="drawer-target-img"  onClick={()=>{
                closeModalInit(false,!modalstatus2)
                setdrw(e=>!e)
            }}
            src="https://img.icons8.com/ios/50/000000/menu--v1.png"/>
            
            </div>
            {<Drawer ul={modalstatus2} closeModalInit={closeModalInit} drw={modalstatus2} deletecookie={deletecookie}
             auth={auth} roleslimit2={roleslimit2} roleslimit={roleslimit}  setdrw={setdrw} settab={settab}
                setmodal={modalhandller}/>}
                <section  class="header-logo-area">
                                    <img src={Goooya} alt="" />
                                    <p>شفافیت در خرید و فروش املاک وخدمات مهندسی</p>
                                </section>
                         <div class="nav-menu">
                                    
                                   <Navigation  settab={settab}
                                    setmodal={modalhandller}></Navigation>
                                </div>
                              
                                <div class="menu-more">
                                    <div class="add-home">
                                        <button class="btn-add-home" 
                                        onClick={modalhandller2}>
                                            <svg style={{width:'20px', height:'20px'}} class="svg-inline--fa fa-plus fa-w-14" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M176 448a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V304h-96zm64-416h-32a32 32 0 0 0-32 32v144h96V64a32 32 0 0 0-32-32z"></path><path class="fa-primary" fill="currentColor" d="M448 240v32a32 32 0 0 1-32 32H32a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z"></path></g></svg>
                                       <a class="btn-add-home-link"> سپردن ملک </a></button>
                                    </div>
                                    <div class="user-menu dropdown" >
                                        <button className="dropbtn btn-user-menu" 
                                        href=''
                                         onClick={()=>closeModalInit(!modalstatus, false)}>
                                             <svg class="svg-inline--fa fa-user-plus fa-w-20" style={{width:'20px', height:'20px', 
                                             marginLeft:'5px'}} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M640 224v32a16 16 0 0 1-16 16h-64v64a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-64h-64a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h64v-64a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16v64h64a16 16 0 0 1 16 16z"></path><path class="fa-primary" fill="currentColor" d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm89.6 32h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6A134.43 134.43 0 0 0 313.6 288z"></path></g></svg>
                                       <span> {!auth?"ورود و ثبت نام":`${auth.FristName} 
                                            ${'  '}
                                            ${auth.LastName? auth.LastName:''}`}
                                        </span>
                                        <svg class="svg-inline--fa fa-angle-down fa-w-10"
                                         style={{width:'20px', height:'20px', marginLeft:'5px'}}
                                          aria-hidden="true" focusable="false" data-prefix="fas"
                                           data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor"
                                             d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                                        </button>
                                       {modalstatus?auth?<ul className="dropdown-content"  
                                        style={{zIndex:'100'}} >
                                            <li>
                                                ناحیه کاربری</li>
                                          <li>
                                          <NavLink to='/myrequest'>پیگیری درخواست ها</NavLink>
                                          </li>
                                            <li><NavLink to='/myprofile'>
                                            ویرایش نام کاربری</NavLink></li>
                                            
                                            <li><NavLink to='/myappointments'>
                                            زمان بازدید  من</NavLink></li>
                                            <li><NavLink to='/changepassword'>تغییر رمز</NavLink></li>
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
                                        <ul className="dropdown-content"  
                                        >
                                        <li><NavLink to='/sineup'>
                                        ایجاد حساب</NavLink></li>
                                        <li><NavLink to='/login'>ورود به حساب</NavLink></li>
                                        <li><NavLink to='/forgotpassword'>پسورد خود را فراموش کردم</NavLink></li>
                                        </ul>
                                        :null}
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                {/* <div className="header-homeitems">
                <NavLink to="/" className="header-homeitems-nav">خرید ملک</NavLink>
                <NavLink to="/" className="header-homeitems-nav">رهن واجاره</NavLink>
                <NavLink to="/" className="header-homeitems-nav">خدمات مهندسی</NavLink>
                 <NavLink to="/" className="header-homeitems-nav">سرمایه گذاری</NavLink>
                </div> */}
            </header>
            {modal && !modal2?<Modal modal={modal} setmodal={setmodal}><div class="modal fade" id="exampleModal2" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">    </h5>
                            <button  class="btn-close"  ></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                اطلاعات تکمیلی را وارد کنید تا کارشناسان
                                ما با شما تماس بگیرن
                            </p>
                            <form onSubmit={submithandller}>
                                <input className="input-phone" type="text"  placeholder="نام و نام خانوادگی"/>
                                <input className={valid?"input-phone":'input-phone-notvalid'}
                                 onChange={(e)=>changephonenumber(e.target.value)} 
                                type="text" placeholder="شماره تماس"/>
                                 <select onChange={workhhandller}  id="uuser" name="Type">
                        <option >انتخاب کنید</option>
                        <option >استخدام مشاور املاک</option>
                        <option >استخدام نقشه بردار</option>
                        <option >استخدام طراح ساختمان</option>
                        <option >استخدام جهت کارهای اداری و ثبتی</option>
                        <option >همکار کارشناس رسمی دادگستری</option>
                        <option >همکار وکیل دادگاه</option>
                    </select>
                                {/* <input type="text" disabled={localStorage.getItem('phn')?false:true} placeholder="کد تائید"/> */}
                                <textarea  cols="40" rows="5" placeholder="توضیحات بیشتر"></textarea>
                                <input className='submit' type='submit' value='ثبت'/>
                            </form>
            
                        </div>
                    </div>
                </div>
            </div></Modal>:null}
            {modal2 && !modal? <Modal modal={modal2} setmodal={setmodal2}>
                <div class="modal fade" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <p>
                                اطلاعات تکمیلی را وارد کنید تا کارشناسان
                                ما با شما تماس بگیرن
                            </p>
                            <form onSubmit={submithandller}>
                                <input type="text" className="input-phone"
                                 placeholder="نام و نام خانوادگی"/>
                                <input className={valid?'input-phone':'input-phone-notvalid'} onChange={(e)=>changephonenumber(e.target.value)} 
                                type="text" placeholder="شماره تماس"/>
                   
                    {/* <input type="text" name="" id="" placeholder="کد تائید"/> */}
                    <textarea  cols="40" rows="5" placeholder="توضیحات بیشتر"></textarea>
                                <input  className='submit' type='submit' value='ثبت'/>
                </form>
            
                        </div>
                    </div>
                </div>
            </div></Modal>:null}
            </React.Fragment>
        )


}
const MapStateToProps = state=>{
    return{
        modalstatus: state.mark.modal,
        modalstatus2: state.mark.modal2,
    }
}
const MapDispatchToProps =dispatch=>{
    return{
        closeModalInit: (dt, dt2)=> dispatch(action.closeModalInit(dt, dt2))
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(Header)
