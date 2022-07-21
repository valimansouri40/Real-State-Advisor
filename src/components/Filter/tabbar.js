import React, { useEffect, useState } from 'react';
import { ShowAlert } from '../../store/utility/alert';




const Tabbar= (props)=>{
    const {worksampel,loading ,sendreq, auth , tab,getallwsinit}=props;
    const [numpgws, setnumpgws]=useState();
    const [tabs, settabs]=useState('mapdesign')
    const switcharr= ['Registrationwork','Advocacy', 'ExpertofJustice', 'endofwork', 'lisense']
    const changeTabs=(e)=>{
        settabs(e.target.value)
        
    }
    useEffect(()=>{
        getallwsinit(1, 5, `Tab=${tabs}`);
    },[ tabs])
        
    const setheihthandller =(i)=>{
        if(i !== numpgws){
        setnumpgws(i)
    }else{
        setnumpgws();
    }
    }

    const submithandller=(e)=>{
            e.preventDefault()
        const data={
            FristName: e.target[0].value,
            PhoneNumber: e.target[1].value,
            Type: tab,
            TypeWork:tabs
        }

        
        const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
            if(pattern.test(data.PhoneNumber)){
            if(data.FristName !== '' ){
                
                sendreq(data, auth?._id);
            }else{
                ShowAlert([], 'اطلاعات وارد شده ناقص است', 'fail')
            }
        }else{
            ShowAlert([], 'لطفا شماره تلفن همراه خود را وارد کنید', 'fail')
}

    }
    
    return(
        
        <div class="engineering" >
            <div
            class="align-items-start">
                <div  class="col-3 buttons">
                    <div style={{display:'flex', alignItems:'center',justifyContent:'center'
                    ,flexDirection:'column',width:"100%"}} class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <button class={tabs !== 'mapdesign'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='mapdesign' >طراحی نقشه</button>
                        <button class={tabs !== 'Mapping'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='Mapping' >نقشه برداری</button>
                        <button class={tabs !== 'Registrationwork'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='Registrationwork' >کار های ثبتی</button>
                        <button class={tabs !== 'Advocacy'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='Advocacy' >وکالت دادگاهی</button>
                        <button class={tabs !== 'Executionandconstruction'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='Executionandconstruction' >اجرا و ساخت</button>
                        <button class={tabs !== 'ExpertofJustice'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='ExpertofJustice' >کارشناس دادگستری</button>
                        <button class={tabs !== 'endofwork'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='endofwork' >پایان کار</button>
                        <button class={tabs !== 'lisense'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='lisense' >جواز</button>
                        <button class={tabs !== 'contracting'?"nav-link ":"nav-links-active"} onClick={changeTabs} value='contracting' >پیمان کاری</button>
                    </div>
                </div>
                <div className='buttons-responsive'>
                    <select onChange={changeTabs} className="select-responsive" >
                    <option class="nav-link3" onClick={changeTabs} value='mapdesign' >
                        طراحی نقشه</option>
                        <option class="nav-link3" onClick={changeTabs} value='Mapping' >نقشه برداری</option>
                        <option class="nav-link3" onClick={changeTabs} value='Registrationwork' >کار های ثبتی</option>
                        <option class="nav-link3" onClick={changeTabs} value='Advocacy' >وکالت دادگاهی</option>
                        <option class="nav-link3" onClick={changeTabs} value='Executionandconstruction' >اجرا و ساخت</option>
                        <option class="nav-link3" onClick={changeTabs} value='ExpertofJustice' >کارشناس دادگستری</option>
                        <option class="nav-link3" onClick={changeTabs} value='endofwork' >پایان کار</option>
                        <option class="nav-link3" onClick={changeTabs} value='lisense' >جواز</option>
                    </select>
                </div>
                <div class="col-9 shows">
                <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-tarrahi">
                        <form onSubmit={submithandller} class="engener">
                                <span>ثبت درخواست گرفتن طراحی نقشه</span>
                                <div class="foormm">

                                        <input id="namee" type="text" placeholder="نام و نام خانوادگی"/>
                                        <input id="teel" type="text" placeholder="شماره تماس"/>


                                    <input disabled={loading} style={{marginBottom: '1rem'}} type='submit' className='search-ok' value='ثبت' />
                                </div>
                            </form>
                            <div class="slider-box ">
                                <div class="header">
                                    <span className='header-tab-spn'>نمونه کارها</span>
                                    {worksampel?.length === 0?<p className='header-tab-p'>در مورد نقشه کشی از این تجهیزات استفاده میکنیم طی 1 هفته کار تحویل داده میشه و.....</p>
                                :null}
                                </div>
                                <div class="col-12 row">
                                    {worksampel?worksampel.slice(0,3).map((mp,i)=><div class={`nemone-box 
//     ${i === numpgws?'more-text':'small-text'}`}

onClick={()=>setheihthandller(i)}>
                                        
                                           {!switcharr.includes(tabs)?<div  className='sampels'>
                                                <img className='sampels-img' src={`data:image/jpeg;base64,${mp.Image}`} alt=""/>
                                            {/* <h3 className='sampels-h3'>{mp.Text}</h3> */}
                                            <p className='paragraph'>
                                            {i === numpgws ? mp.Text :mp.Text.length > 30?mp.Text.slice(0,30)+  "...":mp.Text  }
                                                </p>
                                            </div>:
                                            <p className='paragraph'>{mp.Passage}</p>}
                                        
                                    </div>):null}
                                    {/* <div class="col-4 nemone-box">
                                        <a href="">
                                            <img src="https://exploreit.ir/wp-content/uploads/2022/03/sitemap-error-300x149.jpg" alt=""/>
                                            <h3>عنوان نمونه کار</h3>
                                        </a>
                                    </div>
                                    <div class="col-4 nemone-box">
                                        <a href="">
                                            <img src="https://exploreit.ir/wp-content/uploads/2022/03/sitemap-error-300x149.jpg" alt=""/>
                                            <h3>عنوان نمونه کار</h3>
                                        </a>
                                    </div> */}
                                </div>


                            </div>
                            
                        </div>
                    </div>
               </div>         
        </div>
    </div>
    
    )
}


export default Tabbar;

// {worksampel?worksampel.slice(0,3).map((mp,i)=>(
//     <div class={`col-4 nemone-box 
//     ${i === numpgws?'more-text':'small-text'}`}>
        
//            {!switcharr.includes(tabs)?<div className='sampels'>
//                 <img className='sampels-img' src={`data:image/jpeg;base64,${mp.Image}`} alt=""/>
//             {/* <h3 className='sampels-h3'>{mp.Text}</h3> */}
//             <p className='paragraph'onClick={()=>setnumpgws(1)}>
//                 {/* {i === numpgws ? mp.Text :mp.Text.length > 30?mp.Text.slice(0,30)+  "...":mp.Text  } */}
//                 </p>
//             </div>:
//             <p className='paragraph'>{mp.Passage}</p>}
        
//     </div>
//     )):null}