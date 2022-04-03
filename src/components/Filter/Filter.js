import React, { useEffect, useState } from "react";
import './Filter.css';
import Seles from "./Sales";
import Rent from "./rent";
import Cooperation from "./Cooperation";
import Tabbar from "./tabbar";

const Filter= (props)=>{
        const {tab, settab,getallwsinit ,getallfilterinit, areaall,cityall,REALSTATEGETALLINIT, filter,
            worksampel ,changefilehandller, auth, sendreq}=props;
        const arraytab=['sell', 'rent','engine','cooperation'];
        
        console.log(tab)
        const changeTab=(e)=>{

            settab(e);
        }

        let tabShow;
      
            switch(tab){
                case 'sell':
                    tabShow = <Seles getallfilterinit={getallfilterinit} filters={filter} REALSTATEGETALLINIT={REALSTATEGETALLINIT} changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Seles>;
                    break;
                case 'rent':
                    tabShow =<Rent getallfilterinit={getallfilterinit} filters={filter} REALSTATEGETALLINIT={REALSTATEGETALLINIT} changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Rent>;
                    break;
                case 'engine':
                    tabShow=<Tabbar getallwsinit={getallwsinit} tab={tab} worksampel={worksampel} auth={auth} sendreq={sendreq}></Tabbar>;
                    break;
                case 'cooperation':
                    tabShow= <Cooperation tab={tab} auth={auth} sendreq={sendreq} changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Cooperation>;
                    break;
                default: tabShow= <Seles getallfilterinit={getallfilterinit} filters={filter}
                 REALSTATEGETALLINIT={REALSTATEGETALLINIT} changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Seles>;
                    break;
            }

    return(

        
<section className="search">
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-9 search-box">
                <ul className="nav nav-pills mb-3" >
                    <li className="nav-item" >
                        <button onClick={()=>changeTab('sell')} 
                        className={tab ==="sell"?"nav-link active":"nav-link"} >خرید ملک</button>
                    </li>
                    <li className="nav-item" >
                        <button onClick={()=>changeTab('rent')}
                         className={tab ==="rent"?"nav-link active":"nav-link"}  >رهن و اجاره</button>
                    </li>
                    <li className="nav-item" >
                        <button onClick={()=>changeTab('engine')}
                         className={tab ==="engine"?"nav-link active":"nav-link"}  >خدمات مهندسی</button>
                    </li>
                    <li className="nav-item" >
                        <button onClick={()=>changeTab('cooperation')}
                         className={tab ==="cooperation"?"nav-link active":"nav-link"}  id="pills-Fund-tab" >فرصت سرمایه گذاری</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">

                                {tabShow}
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default Filter;