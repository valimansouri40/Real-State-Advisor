import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './MyProfile.css';
import * as action from '../../store/action/index';
import { getBase64 } from "../convertImgToBase64";
import picture from '../../assets/icons/icons8-picture-64.png';
import Header from "../../components/Header/Header";

/// نمایش و تغییر اطلاعات کاربر در نوبار صفحه

const MyProfile=(props)=>{
        const {UpdateProfile,setauthgetmeinit, data, sendreq} = props;
        const [img, setimg]=useState();
        const [on, seton]= useState();        

        useEffect(()=>{
                
              if(data){     seton({
                    Image:data.Image,
                    FristName:data.FristName,
                    LastName:data.LastName,
                    _id: data._id
                })}
                
        },[data])
        const imghdl=(e)=>{

            getBase64(e.target.files[0]).then(result=>setimg(result));
            
    }
        
        useEffect(()=>{
                setauthgetmeinit()
        },[setauthgetmeinit])
        
        const PatchProfile=()=>{
            let addim= on;
            if(img){
               addim.Image = img
            }
           
          UpdateProfile(on);
          setauthgetmeinit();
        }
        
        const changevaluehandller=(e)=>{
           
           const nb={
                        Image:on.Image,
                        FristName:e.target.value,
                        LastName:on.LastName,
                        _id: data._id
                    }
                seton(nb)
        }
        
        const changevaluehandller2=(e)=>{
            const nb={
                Image:on.Image,
                FristName:on.FristName,
                LastName:e.target.value,
                _id: data._id
            }
        seton(nb)
         }
         const limitrole= ['advisor', 'employee'];
    return(
        <section className='profilesec'>
            <Header auth={data} sendreq={sendreq}></Header>
                <div className='profilebox'style={{display:'flex',alignItems:'center', justifyContent:'space-around',height:'100vh'}}>
               
                {on?<div  className='profile'>
                       
                       <label className='sampel-label' for='picture'>
                             {img?<img style={{width:'300px', height:'300px',borderRadius:'50%'}}
                              src={img} className='sampel-label-img'/>:null}
                               {!img && data.Image ?<img style={{width:'300px', height:'300px',borderRadius:'50%'}}
                              src={data.Image} className='sampel-label-img'/>:null}
                               {!img && !data.Image ?<img style={{width:'300px', height:'300px',borderRadius:'50%'}}
                              src={picture} className='sampel-label-img'/>:null}
                       {!img? 'انتخاب تصویر':'تغییر تصویر'}</label>
                        <input type='file' multiple id='picture' accept='image/jpeg , image/png'
                         style={{display:'none'}}
                         onChange={imghdl}  /> 
                          <div className='show'>
                            <label className='labelnm'>نام</label>
                            <input type='text' className='name' onChange={changevaluehandller}
                            value={on.FristName} />
                   
                        </div>
                        <div className='show'>
                            <label className='labelnm'> نام خانوادگی</label>
                            <input type='text' onChange={changevaluehandller2} className='name'
                             value={on.LastName} />
                        </div>
                        <div className='show' >
                            <label className='labelnm'>شماره تلفن</label>
                            <span className='name'> : {data.PhoneNumber}</span>
                        </div> 
                        {limitrole.includes(data.role)?<div className='show' >
                            <label className='labelnm'>آدرس املاک</label>
                            <span className='name'> : {data.AdvisorAddress}</span>
                        </div>:null}
                       {/* <div className='show'>
                            <label className='labelnm'>رمز</label>
                            <p className='name'>{on?data.Password:star}</p>
                        </div>  */}
                        <button onClick={PatchProfile}>ارسال تغییرات</button>
                    
                    </div>:null}
                </div>
          
        </section>
    )
}

const MapStateToProps=state=>{

    return{
         data: state.auth.data
    }
}

const MapDispatchToProps=dispatch=>{
    return{
        setauthgetmeinit:()=>dispatch(action.setauthgetmeinit()),
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
         UpdateProfile:(data)=> dispatch(action.UpdateProfile(data))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(MyProfile)