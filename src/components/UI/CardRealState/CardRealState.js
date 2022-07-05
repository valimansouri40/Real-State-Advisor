import React from "react";
import { Link } from "react-router-dom";
import './CardRealState.css';
import { changeprice } from "./changePrice";


const CardRealState=props=>{
        const {FocusData, addMarkinit, lessmarkinit,realstatestartfocinit, auth }= props;
        

        let querystr = `/mark?Tipic=${FocusData.Tipic}&TypeState=${FocusData.TypeState}&City=${FocusData.City}&Area=${FocusData.Area}&
        Mortgage[gte]=${FocusData.Mortgage * 1 - 100000000}&
        Mortgage[lte]=${FocusData.Mortgage * 1 + 100000000}&limit=10&page=1`
        if(!auth){
            querystr = `/realstate?Tipic=${FocusData.Tipic}&TypeState=${FocusData.TypeState}&City=${FocusData.City}&Area=${FocusData.Area}&
        Mortgage[gte]=${FocusData.Mortgage * 1 - 100000000}&
        Mortgage[lte]=${FocusData.Mortgage * 1 + 100000000}&limit=10&page=1`
        }

        const scrolTopHandller = ()=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior:'smooth'
            })
        }

        const addmarkhandller= ()=>{
            const  data= {
                RealStateId: FocusData._id
            }
           if(auth){
            addMarkinit(data)
            
            realstatestartfocinit(querystr)
        }else{
            window.location.hash = '#/login'
        }
            
        }

        const lessmarkhandller= ()=>{

            lessmarkinit(FocusData._id)
           
            realstatestartfocinit(querystr)
        }
        
    return(
        <div className='cardrealstate-target'>
            
             <div  className='cardrealstate-boximg'>
           <p className="cardrealstate-box-mark"> { FocusData.Mark?
           <img width='25px' height='25px' className="cardrealstate-mark" onClick={lessmarkhandller}
              src="https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png"/>:
            
              
              <img className="cardrealstate-mark" width='25px' height='25px' onClick={addmarkhandller}
              
               src="https://img.icons8.com/ios/50/000000/bookmark-ribbon--v1.png" />}
               </p>
               <Link onClick={scrolTopHandller} className="cardrealstate-link" to={`/viewrealstate/${FocusData._id}`}>
                     {FocusData?<img className="cardrealstate-img" 
                     src={`data:image/jpeg;base64,${FocusData.Image[0]}`} />:null}</Link>
                
            </div>
            <Link onClick={scrolTopHandller} className="cardrealstate-link" to={`/viewrealstate/${FocusData._id}`}>
            <div className='cardrealstate-boxdetail'>
               <div className='cardrealstate-boxonedetail' >
               <img width='25px' height='25px' src="https://img.icons8.com/color/48/000000/measure.png"/>
               <h3 className='cardrealstate-detail'>
                   {FocusData.Measure}متر 
               </h3>
               </div>
               <div className='cardrealstate-boxonedetail' >
               <img width='25px' height='25px' src="https://img.icons8.com/ios-filled/50/000000/bed.png"/>
               <h3 className='cardrealstate-detail'>
               {FocusData.SomeRoom}
               </h3>
               </div>
               <div className='cardrealstate-boxonedetail' >
               <img width='25px' height='25px' src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-property-due-diligence-icongeek26-glyph-icongeek26.png"/>
               <h3 className='cardrealstate-detail'>  {FocusData.TypeState}</h3>
               </div>
               <div className='cardrealstate-boxonedetail' >
               <h3 className='cardrealstate-detail'>  {FocusData.Tipic === "sells" ?"قیمت":"رهن"}   </h3>:
               <h3 className='cardrealstate-detail'>  { changeprice(FocusData.Mortgage) }  </h3>
               
             
               
               </div>
            </div>
            </Link>
        </div>
       
    )
}

export default CardRealState;

// JSON.parse(FocusData.Mortgage).toLocaleString()