import React, { useState } from 'react';
import CheckBox from '../UI/CheckBox/CheckBox';
import InputField from '../UI/InputField/InputField';
import Select from '../UI/Select/Select';
import  './RealStateFields.css'
import imgicon from '../../assets/icons/icons8-picture-64.png';
import { ShowAlert } from '../../store/utility/alert';

const Fields2= (props)=>{
    const {setDataPosttwo,numpage,loading,
         setnumpage,role, SubmitDataHandller}=props;

    const [sub, setsub]=useState('')
    const [explain, setexplain]=useState('')
    const [masahat, setmasahat]=useState('')
    const [floors , setfloors ]=useState('')
    const [image, setimage]=useState()
    const [someroom, setsomerom]=useState('')
    const [propertyDirection, setpropertyDirection]=useState('')
    const [balcony, setbalcony]=useState('')
    const [flooring, setflooring]=useState('')
    const [kitchen, setkitchen]=useState('')
    const [service, setservice]=useState('')
    const [parking, setparking]=useState(false)
    const [ofstorage, setofstorage]=useState(false)
    const [sona, setsona]=useState(false)
    const [tras, settras]=useState(false)
    const [security, setsecurity]=useState(false)
    const [assansor, setassansor]=useState(false)
    const [coolerSystem, setcoolerSystem]=useState('')
    const [heaterSystem, setheaterSystem]=useState('')
    const [propertySituation, setpropertySituation]=useState('')
    const [documentSituation, setdocumentSituation]=useState('')
    const [documentOnership, setdocumentOnership]=useState('')
    const [entry, setentry]=useState('')
    const [pasio, setpasio]=useState(false)
    const [pool, setpool]=useState(false)
    const [Jacuzzi, setJacuzzi]=useState(false)
    const [labi, setlabi]=useState(false)
    const [conferencehall, setconferencehall]=useState(false)
    const limitrole= ['employee', 'admin'];
    
    const [numimg, setnumimg]=useState(0);

    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })

    
    const submitHandller= ()=>{

        let encods=[];

        if(image){
            const entires= Object.entries(image);
             entires.map(file=>getBase64(file[1]).then(result=>encods.push(result)))
                // for(let i= 0 ;  i > image.length ; i++){
                //     encods.append('Image', image[i])
                // }
        }
       
            const datatwo={
                Subject:sub,
                Explain:explain,
                Masahat:masahat,
                Floors:floors,
                Image: encods,
                SomeRoom:someroom,
                PropertyDirection:propertyDirection,
                Balcony: balcony,
                Flooring:flooring, 
                Kitchen:kitchen,
                Service:service,
                Parking:parking,
                OfStorage:ofstorage,
                Sona:sona,
                Tras:tras,
                Security:security,
                Assansor:assansor,
                CoolerSystem:coolerSystem,
                HeaterSystem:heaterSystem,
                PropertySituation:propertySituation,
                DocumentSituation:documentSituation,
                DocumentOnership: documentOnership,
                Entry:entry,
                Pasio:pasio,
                Pool:pool,
                Jacuzzi:Jacuzzi,
                Labi:labi,
                ConferaenceHall:conferencehall
            }
        setDataPosttwo(datatwo);

        if(!limitrole.includes(role.role)){
           
        SubmitDataHandller()
    }else{
        setnumpage(3);
    }
    }

    const sendimage=(e)=>{
        let sizeimg = 0;
        for(let i = 0; i < e.length ; i++){
                sizeimg = e[i].size + sizeimg;
               
        }
      
        if(sizeimg < 50000000){

            setimage(e);
        
        setnumimg(0)
        }else{
            ShowAlert([],'حجم عکس بیشتر از 50 مگابایت است','fail')
        }
        
    }
    const nextMyImage=()=>{

        if( numimg < image.length - 1 ){
                setnumimg(num=> num + 1)
        }else{
            setnumimg(0)
        }
        
    }
    
    const lastMyImage=()=>{

        if( 0 < numimg ){
                setnumimg(num=> num - 1)
        }else{
            setnumimg(image.length - 1)
        }
        
    }
    let innerWidth = window.innerWidth;
    document.addEventListener('resize',()=>{
        innerWidth = window.innerWidth;
    })
    
    return(
        <div className={numpage === 2?'fields':'hidden'} >
            <div className='rstb-field'>
            <InputField  val={sub} setval={setsub} >عنوان</InputField>
            <div className='selectbox'>
                    <label className='label'>   توضیحات</label>
                    <textarea value={explain} className='inputfield-textarea' 
                    onChange={e=>setexplain(e.target.value)}></textarea>
                    </div>
            <InputField  val={masahat} setval={setmasahat} >مساحت (متر مبع)</InputField>
            <InputField  val={floors} setval={setfloors} >تعداد طبقات</InputField>
            <div className='setimgbox'>
                    <label className='uploadimage-label' for='img'>  <span className='labeltxt'> افزودن تصویر</span>
                    <img src={imgicon} className='iconimg' />
                     </label>
                   
                    <input type='file' accept="image/png, image/jpeg" 
                    multiple={true} style={{display:'none'}} id='img' name='img'
                     onChange={(e)=>sendimage(e.target.files)} />
                     {image?<div 
                     className='imgtarget'>
                         <img src={URL.createObjectURL(image[numimg])}  width='100%' height='100%'
                           className='inputimg'/>
                         {image.length > 1?<><span className='changenum-2' onClick={lastMyImage}></span>
                        <span className='changenum-1' onClick={nextMyImage}></span></>:null}
                     </div>:
                     <img src={imgicon}  width='100%' height='100%'
                     className='inputimg'/>
                     }
                    </div>
            </div>
            
            <div className='rstb-field'>
            <Select selectRes={innerWidth < 1250?true:false} val={someroom} array={['','یک خواب','دو خواب','سه خواب','چهار خواب']} setvaluehandller={setsomerom}>تعداد اتاق خواب</Select>
            <Select selectRes={innerWidth < 1250?true:false} val={propertyDirection} array={['','شرقی','غربی','جنوبی','شمالی']} setvaluehandller={setpropertyDirection}>جهت نما</Select>
            <Select selectRes={innerWidth < 1250?true:false} val={balcony} array={['',"آجر","سنگ","سایر"]} setvaluehandller={setbalcony}>نوع نما</Select>
            <Select selectRes={innerWidth < 1250?true:false} val={flooring} array={['','پارکت','سرامیک','موزاییک']} setvaluehandller={setflooring}>کفپوش</Select>
            <Select selectRes={innerWidth < 1250?true:false} val={kitchen} array={['',"چوبی","ممبران","ام دی اف","بدون کابینت","سایر"]} setvaluehandller={setkitchen}>آشپز خانه</Select>
            <Select selectRes={innerWidth < 1250?true:false} val={service} array={['',"ایرانی","فرنگی","ایرانی و فرنگی"]} setvaluehandller={setservice}>سرویس</Select>
            <CheckBox val={parking} changeval={setparking} >پارکینگ</CheckBox>
            <CheckBox val={ofstorage} changeval={setofstorage} >انباری</CheckBox>
            <CheckBox val={sona} changeval={setsona} >سونا</CheckBox>
            <CheckBox val={tras} changeval={settras} >بالکن</CheckBox>
            <CheckBox val={security} changeval={setsecurity} >نگهبان</CheckBox>
            <CheckBox val={assansor} changeval={setassansor} >آسانسور</CheckBox>
            </div>
            
            <div className='rstb-field'>
            <Select selectRes={innerWidth < 1250?true:false} val={coolerSystem} array={["","کولر","هواساز","فاقد"]} setvaluehandller={setcoolerSystem}> سیستم سرمایشی </Select>
            <Select selectRes={innerWidth < 1250?true:false} val={heaterSystem} array={["","شوفاژ","هواساز","پکیج","بخاری"]} setvaluehandller={setheaterSystem}> سیستم گرمایشی </Select>
            <Select selectRes={innerWidth < 1250?true:false} val={propertySituation} array={["","تخلیه","در دست مالک","در دست مستاجر"]} setvaluehandller={setpropertySituation}> وضعیت اسکان ملک </Select>
            <Select selectRes={innerWidth < 1250?true:false} val={documentSituation} array={["","شخصی","تعاونی","اوقافی","زمین شهری","قولنامه ای"]} setvaluehandller={setdocumentSituation}> وضعیت سند </Select>
            <Select selectRes={innerWidth < 1250?true:false} val={documentOnership} array={["","شش دانگ","مشاعی"]} setvaluehandller={setdocumentOnership}> مالکیت سند </Select>
            <Select selectRes={innerWidth < 1250?true:false} val={entry} array={["","از حیاط","از خیابان","از محوطه"]} setvaluehandller={setentry}> ورودی ملک </Select>
            
            <CheckBox val={pasio} changeval={setpasio} >پاسیو</CheckBox>
            <CheckBox val={pool} changeval={setpool} >استخر</CheckBox>
            <CheckBox val={Jacuzzi} changeval={setJacuzzi} >جکوزی</CheckBox>
            <CheckBox val={labi} changeval={setlabi} >لابی</CheckBox>
            <CheckBox val={conferencehall} changeval={setconferencehall} >سالن اجتماعات</CheckBox>
           
           <div className='btn-2-box'>
            <button className='send' onClick={()=>setnumpage(1)}>بازگشت</button>
            {role?limitrole.includes(role.role)?<button className='send' 
            onClick={submitHandller}>صفحه بعد</button>:null:null}
            {role?!limitrole.includes(role.role)? <button className='send2' 
            onClick={submitHandller}>{!loading?"ارسال":<>درحال ارسال<span className="spin">
            </span></>}</button>:null:null}
                </div>
            </div>

        </div>
    )
}


export default Fields2;


 