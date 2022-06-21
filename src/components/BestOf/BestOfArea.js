import React from "react";
import Spinner from "../UI/spinner/Spinner";
import "./BestOf.css"
import StaticRange from 'react-star-ratings'
import { Link } from "react-router-dom";

const BestOfArea = (props)=>{
                const {bestOf}= props;
              
    return(
        <section class="bestPlace">
        <h1 class="best-place-title">بهترین مناطق</h1>
        <main>
            <div class="row-pic">
                <div class="left-baner-pic">
                <img width="100%" height="100%"  src={require('../../assets/1.jpg')}/>
                    <p class="pic-title">دماوند</p>
                </div>
                <div class="right-baner-pic">
                    <div class="right-baner-pic-up">
                        <p class="pic-title">دماوند</p>
                        <img width="100%" height="100%"  src={require('../../assets/2.jpg')}/>
                    </div>
                    <div class="right-baner-pic-down">
                        <p class="pic-title">دماوند</p>
                        <img width="100%" height="100%"  src={require('../../assets/3.jpg')}/>
                    </div>
                </div>
            </div>
            <h1 class="profile-title">همکاران</h1>
            <div class="profiless">
                {bestOf?bestOf.map(mp=><div class="user">
                    <h3 class="user-name">{mp.FristName + " " + `${mp.LastName?mp.LastName:''}`}</h3>
                  {mp.Image? <img class="user-photo" src={`data:image/jpeg;base64${mp.Image}`} alt="" />:
                    <img className='user-photo' src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                    <h4 class="user-city">{`${mp.AdvisorAddress?mp.AdvisorAddress:''}`}</h4>
                   <div className="star-box">
                   <StaticRange
                                rating={mp.RateAdvisor}
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                                starDimension="2vh"
                                starSpacing="3px"
                                /> 
                   </div>
                   <div className="bestof-Ad-detail">
                       <span className="bestof-Ad-detail-spn">{mp.PhoneNumber}</span>
                    <p class="user-description">
                        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magnam natus adipisci quam a quis. */}
                    {mp.AdvisorAddress}
                    </p>
                    </div>
                </div>):<Spinner/>}
                {bestOf?bestOf.map(mp=><div class="user">
                    <h3 class="user-name">{mp.FristName + " " + `${mp.LastName?mp.LastName:''}`}</h3>
                  {mp.Image? <img class="user-photo" src={`data:image/jpeg;base64${mp.Image}`} alt="" />:
                    <img className='user-photo' src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                    <h4 class="user-city">{`${mp.AdvisorAddress?mp.AdvisorAddress:''}`}</h4>
                   <div className="star-box">
                   <StaticRange
                                rating={mp.RateAdvisor}
                                starRatedColor="gold"
                                numberOfStars={5}
                                name='rating'
                                starDimension="2vh"
                                starSpacing="3px"
                                /> 
                   </div>
                   <div className="bestof-Ad-detail">
                       <span className="bestof-Ad-detail-spn">{mp.PhoneNumber}</span>
                    <p class="user-description">
                        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magnam natus adipisci quam a quis. */}
                    {mp.AdvisorAddress}
                    </p>
                    </div>
                </div>):<Spinner/>}
            </div>
            <h1 class="detaile-title">بهترین سایت املاک شمال ایران</h1>
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
                </Link>
                <Link to='/description/two' class="item-detaile">
                    
                    <h2 className="item-detaile-sub">نکات طلایی در نوشتن آگهی ملک</h2>
                        <p class="item-detaile-info">
                        •	همیشه بهترین فایل خود را آگهی ‌کنید.
                        •	متن را به نحوی بنویسید که رقیبان نتوانند مکان فایل راحدس بزنند.
                        •	تا حد ممکن از نوشتن کلمات معادل فارسی استفاده کنید.
                        •	در آگهی روزنامه کم‌ترین کلمات مفید و ضروری را به 
                        </p>
                        <div class="member">
                        <img src={require('../../assets/description/WhatsApp Image 2022-06-14 at 3.01.29 PM.jpeg')} />

                            {/* <div class="description">
                                <h4 class="member-name">Saman Ashrafi</h4>
                            </div> */}
                        </div>
                
                </Link>
                <Link to='/description/three' class="item-detaile">
                    
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
                        </div>
                
                </Link>
               
            </div>
        </main>
    </section>
    )
}


export default BestOfArea;