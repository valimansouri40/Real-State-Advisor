import React, { useEffect, useState } from "react";
import './MyMarks.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Paginate from "../../components/Paginate/Paginate";

/// بخش نشانک های من در نوبار صفحه سایت

const MyMarks=props=>{
        const { FocusData,GETALLMYMARK ,sendreq, lessmarkinit,length, auth}= props;
        const [page, setpage]=useState(1)

        const lessmarkhandller=(id)=>{
            lessmarkinit(id);
            GETALLMYMARK(`1234?page=${page}&limit=20`)
        }
        useEffect(()=>{
            GETALLMYMARK(`1234?page=${page}&limit=20`)
        },[GETALLMYMARK, page])
        if(FocusData){
            console.log(FocusData)
        }
    return(
        <div className='mymarks-target'>
            <Header auth={auth} sendreq={sendreq}></Header>
            
            <div className='mymarks-frame'>
            {FocusData? FocusData.length === 0?<div>موردی یافت نشد!!</div>:null:null} 
           {   FocusData?FocusData.map(mp=> <> 
             <div  className='mymarks-boximg'>
                <img width='25px' height='25px' onClick={()=>lessmarkhandller(mp.RealStateId._id)}
                src="https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png"/>
                        <img width='250px' height='150px' src={`data:image/jpeg;base64,
                        ${mp.RealStateId.Image[0]}`} />

            </div>
            <div className='cardrealstate-boxdetail'>
               <div className='cardrealstate-boxonedetail' >
                    <img width='25px' height='25px' src="https://img.icons8.com/color/48/000000/measure.png"/>
                    <h3 className='cardrealstate-detail'>
                        {mp.RealStateId.Measure}
                    </h3>
               </div>
               <div className='cardrealstate-boxonedetail' >
                    <img width='25px' height='25px' src="https://img.icons8.com/ios-filled/50/000000/bed.png"/>
                    <h3 className='cardrealstate-detail'>
                    {mp.RealStateId.SomeRoom}
                    </h3>
               </div>
                <div className='cardrealstate-boxonedetail' >
                    <img width='25px' height='25px' src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/000000/external-property-due-diligence-icongeek26-glyph-icongeek26.png"/>
                    <h3 className='cardrealstate-detail'>  {mp.RealStateId.TypeState}</h3>
               </div>
               <div className='cardrealstate-boxonedetail' >
                    <h3 className='cardrealstate-detail'> قیمت  : </h3>
                    <h3 className='cardrealstate-detail'>  {mp.RealStateId.Mortgage}  </h3> 
               
               </div>
               <button className="card-btn"><Link to={`/viewrealstate/${mp.RealStateId._id}`}> مشاهده صفحه </Link></button>
            </div>
            </>):null}</div>
            <Paginate page={page} setpage={setpage} length={length}></Paginate>
        </div>
    )
}

const MapStateToProps= state =>{

    return{
        FocusData: state.mark.myMark,
        auth: state.auth.data,
        length: state.mark.length
    }
}

const MapDisPatchToProps= dispatch=>{

    return{
        GETALLMYMARK: (us)=> dispatch(action.GETALLMYMARKINIT(us)),
         lessmarkinit: (id)=> dispatch(action.lessmarkinit(id)),
         sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
    }
}

export default connect(MapStateToProps, MapDisPatchToProps)(MyMarks);
