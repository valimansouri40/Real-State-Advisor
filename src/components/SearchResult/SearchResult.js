import React, { useEffect, useState } from "react";
import './SearchResult.css';

import Paginate from '../Paginate/Paginate';
import { Link } from "react-router-dom";
import { changeprice } from "../UI/CardRealState/changePrice";
import Spinner from "../UI/spinner/Spinner";


const SearchResult=(props)=>{
        const {REALSTATEGETALLINIT,length,auth ,page, setpage,   addMarkinit, lessmarkinit , filter}=props;

        let userid= null;
        if(auth){
            userid= auth._id
        }
        
       const searchquery = window.location.hash;
        
    //   console.log(searchquery)
        useEffect(()=>{

           
            REALSTATEGETALLINIT(page, `${searchquery.replace('#/search?','')}${userid?"&_id=" +userid:""}` );
        },[searchquery, page]);

        const addmarkhandller= (mp)=>{
          const  data= {
              RealStateId: mp
          }
         
         if(auth){
          addMarkinit(data)
          REALSTATEGETALLINIT(page, `${searchquery.replace('#/search?','')}${userid?"&_id=" +userid:""}`)
          
      }else{
          window.location.hash = '#/login'
      }
          
      }

     

      const lessmarkhandller= (mp)=>{

          lessmarkinit(mp)
          REALSTATEGETALLINIT(page, `${searchquery}&_id=${userid}`)
      }
        
    return(
    
    <div class="container-src">
                <div className="tab-content1"  >
                {filter && searchquery? filter.length === 0?<div style={{marginTop: '3rem'}}>موردی یافت نشد!!</div>:null:<Spinner/>}
                  {filter && searchquery? filter.map((mp,i)=>(
                      <div className='realstate-box-1'>
                          <div className='card-imbox-1'>
                          <Link to={`/viewrealstate/${mp._id}`}>
                            <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                             width='100%' height='100%' />
                            </Link>
                             {mp.Aggrement?<span className="realstate-special-search">
                                پیشنهاد ویژه سایت
                        </span>:""}
                            {/* <span className="card-status">{mp.Tipic?"":""}</span> */}
                            { mp.Mark?<img width='25px' className="card-imgbox-icon" height='25px' onClick={()=>lessmarkhandller(mp._id)}
                              src="https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png"/>:
                              <img className="card-imgbox-icon" width='25px' height='25px' onClick={()=>addmarkhandller(mp._id)}
                              src="https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png" />}
                          </div>
                          <div className='card-middle-4'>
                          <div className='card-headbox2'>
                              <h2 className='field'>  {mp.TypeState + " " + mp.Area}</h2>
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

                              <h2 className='field3'>{`${mp.YearBuild} سال ساخت  `}</h2>
                          </div>
                          <div className="card-textandicon"> 
                          <img 
                              width='20px' height='20px'
                              src="https://img.icons8.com/fluency-systems-filled/48/000000/double-bed.png"/>
                              <h2 className='field3'> 
                               {mp.SomeRoom}</h2>
                              </div>
                         <div className="card-textandicon"> 
                         <img width="20px" heigth="20px" 
                         src="https://img.icons8.com/ios-filled/50/000000/equal-housing-opportunity.png"
                         />
                              <h2 className='field3'>  {mp.TypeState}</h2>
                              </div>
                        <div className="card-textandicon"> 
                        <img 
                            width="25px"  height="25px"
                        src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-measure-home-tools-photo3ideastudio-solid-photo3ideastudio.png"/>
                              <h2 className='field3'>  {mp.Measure} متر</h2>
                              </div>
                            </div> 
                            <div className="card-foot lkl" >
                            {mp.Mark?<img width='25px' height='25px' onClick={()=>lessmarkhandller(mp._id)} 
                            src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/>
                            :<img width='25px' height='25px' onClick={()=>addmarkhandller(mp._id)}
                            src="https://img.icons8.com/ios/50/000000/like--v1.png"
                            />}
                                {/* <h2 className='field'> متراژ : {mp.Measure} متر</h2> */}
                                <h2 className='field price'> {mp.Tab === 'sells'? 'قیمت':"رهن"} : {changeprice(mp.Mortgage)}</h2>
                               
                                {/* {mp.Lease? <h2 className='field'> اجاره : {changeprice(mp.Lease)}</h2>:null } */}
                               </div>
                                </div>
                          
                          {/* <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button> */}
                          </div>
                  )):null}
                  
                   </div>
                   <Paginate setpage={setpage} page={page} length={length} />
            
        
    </div>
    )
}


export default SearchResult;
