import React, { useEffect, useState } from "react";
import './TabRealState.css';
import Paginate from '../Paginate/Paginate';
import { Link } from "react-router-dom";
import { changeprice } from "../UI/CardRealState/changePrice";
import {Helmet} from 'react-helmet-async';

const TabRealState=(props)=>{
        const {REALSTATEGETALLINIT,length, auth, addMarkinit,  lessmarkinit, filter}=props;
        
        const [Tab, settab]=useState('Tipic=sells');
        const [page, setpage]=useState(1)

        
        useEffect(()=>{
            if( auth){
            REALSTATEGETALLINIT(page, `${Tab}&_id=${auth._id}`)
        }else{
           
                REALSTATEGETALLINIT(page, `${Tab}`)
           
        }
        },[REALSTATEGETALLINIT, Tab, auth, page])
            
        const setvaluehd=(e)=>{
            settab(e.target.value);
        }

        const addmarkhandller= (mp)=>{
            const  data= {
                RealStateId: mp
            }
           
           if(auth){

            addMarkinit(data)
            setTimeout(() => {
                REALSTATEGETALLINIT(page, `${Tab}&_id=${auth._id}`)
            }, 100);
            
            
        }else{
            window.location.hash = '#/login'
        }
            
        }
  
        const lessmarkhandller= (mp)=>{
  
            lessmarkinit(mp)
            setTimeout(() => {
                REALSTATEGETALLINIT(page, `${Tab}&_id=${auth._id}`)
            }, 100);
        }

    return(
        <section class="posts">
  
            <div class="tabs">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button onClick={setvaluehd} className={Tab !=="Immediatly=true"?"nav-link":"nav-link active"} value="Immediatly=true" >پیشنهاد ویژه سایت</button>
                        <button onClick={setvaluehd} className={Tab !=="Tipic=rahn"?"nav-link":"nav-link active"}value="Tipic=rahn" >رهن و اجاره</button>
                        <button onClick={setvaluehd} className={Tab !=="Tipic=sells"?"nav-link":"nav-link active"} value="Tipic=sells" >خرید ملک</button>
                        
                    </div>
                </nav>
                <div className="tab-content1"  >
                  {filter? filter.map((mp,i)=>( <>
                      <div className='realstate-box'>
                  
                          <div className='card-imbox'>
                            <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                             width='100px' height='100px' />
                              { mp.Mark?<img width='25px' height='25px' onClick={()=>lessmarkhandller(mp._id)}
                              src="https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png"/>:
                              <img width='25px' height='25px' onClick={()=>addmarkhandller(mp._id)}
                              src="https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png" />}
                            
                          </div>
                          <div className='card-middle'>
                              <div className='card-headbox'>
                              <h2 className='field'> نوع ملک : {mp.TypeState}</h2>
                                
                              </div>
                            
                              <h2 className='field'>{`${mp.YearBuild} سال ساخت  `}</h2>
                              <h2 className='field'> شهر : {mp.City}</h2>
                                <h2 className='field'> منطقه : {mp.Area}</h2>
                                <h2 className='field'> تعداد اتاق خواب : {mp.SomeRoom}</h2>
                                <h2 className='field'> متراژ : {mp.Measure} متر</h2>
                                <h2 className='field'> {mp.Tab === 'sells'? 'قیمت':"رهن"} : {changeprice(mp.Mortgage)}</h2>
                                {mp.Lease? <h2 className='field'> اجاره : {changeprice(mp.Lease)}</h2>:null }
                                
                                </div>
                          
                          <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button>
                          </div>
                  </>)):null}
                  
                   </div>
                   <Paginate setpage={setpage} page={page} length={length} />
            
    </div>
</section>
    )
}


export default TabRealState;
