
import React, { useState } from 'react';
import CheckBox from '../UI/CheckBox/CheckBox';
import InputField from '../UI/InputField/InputField';
import Select from '../UI/Select/Select';
import  './RealStateFields.css'
import imgicon from '../../assets/icons/icons8-picture-64.png';
import { ShowAlert } from '../../store/utility/alert';

const RealStateFieldupdate2= (props)=>{
    const {setDataPosttwo,numpage,loading, setnumpage,role, SubmitDataHandller,OneData}=props;
    const mpimg= OneData.Image.map(m=>{ return 'data:image/jpeg;base64,' + m})
    
    const [sub, setsub]=useState(OneData.Subject)
    const [explain, setexplain]=useState(OneData.Explain)
    const [masahat, setmasahat]=useState(OneData.Masahat)
    const [floors , setfloors ]=useState(OneData.Floors)
    const [image, setimage]=useState(mpimg)
    const [someroom, setsomerom]=useState(OneData.SomeRoom)
    const [propertyDirection, setpropertyDirection]=useState(OneData.PropertyDirection)
    const [balcony, setbalcony]=useState(OneData.Balcony)
    const [flooring, setflooring]=useState(OneData.Flooring)
    const [kitchen, setkitchen]=useState(OneData.Kitchen)
    const [service, setservice]=useState(OneData.Service)
    const [parking, setparking]=useState(OneData.Parking)
    const [ofstorage, setofstorage]=useState(OneData.OfStorage)
    const [sona, setsona]=useState(OneData.Sona)
    const [tras, settras]=useState(OneData.Tras)
    const [security, setsecurity]=useState(OneData.Security)
    const [assansor, setassansor]=useState(OneData.Assansor)
    const [coolerSystem, setcoolerSystem]=useState(OneData.CoolerSystem)
    const [heaterSystem, setheaterSystem]=useState(OneData.HeaterSystem)
    const [propertySituation, setpropertySituation]=useState(OneData.PropertySituation)
    const [documentSituation, setdocumentSituation]=useState(OneData.DocumentSituation)
    const [documentOnership, setdocumentOnership]=useState(OneData.DocumentOnership)
    const [entry, setentry]=useState(OneData.Entry)
    const [pasio, setpasio]=useState(OneData.Pasio)
    const [pool, setpool]=useState(OneData.Pool)
    const [Jacuzzi, setJacuzzi]=useState(OneData.Jacuzzi)
    const [labi, setlabi]=useState(OneData.Labi)
    const [conferencehall, setconferencehall]=useState(OneData.ConferaenceHall)
    const limitrole= ['employee', 'admin'];
    
    const [numimg, setnumimg]=useState(0);

    const getBase64 = (file) => new Promise(function (resolve, reject) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject('Error: ', error);
    })

  
    const submitHandller= ()=>{

            const datatwo={
                Subject:sub,
                Explain:explain,
                Masahat:masahat,
                Floors:floors,
                Image: image,
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
            let encods=[];

            if(e){
                const entires= Object.entries(e);
                 entires.map(file=>getBase64(file[1]).then(result=>encods.push(result)))
            }        
            setimage(encods);
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
    
    return(
        <div className={numpage === 2?'fields':'hidden'} >
            <div className='field'>
            <InputField val={sub} setval={setsub} >عنوان</InputField>
            <div className='selectbox'>
                    <label className='label'>   توضیحات</label>
                    <textarea value={explain} className='inputfield-textarea' 
                    onChange={e=>setexplain(e.target.value)}></textarea>
                    </div>
            <InputField val={masahat} setval={setmasahat} >مساحت (متر مبع)</InputField>
            <InputField val={floors} setval={setfloors} >تعداد طبقات</InputField>
            <div className='setimgbox'>
                    <label className='label' for='img'>  <span className='labeltxt'> افزودن تصویر</span>
                    <img src={imgicon} className='iconimg' />
                     </label>
                   
                    <input type='file'accept="image/png, image/jpeg" multiple={true}
                     style={{display:'none'}} id='img' name='img'
                     onChange={(e)=>sendimage(e.target.files)} />
                     {image.length > 0?<div  className='imgtarget'>
                         <img src={image[numimg]} width='100%' height='100%'  className='inputimg'/>
                         {image.length > 1?<><span className='changenum2' onClick={lastMyImage}></span>
                        <span className='changenum1' onClick={nextMyImage}></span></>:null}
                     </div>:null}
                    </div>
            </div>
            
            <div className='field'>
            <Select val={someroom} array={['','یک خواب','دو خواب','سه خواب','چهار خواب']} setvaluehandller={setsomerom}>تعداد اتاق خواب</Select>
            <Select val={propertyDirection} array={['','شرقی','غربی','جنوبی','شمالی']} setvaluehandller={setpropertyDirection}>جهت نما</Select>
            <Select val={balcony} array={['',"آجر","سنگ","سایر"]} setvaluehandller={setbalcony}>نوع نما</Select>
            <Select val={flooring} array={['','پارکت','سرامیک','موزاییک']} setvaluehandller={setflooring}>کفپوش</Select>
            <Select val={kitchen} array={['',"چوبی","ممبران","ام دی اف","بدون کابینت","سایر"]} setvaluehandller={setkitchen}>آشپز خانه</Select>
            <Select val={service} array={['',"ایرانی","فرنگی","ایرانی و فرنگی"]} setvaluehandller={setservice}>سرویس</Select>
            <CheckBox val={parking} changeval={setparking} >پارکینگ</CheckBox>
            <CheckBox val={ofstorage} changeval={setofstorage} >انباری</CheckBox>
            <CheckBox val={sona} changeval={setsona} >سونا</CheckBox>
            <CheckBox val={tras} changeval={settras} >بالکن</CheckBox>
            <CheckBox val={security} changeval={setsecurity} >نگهبان</CheckBox>
            <CheckBox val={assansor} changeval={setassansor} >آسانسور</CheckBox>
            </div>
            
            <div className='field'>
            <Select val={coolerSystem} array={["","کولر","هواساز","فاقد"]} setvaluehandller={setcoolerSystem}> سیستم سرمایشی </Select>
            <Select val={heaterSystem} array={["","شوفاژ","هواساز","پکیج","بخاری"]} setvaluehandller={setheaterSystem}> سیستم گرمایشی </Select>
            <Select val={propertySituation} array={["","تخلیه","در دست مالک","در دست مستاجر"]} setvaluehandller={setpropertySituation}> وضعیت اسکان ملک </Select>
            <Select val={documentSituation} array={["","شخصی","تعاونی","اوقافی","زمین شهری","قولنامه ای"]} setvaluehandller={setdocumentSituation}> وضعیت سند </Select>
            <Select val={documentOnership} array={["","شش دانگ","مشاعی"]} setvaluehandller={setdocumentOnership}> مالکیت سند </Select>
            <Select val={entry} array={["","از حیاط","از خیابان","از محوطه"]} setvaluehandller={setentry}> ورودی ملک </Select>
            
            <CheckBox val={pasio} changeval={setpasio} >پاسیو</CheckBox>
            <CheckBox val={pool} changeval={setpool} >استخر</CheckBox>
            <CheckBox val={Jacuzzi} changeval={setJacuzzi} >جکوزی</CheckBox>
            <CheckBox val={labi} changeval={setlabi} >لابی</CheckBox>
            <CheckBox val={conferencehall} changeval={setconferencehall} >سالن اجتماعات</CheckBox>
            <div className='btn-2-box'>
            <button className='send' onClick={()=>setnumpage(1)}>بازگشت</button>
            {role?limitrole.includes(role.role)?<button className='send' 
            onClick={submitHandller}>صفحه بعد</button>:null:null}
            {role?!limitrole.includes(role.role)?<button className='send2' onClick={SubmitDataHandller}>
                {!loading?"ارسال":<>درحال ارسال<span className="spin">
            </span></>}</button>:null:null}
            </div>
            </div>

        </div>
    )
}

export default RealStateFieldupdate2;


 