import React, { useEffect, useState } from 'react';
import { ShowAlert } from '../../store/utility/alert';




const Tabbar= (props)=>{
    const {worksampel,sendreq , tab,getallwsinit}=props;
    const [numpgws, setnumpgws]=useState(1);
    const [tabs, settabs]=useState('mapdesign')
    const switcharr= ['Registrationwork','Advocacy', 'ExpertofJustice', 'endofwork', 'lisense']
    const changeTabs=(e)=>{
        settabs(e.target.value)
        
    }
    useEffect(()=>{
        getallwsinit(numpgws, 5, `Tab=${tabs}`);
    },[getallwsinit, tabs])
        console.log(tabs)
    

    const submithandller=(e)=>{
            console.log(tabs)
        const data={
            FristName: e.target[0].value,
            PhoneNumber: e.target[1].value,
            Type: tab,
            TypeWork:tabs
        }

        console.log(data)
        const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
            if(pattern.test(data.PhoneNumber)){
            if(data.FristName !== '' ){
                sendreq(data);
            }else{
                ShowAlert([], 'اطلاعات وارد شده ناقص است', 'fail')
            }
        }else{
            ShowAlert([], 'لطفا شماره تلفن همراه خود را وارد کنید', 'fail')
}

    }
    
    return(
        <div class="tab-pane fade" id="pills-Engineering" role="tabpanel" aria-labelledby="pills-Engineering-tab">
        <div class="engineering">
            <div style={{display:'flex', alignItems:'flex-start',justifyContent:'center'}} class="col-12 d-flex align-items-start">
                <div  class="col-3 buttons">
                    <div style={{display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column'}} class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    
                    <button class={tabs !== 'mapdesign'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='mapdesign' >طراحی نقشه</button>
                        <button class={tabs !== 'Mapping'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Mapping' >نقشه برداری</button>
                        <button class={tabs !== 'Registrationwork'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Registrationwork' >کار های ثبتی</button>
                        <button class={tabs !== 'Advocacy'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Advocacy' >وکالت دادگاهی</button>
                        <button class={tabs !== 'Executionandconstruction'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Executionandconstruction' >اجرا و ساخت</button>
                        <button class={tabs !== 'ExpertofJustice'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='ExpertofJustice' >کارشناس دادگستری</button>
                        <button class={tabs !== 'endofwork'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='endofwork' >پایان کار</button>
                        <button class={tabs !== 'lisense'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='lisense' >جواز</button>
                    </div>
                </div>
                <div class="col-9 shows">
                <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-tarrahi">
                            <div class="slider-box ">
                                <div class="header">
                                    <span>نمونه کارها</span>
                                    <p>در مورد نقشه کشی از این تجهیزات استفاده میکنیم طی 1 هفته کار تحویل داده میشه و.....</p>
                                </div>
                                <div class="col-12 row">
                                    {worksampel?worksampel.map(mp=><div class="col-4 nemone-box">
                                        <a href="">
                                           {!switcharr.includes(tabs)?<React.Fragment>
                                                <img src={`data:image/jpeg;base64,${mp.Image}`} alt=""/>
                                            <h3>{mp.Text}</h3></React.Fragment>:
                                            <p className='paragraph'>{mp.Passage}</p>}
                                        </a>
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
                            <form onSubmit={submithandller} class="engener">
                                <span>ثبت درخواست گرفتن طراحی نقشه</span>
                                <div class="foorm">

                                        <input id="namee" type="text" placeholder="نام و نام خانوادگی"/>
                                        <input id="teel" type="text" placeholder="شماره تماس"/>


                                    <input type='submit' className='submit' />
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


export default Tabbar;