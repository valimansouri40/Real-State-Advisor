import React, { useEffect, useState } from "react";
import * as action from '../../store/action/index';
import Select from '../../components/UI/Select/Select';
import { ShowAlert } from "../../store/utility/alert";
import { connect } from "react-redux";
import DescriptionLayoyt from "../../components/DescriptionLayoyt/DescriptionLayoyt";
import './cooperationpage.css'

const CooperationPage=(props)=>{
    const {areaall,cityall, changefilehandller,auth, sendreq,loading}=props;
    
    const [tb, settb]= useState('Buy land');
    const [city, setcity]=useState('');
    const [area, setarea]= useState('');
    const [tipic, settipic]= useState('')
    const [Name, setName]= useState();
    const [PhoneNumber, setPhoneNumber]= useState();
    const [valid, setvalid]=useState(true);
    const [cooperations, setcooper]= useState(false);
    const [land, setland]= useState(false)
  
    const changephonenumber=(e)=>{
        setPhoneNumber(e.target.value);
        const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
        if(pattern.test(e.target.value)){
            setvalid(true)
        }else{
        setvalid(false)}
    }

    const setareahandller=(e)=>{
        
        if(e && e !== 'شهر'){
            const citid= cityall.find(er=>  er.name === e);
            setcity(e)
          
           changefilehandller(null, 'getallarea',`id=${citid.id}`)
   }

    }

    const settipichandller=(e)=>{
        if(e !== 'نوع ملک'){
        settipic(e)}
    }

    const changetb=(e)=>{
        settb(e.target.value)
    }


    const submithandller=(e)=>{
        e.preventDefault()
        let data;

        if(tb === 'Buy land'){
            data={
                FristName:Name,
                PhoneNumber: PhoneNumber,
                City: city ,
                Area: area,
                Type: 'Buy land',
                TypeState: tipic
            }
         
            const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
            if(pattern.test(data.PhoneNumber)){
            if(data.FristName !== '' && data.City !=='' && data.Area !==''){
                    sendreq(data, auth?._id);
                    
            }else{

             ShowAlert([], 'اطلاعات وارد شده ناقص است', 'fail')
            }}else{
           ShowAlert([], 'لطفا شماره تلفن همراه خود را وارد کنید', 'fail')

        }
        }else if(tb === 'coopration'){
            data={
                FristName:Name,
                PhoneNumber: PhoneNumber,
                City: city ,
                Area: area,
                Type: 'cooperation',
                TypeState: tipic,
                Cooperation: cooperations,
                Land: land
            }
        

            const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
            if(pattern.test(data.PhoneNumber)){
            if(data.FristName !== '' && data.City !=='' && data.area !=='' ){
                sendreq(data, auth?._id);
            }else{
                ShowAlert([], 'اطلاعات وارد شده ناقص است', 'fail')
            }
        }else{
            ShowAlert([], 'لطفا شماره تلفن همراه خود را وارد کنید', 'fail')
}
        
        }
    }

    return(
          <DescriptionLayoyt>
        <div class="target-cop" >
        
            <div class="box-cop">
                
                    <div class="nav-pills3"  >
                        <button class={tb !== 'Buy land'?"nav-link-cop ":"nav-links-active"}
                         onClick={changetb} value='Buy land'>خرید زمین با قابلیت رشد</button>
                        <button class={tb !== 'coopration'?"nav-link-cop ":"nav-links-active"} 
                        onClick={changetb} value='coopration'>مشارکت در ساخت</button>
                    </div>
                
               
                    <div class="tab-content-cop" id="v-pills-tabContent2">
                       
                        <div class="tab-pane fade" id="v-pills-mosharekat" role="tabpanel" aria-labelledby="v-pills-mosharekat-tab">
                            <form  class="engener-cop">
                                <div className='selectbox'>
                              <label className='label'>   شهر</label>
                <select className='select responesive-select' onChange={(e)=>setareahandller(e.target.value)}  >
                <option className='option'  >
                        شهر
                    </option>
            {cityall?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):null}
        </select>
        </div>
        
       <div className='selectbox'>
                <label className='label'> منطقه</label>
           <select className='select responesive-select' disabled={areaall && city !== ''?false:true} 
           onChange={(e)=>setarea(e.target.value)} >
                    <option className='option'  >
                        منطقه
                    </option>
            {areaall?areaall.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            )):null}
            
</select></div>

                <Select val={tipic}
                selectRes={true} setvaluehandller={settipichandller}
                array={['نوع ملک','آپارتمان','ویلایی','تجاری','صنعتی','باغ','مزروعی']} >نوع ملک</Select>
                            </form>
                            <form onSubmit={submithandller} class="engener-cop submit-form">
                                <span>ثبت درخواست  مشارکت در ساخت </span>
                                
                                    <div className="foorm-div">
                                        <input onChange={(e)=>setName(e.target.value)} 
                                        type="text" id='namee'  placeholder="نام و نام خانوادگی"/>
                                        <input 
                                        onChange={(e)=>changephonenumber(e)} id="teel" type="text" 
                                        placeholder="شماره تماس"/>
                                    </div>
                                  {tb === 'coopration'? <> <div className="foorm-div" class="form-check">
                                        <input onChange={()=>setcooper(e=>!e)} type="checkbox"  id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            من آمادگی مشارکت در ساخت را دارم
                                        </label>
                                    </div>
                                    <div class="form-check-cop">
                                        <input   onChange={()=>setland(e=>!e)} type="checkbox"  
                                        id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            من آمادگی سرمایه گذاری در زمین برای مشارکت در ساخت را دارم
                                        </label>
                                    </div></>:null}
                                    <input disabled={loading} className="search-ok" type='submit' value='ثبت'/>
                                
                            </form>
                        </div>
                  
                </div>
            </div>
        </div>
    
    </DescriptionLayoyt>
    )
}

const MapStateToProps=state=>{

    return{
        areaall: state.realstate.areaall,
        cityall: state.realstate.cityall,
        auth: state.auth.data,
        loading: state.auth.loading
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        
        changefilehandller:(dt, path, id)=>dispatch(action.changefilehandller(dt, path, id)),
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
       
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(CooperationPage);