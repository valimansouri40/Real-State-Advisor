import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './RealStatefulldata.css';
import * as action from '../../store/action/index';
import { useParams } from "react-router";
import Header from '../../components/Header/Header';
import Gallery from "../../components/Gallery/Gallery";
import Callender from "../../components/Callender/Callender";
import DataBox from "../../components/DataBox/DataBox";
import AdvisorData from "../../components/AdvisorData/AdvisorData";
import CardRealState from "../../components/UI/CardRealState/CardRealState";
import Map from '../../components/UI/GoogleMaps/GoogleMaps';
import { Helmet } from "react-helmet-async";
// صفحه نمایش اطلاعات کامل ملک

const RealStatefulldata=(props)=>{
        const {REALSTATEGETONEINIT,realstatestartfocinit, FocusData, addMarkinit, lessmarkinit
            , auth, reviwes ,appogetoneinit ,
            reviwegetinit, OneData ,appopostinit, sendreq, reviweandRatepostinit}= props;
          
        const [fristnum, setfristnum]= useState(0);
        const [lastnum, setlastnum]= useState(3);
        useEffect(()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        },[])
        const param = useParams().id;
        
        useEffect(()=>{
            REALSTATEGETONEINIT(param)
        },[REALSTATEGETONEINIT, param])
        useEffect(()=>{
            appogetoneinit(param);
        },[appogetoneinit, param])

        useEffect(()=>{
            if(OneData){
                
                let querystr = `/mark?Tipic=${OneData.Tipic}&TypeState=${OneData.TypeState}&City=${OneData.City}&Area=${OneData.Area}&
                Mortgage[gte]=${OneData.Mortgage * 1 - 100000000}&
                Mortgage[lte]=${OneData.Mortgage * 1 + 100000000}&limit=10&page=1`
                if(!auth){
                    querystr = `/realstate?Tipic=${OneData.Tipic}&TypeState=${OneData.TypeState}&City=${OneData.City}&Area=${OneData.Area}&
                Mortgage[gte]=${OneData.Mortgage * 1 - 100000000}&
                Mortgage[lte]=${OneData.Mortgage * 1 + 100000000}&limit=10&page=1`
                }
            realstatestartfocinit(querystr);
                   }
        },[realstatestartfocinit, OneData, auth])
        let onedt= null;
        if(OneData){
            onedt= Object.entries(OneData);
            
        }
        
        const nextMyImage=()=>{

            if( lastnum < FocusData.length - 1){
                    setfristnum(num=> num + 1)
                    setlastnum(nu=> nu + 1)
            }
            
        }
        
        const lastMyImage=()=>{
    
            if( fristnum > 0){
                setfristnum(num=> num - 1)
                setlastnum(nu=> nu - 1)
        }
            
        }
        let FocusDataLimit ;
        if(FocusData){
           FocusDataLimit = FocusData.slice(fristnum, lastnum);
        }
      
    return(
        <section className='sec-rsdf'>
            <Header auth={auth} sendreq={sendreq}></Header>
            {OneData?<Helmet>
           <title>{OneData.Tipic === 'rahn'?`اجاره خانه در${" " +OneData.City + " " + OneData.Area}`:`خرید خانه در${" " +OneData.City + " " + OneData.Area}`}</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>:null}
             <div className='target-all'>
           { OneData?<div className="target-rsdf-one">
                
            {OneData?<><Gallery Image={OneData.Image}></Gallery>   
            <DataBox reviwegetinit={reviwegetinit}  auth={auth} reviwes={reviwes} OneData={OneData}
             reviweandRatepostinit={reviweandRatepostinit} OneData={OneData}></DataBox></>:null}
               
            </div>:null}
            <div className='target-rsdf-two'>
            <Callender 
                auth={auth}
            OneData={OneData} appopostinit={appopostinit}></Callender> 
            {OneData?<>
            {OneData.AdvisorId?<AdvisorData OneData={OneData} ></AdvisorData>:null}
            
           <div className='map-rstf'> <Map location={OneData.Location}></Map></div></>:null  }
                </div>
          
            </div> 
            <div className='rsdf-row'>
                <div className='rstf-ch' onClick={lastMyImage}>قبلی</div>
                {FocusDataLimit?FocusDataLimit.map((mp, i)=><CardRealState 
                addMarkinit={addMarkinit} lessmarkinit={lessmarkinit} auth={auth}
                FocusData={mp} realstatestartfocinit={realstatestartfocinit}></CardRealState>):null}
                <div className='rstf-ch' onClick={nextMyImage}>بعدی</div>
            
            </div>
        </section>
    )
}

const MapStateToProps=state=>{

    return{
        OneData: state.realstate.OneData,
        FocusData: state.realstate.focusData,
        oneAppointment: state.appointment.onedata,
        auth: state.auth.data,
        reviwes: state.rate.reviwes
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
        REALSTATEGETONEINIT:(id)=> dispatch(action.REALSTATEGETONEINIT(id)),
        realstatestartfocinit:(query)=> dispatch(action.realstatestartfocinit(query)),
        appopostinit: (data)=> dispatch(action.appopostinit(data)),
        appogetoneinit: (id)=> dispatch(action.appogetoneinit(id)),
        addMarkinit: (data)=> dispatch(action.addmarkinit(data)),
        lessmarkinit: (id)=> dispatch(action.lessmarkinit(id)),
        reviweandRatepostinit:(dt)=>dispatch(action.reviweandRatepostinit(dt)),
        reviwegetinit: (id)=> dispatch(action.reviwegetinit(id))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(RealStatefulldata);