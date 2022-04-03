import React from "react";
import './Logo.css';
import logoIcon from '../../assets/goooya-logo.png';


const Logo=(props)=>{


    return(
        <section>
            <div class="container">
                <div class="row">
                    <div class="logo">
                        <img src={logoIcon} alt=""/>
                        <p class="desc">شفافیت در خرید و فروش املاک و خدمات مهندسی</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Logo;