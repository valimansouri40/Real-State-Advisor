import React,{useState,useEffect} from "react";
import classes from './Auth.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import {sineup ,login, forgotpassword, ressetpassword, SMS, changepassword} from '../../datajson';
import Form from "../../components/Form/Form";

/// بخش اهراز هویت که شامل 5 بخش ساخت حساب ورود به حساب فراموش کردن رمز عبور و وارد کردن کد ارسالی با اس ام اس میباشد


const Auth=(props)=>{
    const {loading, error, onAuthenticate, expiressCode, deleteexp, changmyepassword}= props;
    const path= window.location.hash;
    const text= {"#/sineup":"ساخت حساب", "#/login":"ورود به حساب","#/forgotpassword":"پسورد خود را فراموش کردم"
    ,"#/resetpassword":"ساخت پسورد جدید","#/sendsmscode":"وارد کردن کد ارسالی","#/changepassword":"تغییر پسوورد"}

    const [data,setdata]=useState();

    useEffect(()=>{
        switch(path){
            case '#/sineup':
                setdata(sineup)
                break;
            case '#/login':
                setdata(login)
                break;
            case '#/forgotpassword':
                setdata(forgotpassword)
                    break;
            case '#/resetpassword/:id':
                setdata(ressetpassword)
                break;
            case '#/sendsmscode':
                setdata(SMS)
                    break;
            case '#/changepassword':
                setdata(changepassword)
                   break;
           default: setdata()
           break;
        }

    },[path])
  


    return(
        path?<div className={classes.auth} style={{width:'100%',height:'100vh',display:'flex', 
        alignItems:'center',justifyContent:'center'}}>
                <Form expiresCode={expiressCode} 
                changmyepassword={changmyepassword}
                deleteexp={deleteexp} data={data} setdata={setdata}
                 onauth={onAuthenticate} loading={loading} error={error} >
                     <h1 className='headtxt'>{text[path]}</h1>
                 </Form>
        </div>:null
    );
}


const MapStateToProps=state=>{

    return{
        loading:state.auth.loading,
        error:state.auth.error,
        expiressCode: state.auth.expiresCode
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        changmyepassword: (data)=>dispatch(action.changepassword(data)),
        onAuthenticate: (data,path)=>dispatch(action.setauthlogininit(data,path)),
        deleteexp:(time)=> dispatch(action.deleteexp(time))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Auth)