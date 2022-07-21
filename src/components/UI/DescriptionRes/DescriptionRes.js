import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './DescriptionRes.css';



const DescriptionRes= ()=>{
    
    const [selectDes, setselectDes]= useState();

    const selectDiscriptionHandller =(id)=>{
        

        if(selectDes === id){
            setselectDes()
        }else{
            
            setselectDes(id)
        }
        
    }
   

    return(
        <div className='desres-target'>
            <div className='desres-frame'>
                <div className={`desres-box ${selectDes === 1?'desres-box-active':'desres-box-back'}`} onClick={()=>selectDiscriptionHandller(1)}>
                    <h1 className='desres-h1'>
                         مراحل و مدارک مورد نیاز برای انجام معاملات ملکی
                    </h1>
                    <NavLink className='des-nav' to='/description/one'>
                    <div className='desres-product-box'>
                        <p className='desres-p'>
       اجاره و یا خرید خانه ایده آل، برای هر شخصی مهم است
        اما انجام معاملات مسکن، پیچیدگی‌هایی دارد که ممکن است باعث بروز مشکلاتی شود. 
        برای پیشگیری از این مشکلات، بهتر است قبل از اقدام به خرید یا رهن
        و اجاره ملک، از قوانین و مراحل مربوط به آن آگاه شوید.

                        </p>
                        <div className='desres-box-img'>
                            <img className='desres-img' src={require('../../../assets/description/WhatsApp Image 2022-06-14 at 3.01.31 PM.jpeg')} />
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className={`desres-box ${selectDes === 2?'desres-box-active':'desres-box-back'}`} onClick={()=>selectDiscriptionHandller(2)}>
                    <h1 className='desres-h1'>
                    نکات طلایی در نوشتن آگهی ملک
                    </h1>
                    <NavLink className='des-nav' to='/description/two'>
                    <div className='desres-product-box'>
                        <p className='desres-p'>
                        •	همیشه بهترین فایل خود را آگهی ‌کنید.
                        <br/>
        •	متن را به نحوی بنویسید که رقیبان نتوانند مکان فایل راحدس بزنند.
        <br/>
           
           •	تا حد ممکن از نوشتن کلمات معادل فارسی استفاده کنید.
        
        <br/> •	در آگهی روزنامه کم‌ترین کلمات مفید و ضروری را به 

                        </p>
                        <div className='desres-box-img'>
                            <img className='desres-img' src={require('../../../assets/description/WhatsApp Image 2022-06-14 at 3.01.29 PM.jpeg')} />
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className={`desres-box ${selectDes === 3?'desres-box-active':'desres-box-back'}`} onClick={()=>selectDiscriptionHandller(3,'/description/three')}>
                    <h1 className='desres-h1'>
                    پارامترهای خرید یک ملک مناسب
                    </h1>
                    <NavLink className='des-nav' to='/description/three'>
                   
                    <div className='desres-product-box'>
                        <p className='desres-p'>
                        از مهم‌ترین قواعد خرید خانه هنگام بازدید ساختمان این است که ببینیم منزل مورد نظر اعم از آپارتمان یا خانه ویلایی در چه محله‌ای قرار دارد

                        </p>
                        <div className='desres-box-img'>
                            <img className='desres-img' src={require('../../../assets/description/WhatsApp Image 2022-06-14 at 3.01.30 PM.jpeg')} />
                        </div>

                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default DescriptionRes;


{/* <h1 class="detaile-title">بهترین سایت املاک شمال ایران</h1>
<div class="detaile">
<Link to='/description/one' class="item-detaile">
    
        
        <h2 className="item-detaile-sub">مراحل و مدارک مورد نیاز برای انجام معاملات ملکی</h2>
        <p class="item-detaile-info">
        اجاره و یا خرید خانه ایده آل، برای هر شخصی مهم است
        اما انجام معاملات مسکن، پیچیدگی‌هایی دارد که ممکن است باعث بروز مشکلاتی شود. 
        برای پیشگیری از این مشکلات، بهتر است قبل از اقدام به خرید یا رهن
        و اجاره ملک، از قوانین و مراحل مربوط به آن آگاه شوید.

        </p>
        <div class="member">
            <img src={require('../../assets/description/WhatsApp Image 2022-06-14 at 3.01.31 PM.jpeg')} />
            
        
    </div>
    </Link> */}

//     <Link to='/description/two' class="item-detaile">
                    
//     <h2 className="item-detaile-sub">نکات طلایی در نوشتن آگهی ملک</h2>
//         <p class="item-detaile-info">
//         •	همیشه بهترین فایل خود را آگهی ‌کنید.
//         •	متن را به نحوی بنویسید که رقیبان نتوانند مکان فایل راحدس بزنند.
//         •	تا حد ممکن از نوشتن کلمات معادل فارسی استفاده کنید.
//         •	در آگهی روزنامه کم‌ترین کلمات مفید و ضروری را به 
//         </p>
//         <div class="member">
//         <img src={require('../../assets/description/WhatsApp Image 2022-06-14 at 3.01.29 PM.jpeg')} />

//             {/* <div class="description">
//                 <h4 class="member-name">Saman Ashrafi</h4>
//             </div> */}
//         </div>

// </Link>

{/* <Link to='/description/three' class="item-detaile">
                    
<h2 className="item-detaile-sub">
پارامترهای خرید یک ملک مناسب
</h2>
    <p class="item-detaile-info">
    از مهم‌ترین قواعد خرید خانه هنگام بازدید ساختمان این است که ببینیم منزل مورد نظر اعم از آپارتمان یا خانه ویلایی در چه محله‌ای قرار دارد
    </p>
    <div class="member">
        <img src={require('../../assets/description/WhatsApp Image 2022-06-14 at 3.01.30 PM.jpeg')} />
        
        {/* <div class="description">
            <h4 class="member-name">Saman Ashrafi</h4>
        </div> */}
