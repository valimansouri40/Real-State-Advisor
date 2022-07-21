import React, {  useState } from "react";
import { Link ,Redirect} from "react-router-dom";
import Inputs from "../UI/inputs/inputs";
import classes from './Form.css';
import { ShowAlert } from "../../store/utility/alert";
import { autherrorhandling, validateor ,areadata, citydata} from "./autherrorhandling";
import Timer from "../UI/Timer/Timer";


const Form =(props)=>{
    const {data, setdata, onauth, loading ,location,changmyepassword
         ,expiresCode,changefilehandller, deleteexp}=props;
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
    const clickaddfied=(e,id, mp)=>{
            
       if(!data[id].value.includes(mp)){ const chg= {...data,
            [id]:{
                ...data[id],
                value:data[id].value + ' , ' + mp,
                touch:true,
                valid:true
            }
            }
            
            setdata(chg);}else{
                const chg2= {...data,
                    [id]:{
                        ...data[id],
                        value:data[id].value.replace(' , ' + mp, ''),
                        touch:true,
                        valid:true
                    }
                    }
                   
                    setdata(chg2);
            }
    }
    let inp= formdata.map((mp)=>
    (
        <Inputs eltype={mp.config.eltype} value={mp.config.value} touch={mp.config.touch} 
        valid={mp.config.valid}
        type={mp.config.eltype.type} 
        bol={bol}
        img={mp.config.img}
        Click={()=>changebol(mp.id)}
        setbol={setbol}
        id={mp.id}
        clickaddfied={clickaddfied}
        clickresetfied={(e)=>clickresetfied(mp.id)}
        change={(e)=>ChangeValueHandller(e.target.value,mp.id)}></Inputs>));
        
    

    const submithandller=(e)=>{
        e.preventDefault();
        const dataanderrors= autherrorhandling(data,path)
        
        if(dataanderrors.er.length === 0 ){
         
         if(path === '#/sineup' ){
            onauth(dataanderrors.dtsb,path,settime);
         }else{
             if(path !== '#/addcity' && path!== '#/addarea'&& path !== '#/changepassword'){
            onauth(dataanderrors.dtsb,path);
        }else if(path === '#/changepassword'){
                changmyepassword(dataanderrors.dtsb, '/changepassword')
        }else if(path === '#/addcity'){
            const cdt= citydata(data);
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
        sineupandlogin= <Link className="form-navlink" to='sineup'><p  className={"pra"}>ساخت حساب</p></Link>
    }else if(path === '#/sineup' ){
        sineupandlogin= <Link className="form-navlink" to="login"><p  className={"pra"}>ورود به حساب</p></Link>
        
    }

    const twiceSendSMSHandller=()=>{
       
            if(timer < 2 ){
                
            settime(180);
            const phone= localStorage.getItem('phn');
            
            onauth({PhoneNumber: phone}, '#/recivesmscode')
        }
           
    }

    let twicesendsms= path === '#/sendsmscode'?<p style={{margin:"1rem 0",cursor:'pointer',color:'#fff',}}
     onClick={twiceSendSMSHandller} className={"twice"}> ارسال دوباره کد</p>:null;

     
    return(
        
        <form  className={"form"} autoComplete='on'>
            {props.children}
           {inp}
           {path === '#/login'?<Link className="form-navlink" to="/forgotpassword"><p  className={"pra"}>پسوورد خود را فراموش کردم؟</p></Link>:null} 
           {twicesendsms}
           {path === '#/sendsmscode'?<Timer timer={timer} deleteexp={deleteexp} expiresCode={expiresCode} settime={settime} ></Timer>:null}
          <button onClick={submithandller} className={"form-button"}>ثبت {loading?<span className={"spinner"}></span>:null}</button>
            {sineupandlogin}
            {/* {localStorage.getItem('phn') ?<Redirect to='/sendsmscode'></Redirect>:null} */}
        </form>
        
    )
}

export default Form;