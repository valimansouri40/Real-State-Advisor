import React,{useState,useEffect} from "react";
import './Auth.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import {sineup ,login, forgotpassword, ressetpassword, SMS, changepassword} from '../../datajson';
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CloseComponent from "../../components/CloseComponent/CloseComponent";

/// بخش اهراز هویت که شامل 5 بخش ساخت حساب ورود به حساب فراموش کردن رمز عبور و وارد کردن کد ارسالی با اس ام اس میباشد


const Auth=(props)=>{
    const {loading, error, onAuthenticate, Tab,sendreq,auth,expiressCode, deleteexp, changmyepassword}= props;
    const [tab, settab]=useState(Tab);
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
  
    useEffect(()=>{
        if( path === '#/sendsmscode' && !localStorage.getItem('phn')){
            let newurl = window.location.protocol + "//" + window.location.host + '#/' + 'login';
            
            window.history.pushState({}, '', newurl)
        }
    },[path])

    return(
        path?<>
        <Header tab={Tab} settab={settab} auth={auth} sendreq={sendreq} />
        <CloseComponent>
        <div className="auth" >
           
                <Form expiresCode={expiressCode} 
                changmyepassword={changmyepassword}
                deleteexp={deleteexp} data={data} setdata={setdata}
                 onauth={onAuthenticate} loading={loading} error={error} >
                     <h1 className='headtxt'>{text[path]}</h1>
                 </Form>
            
        </div>
        </CloseComponent>
        <Footer/></>:null
    );
}


const MapStateToProps=state=>{

    return{
        loading:state.auth.loading,
        error:state.auth.error,
        expiressCode: state.auth.expiresCode,
        Tab: state.realstate.Tab,
        auth: state.auth.data
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        changmyepassword: (data,url)=>dispatch(action.changepassword(data,url)),
        onAuthenticate: (data,path)=>dispatch(action.setauthlogininit(data,path)),
        deleteexp:(time)=> dispatch(action.deleteexp(time)),
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(Auth)