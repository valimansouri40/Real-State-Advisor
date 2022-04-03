import React, { useEffect, useState } from "react";
import { Link ,Redirect} from "react-router-dom";
import Inputs from "../UI/inputs/inputs";
import classes from './Form.css';
import { ShowAlert } from "../../store/utility/alert";
import { autherrorhandling, validateor ,areadata, citydata} from "./autherrorhandling";
import Timer from "../UI/Timer/Timer";


const Form =(props)=>{
    const {data, setdata, onauth, loading ,location,changmyepassword
         , error,expiresCode,changefilehandller, deleteexp}=props;
    const  [bol,setbol]=useState('');
    const [timer, settime]= useState(0);
    const path=window.location.hash;
        
    
    const ChangeValueHandller=(e,id)=>{
        const chg= {...data,
        [id]:{
            ...data[id],
            value:e,
            touch:true,
            valid: validateor(e,data[id].validation)
        }
        }
        setdata(chg);

    }

    const changebol= (id)=>{
        const chg= {...data,
            [id]:{
                ...data[id],
                value: !data[id].value,
            }
            }
            setdata(chg);

    }

    let formdata=[];
    for(let key in data){
        formdata.push({
            id:key,
            config:data[key]
        })
    }
    console.log(formdata)

    const clickresetfied=(id)=>{
        const chg= {...data,
            [id]:{
                ...data[id],
                value: '',
                touch:true,
                valid:false
            }
            }
            setdata(chg);
    }
    const clickaddfied=(e,id)=>{
       if(!data[id].value.includes(e)){ const chg= {...data,
            [id]:{
                ...data[id],
                value:data[id].value + ' , ' + e,
                touch:true,
                valid:true
            }
            }
            console.log(data[id].value)
            setdata(chg);}
    }
    let inp= formdata.map((mp)=>
    (
        <Inputs eltype={mp.config.eltype} value={mp.config.value} touch={mp.config.touch} 
        valid={mp.config.valid}
        type={mp.config.eltype.type} 
        bol={bol}
        Click={()=>changebol(mp.id)}
        setbol={setbol}
        clickaddfied={(e)=>clickaddfied(e.target.innerHTML,mp.id)}
        clickresetfied={(e)=>clickresetfied(mp.id)}
        change={(e)=>ChangeValueHandller(e.target.value,mp.id)}></Inputs>));
        
    console.log(formdata)

    const submithandller=(e)=>{
        e.preventDefault();
        console.log(data)
        const dataanderrors= autherrorhandling(data,path)
            
        
        if(dataanderrors.er.length === 0 ){
         
         if(path === '#/sineup'){
            onauth(dataanderrors.dtsb,path,settime);
         }else{
             if(path !== '#/addcity' && path!== '#/addarea'&& path !== '#/changepassword'){
            onauth(dataanderrors.dtsb,path);
        }else if(path === '#/changepassword'){
                changmyepassword(dataanderrors.dtsb)
        }else if(path === '#/addcity'){
            const cdt= citydata(data);
            console.log(cdt)
            changefilehandller(cdt,'writecity','')
        }else if(path === '#/addarea'){
            if(location){
            const adt= areadata(data,location);
            changefilehandller(adt,'writearea','')
        }else{
            ShowAlert([],` لطفا لوکیشن را انتخاب کنید `,'fail')
        }
        }
         }
        }else {
            
            ShowAlert(dataanderrors.er,` راوارد نکردید`,'fail')

        }
       

    }

   

    let sineupandlogin;
    if(path === '#/login' || path==='#/forgotpassword'){
        sineupandlogin= <Link to='sineup'><p  className={classes.pra}>ساخت حساب</p></Link>
    }else if(path === '#/sineup' ){
        sineupandlogin= <Link to="login"><p  className={classes.pra}>ورود به حساب</p></Link>
        
    }

    const twiceSendSMSHandller=()=>{
            if(timer === 0 || 1){
            settime(180);
            const phone= localStorage.getItem('phn');
            
            onauth({PhoneNumber: phone}, '#/recivesmscode')
        }
           
    }

    let twicesendsms= path === '#/sendsmscode'?<p style={{cursor:'pointer',color:'blue'}}
     onClick={twiceSendSMSHandller} className={classes.twice}> ارسال دوباره کد</p>:null;

     
    return(
        
        <form  className={classes.form}>
            {props.children}
           {inp}
           {path === '#/login'?<Link to="forgotpassword"><p  className={classes.pra}>پسوورد خود را فراموش کردم؟</p></Link>:null} 
           {twicesendsms}
           {path === '#/sendsmscode'?<Timer timer={timer} deleteexp={deleteexp} expiresCode={expiresCode} settime={settime} ></Timer>:null}
          <button onClick={submithandller} className={classes.button}>ثبت {loading?<span className={classes.spinner}></span>:null}</button>
            {sineupandlogin}
            {localStorage.getItem('phn') ?<Redirect to='/sendsmscode'></Redirect>:null}
        </form>
        
    )
}

export default Form;