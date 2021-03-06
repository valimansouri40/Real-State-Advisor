import React, { useEffect, useState } from "react";
import './Filter.css';
import Seles from "./Sales";
import Rent from "./rent";
import Cooperation from "./Cooperation";
import Tabbar from "./tabbar";

const Filter= (props)=>{
        const {tab, settab,getallwsinit ,getallfilterinit, areaall,loading,cityall,REALSTATEGETALLINIT, filter,
            worksampel ,changefilehandller, auth, sendreq}=props;
            // const arraytab=['sell', 'rent','engine','cooperation'];
           
           window.addEventListener('resize', ()=>{ 
                
               if(window.innerWidth <= 700 && tab === "cooperation" ){
                settab('sell')
            }
        })
          
               
         
        useEffect(()=>{
            const search= window.location.search;
            
            if(search.includes('rahn')){
                settab('rent')
            }else if(search.includes('sell')){
                settab('sell')
            }   
        },[])
        
        const changeTab=(e)=>{

            settab(e);
        }

        let tabShow;
      
            switch(tab){
                case 'sell':
                    tabShow = <Seles getallfilterinit={getallfilterinit} filters={filter} 
                    changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Seles>;
                    break;
                case 'rent':
                    tabShow =<Rent getallfilterinit={getallfilterinit} filters={filter}
                    
                     changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Rent>;
                    break;
                case 'engine':
                    tabShow=<Tabbar getallwsinit={getallwsinit} tab={tab} loading={loading} worksampel={worksampel} auth={auth} sendreq={sendreq}></Tabbar>;
                    break;
                case 'cooperation':
                    tabShow= <Cooperation tab={tab} auth={auth} sendreq={sendreq} loading={loading} changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Cooperation>;
                    break;
                default: tabShow= <Seles getallfilterinit={getallfilterinit} filters={filter}
                 changefilehandller={changefilehandller} areaall={areaall} cityall={cityall}></Seles>;
                    break;
            }
            const path= window.location.hash;
    return(

        
<section className="search">
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-9 search-box">
                <ul className="nav-pills" >
                    <li className="nav-item" >
                        <button onClick={()=>changeTab('sell')} 
                        className={tab ==="sell"?"nav-link active":"nav-link2"} >???????? ??????</button>
                    </li>
                    <li className="nav-item" >
                        <button onClick={()=>changeTab('rent')}
                         className={tab ==="rent"?"nav-link active":"nav-link2"}  >?????? ?? ??????????</button>
                    </li>
                   { path !== '#/search'?<><li className="nav-item" >
                        <button onClick={()=>changeTab('engine')}
                         className={tab ==="engine"?"nav-link active":"nav-link2"}  >?????????? ????????????</button>
                    </li>
                    <li className="nav-item nav-item-responsive" >
                        <button onClick={()=>changeTab('cooperation')}
                         className={tab ==="cooperation"?"nav-link active nav-item-responsive":"nav-link2 nav-item-responsive"}  id="pills-Fund-tab" >???????? ???????????? ??????????</button>
                    </li></>:null}
                </ul>
                <div className="tab-content7" >

                                {tabShow}
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default Filter;