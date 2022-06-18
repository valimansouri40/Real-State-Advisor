import React from "react";
import './Footer.css';
import goooya from '../../assets/goooya-logo.png';
import enamad from '../../assets/enamad.png';
import samandehi from '../../assets/samandehi.png';
import { NavLink } from "react-router-dom";


const Footer=(props)=>{

    const {tab , settab , auth}= props;

    const reqhandller=(dt)=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            settab(dt)
           
    }

    return(
        <footer class="footer">
        <section class="footer-email">
            <p>با عضویت در خبرنامه سایت از آخرین خبرهای سایت باخبر شوید</p>
            <div class="form-Newsletter">

                <input type="email" placeholder="ایمیل خود را وارد نمایید"/>
                <button class="Newsletter-btn" type="submit">عضویت</button>

            </div>
        </section>
        <section class="footer-min">

            <div class="coloum-footer1">
                <img class="logo-footer" src={goooya} alt="goooya-logo"/>
                <p>شفافیت در خرید و فروش املاک و خدمات مهندسی </p>
                <ul>
                    <li><i class="fa fa-map-marker"></i>شهرستان دماوند، میدان فرامه</li>
                    <li><i class="fa fa-phone"></i>021763200000</li>
                    <li><i class="fa fa-envelope"></i>info@goooya.com</li>
                </ul>
            </div>


            <div class="coloum-footer2">
                <p>دسترسی سریع</p>
                <ul>
                    <li onClick={()=>reqhandller('sell')}><NavLink to='/'>خرید و فروش</NavLink></li>
                    <li onClick={()=>reqhandller('rent')}><NavLink to='/'>رهن و اجاره</NavLink></li>
                    <li onClick={()=>reqhandller('engine')}><NavLink to='/'>خدمات مهندسی</NavLink></li>
                    <li onClick={()=>reqhandller('cooperation')}><NavLink to='/'>فرصت سرمایه گذاری</NavLink></li>
                    <li onClick={()=>reqhandller(tab)}><NavLink to='/'>استخدام مشاور</NavLink></li>
                    <li onClick={()=>reqhandller(tab)}><NavLink to='/'>سپردن ملک</NavLink></li>
                </ul>
            </div>


            <div class="coloum-footer3">
                <div class="inamad">
                    <h4>نماد های اعتماد</h4>
                    <img className="inamad-1" src={enamad} alt=""/>
                    <img className="inamad-2" width="150px" heigth="150px" src={samandehi} alt=""/>
                    <img  className="inamad-1"src={enamad} alt=""/>
                </div>

                <div class="soctioal">
                    <h4>شبکه های اجتماعی</h4>
                    <ul>
                        <li>
                            <a href=""> <i class="fab fa-telegram"></i></a>
                        </li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
                        <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="footer-copy-right">

            <p>تمامی حقوق محفوظ و متعلق به گویا میباشد</p>
            <p>طراحی و اجرا توسط تیم گویا</p>
        </section>

    </footer>
    )
}

export default Footer;

