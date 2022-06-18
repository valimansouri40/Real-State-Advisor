import React, { useEffect, useState } from "react";
import './TabRealState.css';
import { Link } from "react-router-dom";
import { changeprice } from "../UI/CardRealState/changePrice";
import Spinner from "../UI/spinner/Spinner";

const TabRealState=(props)=>{
        const {REALSTATEGETALLINIT, auth, addMarkinit,  lessmarkinit, filter}=props;
        
        const [Tab, settab]=useState('Tipic=sells');
        const [page, setpage]=useState(1)

        
        useEffect(()=>{
            if( auth){
            REALSTATEGETALLINIT(page, `${Tab}&Aggrement=true&_id=${auth._id}`,6)
        }else{
           
                REALSTATEGETALLINIT(page, `${Tab}&Aggrement=true`, 6)
           
        }
        },[REALSTATEGETALLINIT, Tab, auth, page])
            
        const setvaluehd=(e)=>{
            settab(e.target.value);
            setpage(1)
        }

        const addmarkhandller= (mp)=>{
            const  data= {
                RealStateId: mp
            }
           
           if(auth){

            addMarkinit(data)
            setTimeout(() => {
                REALSTATEGETALLINIT(page, `${Tab}&Aggrement=true&_id=${auth._id}`, 6)
            }, 100);
            
            
        }else{
            window.location.hash = '#/login'
        }
            
        }
  
        const lessmarkhandller= (mp)=>{
  
            lessmarkinit(mp)
            setTimeout(() => {
                REALSTATEGETALLINIT(page, `${Tab}&_id=${auth._id}`, 6)
            }, 100);
        }


    return(
  
            <div class="tabs1">
                <div className="nav-box">
                    <div className="nav-tabs2" >
                        <button onClick={setvaluehd} 
                        className={Tab !=="Immediatly=true"?"tab-link":"tab-link-active"} value="Immediatly=true" >فوری</button>
                        <button onClick={setvaluehd} 
                        className={Tab !=="Tipic=rahn"?"tab-link":"tab-link-active"}value="Tipic=rahn" >رهن و اجاره</button>
                        <button onClick={setvaluehd} 
                        className={Tab !=="Tipic=sells"?"tab-link":"tab-link-active"} value="Tipic=sells" >خرید ملک</button>
                        
                    </div>
                </div>
                <div className="tab-content4"  >
                {filter? filter.length === 0?<div className="not-exist-realstate">موردی یافت نشد!!</div>:null:
                <div className="not-exist-realstate"><Spinner/></div>}
                  {filter? filter.map((mp,i)=>(
                      <div className='realstate-box2'>
                        {mp.Aggrement?<span className="realstate-special">
                                پیشنهاد ویژه سایت
                        </span>:""}
                        {/* {mp.Immediatly?<span  className="realstate-immediate">
                                فوری
                        </span>:""} */}
                          <div className='card-imbox'>
                          <Link to={`/viewrealstate/${mp._id}`} style={{textDecoration:"none"}}>
                          <img className="card-imbox-icon1" src="https://img.icons8.com/ios-glyphs/30/000000/picture.png"/>
                          <img className="card-imbox-icon2" src="https://img.icons8.com/carbon-copy/32/000000/details.png"/>
                            {Tab ==="Immediatly=true"?<span className="forwhat">
                                 برای {mp.Tipic === "sells"?"فروش":"اجاره"} </span>:null}
                            <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                             width='100%' height='100%' />
                             </Link>
                              {/* { mp.Mark?<img width='25px' height='25px' className="add-mark" onClick={()=>lessmarkhandller(mp._id)}
                              src="https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png"/>:
                              <img  className="add-mark" width='25px' height='25px' onClick={()=>addmarkhandller(mp._id)}
                              src="https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png" />} */}
                            
                          </div>
                          <div className='card-middle3'>
                              <div className='card-headbox2'>
                              <h2 className='field-tb'>  {mp.TypeState + " " + mp.Area}</h2>
                             <div className="card-textandicon"> 
                              <img width='20px' height='20px' 
                            src="https://img.icons8.com/ios-filled/50/000000/marker.png"/>
                            <h2 className='field2'>    {mp.Type}</h2>
                            </div>
                              </div>
                          <div className="card-mid-box3">
                          <div className="card-textandicon"> 
                          <img width="20px" heigth="20px" 
                          src="https://img.icons8.com/material-rounded/24/000000/2016.png"/>

                              <h2 className='field-tb'>{`${mp.YearBuild}سال ساخت`}</h2>
                          </div>
                          <div className="card-textandicon"> 
                          <img 
                              width='20px' height='20px'
                              src="https://img.icons8.com/fluency-systems-filled/48/000000/double-bed.png"/>
                              <h2 className='field-tb'> 
                               {mp.SomeRoom}</h2>
                              </div>
                         <div className="card-textandicon"> 
                         <img width="20px" heigth="20px" 
                         src="https://img.icons8.com/ios-filled/50/000000/equal-housing-opportunity.png"
                         />
                              <h2 className='field-tb'>  {mp.TypeState}</h2>
                              </div>
                        <div className="card-textandicon"> 
                        <img 
                            width="25px"  height="25px"
                        src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-measure-home-tools-photo3ideastudio-solid-photo3ideastudio.png"/>
                              <h2 className='field-tb'>  {mp.Measure} متر</h2>
                              </div>
                            </div> 
                            <div className="card-foot" >
                            {mp.Mark?<img width='25px' height='25px' onClick={()=>lessmarkhandller(mp._id)} 
                            src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/>
                            :<img width='25px' height='25px' onClick={()=>addmarkhandller(mp._id)}
                            src="https://img.icons8.com/ios/50/000000/like--v1.png"
                            />}
                                {/* <h2 className='field-tb'> متراژ : {mp.Measure} متر</h2> */}
                                <h2 className='field'> {mp.Tab === 'sells'? 'قیمت':"رهن"} : {changeprice(mp.Mortgage)}</h2>
                               
                                {/* {mp.Lease? <h2 className='field-tb'> اجاره : {changeprice(mp.Lease)}</h2>:null } */}
                               </div>
                                </div>
                               
                          {/* <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button> */}
                          </div>
                  )):null}
                  
                   </div>
                   <div className="btn-more-box">
                        <button className="btn-more"  >
                            <Link onClick={()=>{
                                window.scrollTo({
                                    top:0,
                                    left:0,
                                    behavior:'auto'
                                })
                            }} style={{textDecoration:"none",color:"#fff"}} to="/search"> موارد بیشتر 
                        </Link></button>
                   </div>
                   
            
    </div>
    )
}


export default TabRealState;
