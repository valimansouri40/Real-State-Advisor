import React, { useEffect, useState } from "react";

import Select from '../UI/Select/Select';
import { ShowAlert } from "../../store/utility/alert";


const Cooperation=(props)=>{
    const {areaall,cityall, changefilehandller,auth, sendreq}=props;
    
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
          
           changefilehandller(null, 'getallarea',`id=${citid._id}`)
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
                    sendreq(data, auth);
                    
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
           
        <div class="tab-pane fade" id="pills-Fund" role="tabpanel" aria-labelledby="pills-Fund-tab">
        <div class="investment">
            <div class="col-12 d-flex align-items-start-cop">
                
                    <div class="nav-pills3"  >
                        <button class={tb !== 'Buy land'?"nav-link-cop ":"nav-links-active"}
                         onClick={changetb} value='Buy land'>خرید زمین با قابلیت رشد</button>
                        <button class={tb !== 'coopration'?"nav-link-cop ":"nav-links-active"} 
                        onClick={changetb} value='coopration'>مشارکت در ساخت</button>
                    </div>
                
                <div class="col-9 shows">
                    <div class="tab-content" id="v-pills-tabContent2">
                       
                        <div class="tab-pane fade" id="v-pills-mosharekat" role="tabpanel" aria-labelledby="v-pills-mosharekat-tab">
                            <form action="" class="engener-2">
                                <div className='selectbox'>
                              <label className='label'>   شهر</label>
                <select className='select' onChange={(e)=>setareahandller(e.target.value)}  >
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
           <select className='select' disabled={areaall && city !== ''?false:true} 
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
                setvaluehandller={settipichandller}
                array={['نوع ملک','آپارتمان','ویلایی','تجاری','صنعتی','باغ','مزروعی']} >نوع ملک</Select>
                            </form>
                            <form onSubmit={submithandller} class="engener-2">
                                <span>ثبت درخواست  مشارکت در ساخت </span>
                                <div class="foorm">
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
                                    <div class="form-check">
                                        <input   onChange={()=>setland(e=>!e)} type="checkbox"  
                                        id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            من آمادگی سرمایه گذاری در زمین برای مشارکت در ساخت را دارم
                                        </label>
                                    </div></>:null}
                                    <input className="search-ok" type='submit' value='ثبت'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Cooperation;