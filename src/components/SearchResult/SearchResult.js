import React, { useEffect, useState } from "react";
import './SearchResult.css';

import Paginate from '../Paginate/Paginate';
import { Link } from "react-router-dom";
import { changeprice } from "../UI/CardRealState/changePrice";


const SearchResult=(props)=>{
        const {REALSTATEGETALLINIT,length,auth ,   addMarkinit, lessmarkinit , filter}=props;

        let userid= null;
        if(auth){
            userid= auth._id
        }
        console.log(length)
       const searchquery = window.location.search;
        const [page, setpage]=useState(1)
        
        console.log(searchquery)
        useEffect(()=>{
           
            REALSTATEGETALLINIT(page, `${searchquery}&_id=${userid}` )
        
        },[page, REALSTATEGETALLINIT, userid]);

        const addmarkhandller= (mp)=>{
          const  data= {
              RealStateId: mp
          }
          console.log(auth)
         if(auth){
          addMarkinit(data)
          REALSTATEGETALLINIT(page, `${searchquery}&_id=${userid}`)
          
      }else{
          window.location.hash = '#/login'
      }
          
      }

      const lessmarkhandller= (mp)=>{

          lessmarkinit(mp)
          REALSTATEGETALLINIT(page, `${searchquery}&_id=${userid}`)
      }
        console.log(userid)
    return(
        <section class="posts">
    <div class="container">
                <div className="tab-content1"  >
                  {filter? filter.map((mp,i)=>(
                      <div className='realstate-box'>
                          <div className='card-imbox'>
                            <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                             width='100px' height='100px' />
                            <span className="card-status">{mp.Tipic?"":""}</span>
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
                  )):null}
                  
                   </div>
                   <Paginate setpage={setpage} page={page} length={length} />
            
        
    </div>
</section>
    )
}


export default SearchResult;
