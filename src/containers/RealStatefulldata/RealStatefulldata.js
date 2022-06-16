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
import Spinner from "../../components/UI/spinner/Spinner";
import Footer from "../../components/Footer/Footer";
import DataBoxRes from "../../components/UI/DataBoxRes/DataBoxRes";
import CommentRes from "../../components/UI/CommentRes/CommentRes";
import CloseComponent from "../../components/CloseComponent/CloseComponent";
// صفحه نمایش اطلاعات کامل ملک

const RealStatefulldata=(props)=>{
        const {REALSTATEGETONEINIT,realstatestartfocinit, FocusData, addMarkinit, lessmarkinit
            , auth, reviwes ,appogetoneinit ,
            reviwegetinit, OneData ,appopostinit, sendreq, reviweandRatepostinit}= props;
        //   console.log(OneData)
        const [fristnum, setfristnum]= useState(0);
        const [lastnum, setlastnum]= useState(4);
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
                
                let querystr = `/realstate?Tipic=${OneData.Tipic}&TypeState=${OneData.TypeState}&City=${OneData.City}&Area=${OneData.Area}&Mortgage[gte]=${OneData.Mortgage * 1 - 100000000}&length=notexist&Mortgage[lte]=${OneData.Mortgage * 1 + 100000000}&limit=7&page=1`
                
                if(auth){
                    querystr = `/mark?Tipic=${OneData.Tipic}&TypeState=${OneData.TypeState}&City=${OneData.City}&Area=${OneData.Area}&Mortgage[gte]=${OneData.Mortgage * 1 - 100000000}&length=notexist&Mortgage[lte]=${OneData.Mortgage * 1 + 100000000}&limit=7&page=1&_id=${OneData.RealStateNumber}`
                }
            realstatestartfocinit(querystr);
                   }
        },[ OneData, auth])
        // useEffect(()=>{
        //         if(FocusData && FocusData.length === 0){
        //             let querystr = `/mark?Tipic=${OneData.Tipic}&TypeState=${OneData.TypeState}&City=${OneData.City}&
        //         Mortgage[gte]=${OneData.Mortgage * 1 - 500000000}&
        //         Mortgage[lte]=${OneData.Mortgage * 1 + 500000000}&limit=7&page=1&_id=${OneData.RealStateNumber}`
        //         if(!auth){
        //             querystr = `/realstate?Tipic=${OneData.Tipic}&TypeState=${OneData.TypeState}&City=${OneData.City}&
        //         Mortgage[gte]=${OneData.Mortgage * 1 - 500000000}&
        //         Mortgage[lte]=${OneData.Mortgage * 1 + 500000000}&limit=7&page=1`
        //     }
        //     realstatestartfocinit(querystr);
        //         }
        // },[FocusData])
    

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
           FocusDataLimit = FocusData;
            FocusDataLimit = FocusDataLimit.filter(el=> el.RealStateNumber !== OneData.RealStateNumber).slice(fristnum, lastnum);
        }
      
    return(
        <section className='sec-rsdf'>
            <Header auth={auth} sendreq={sendreq}></Header>
        <CloseComponent>
            <div className="rsdf-div">
            {OneData?<Helmet>
           <title>{OneData.Tipic === 'rahn'?`اجاره خانه در${" " +OneData.City + " " + OneData.Area}`:`خرید خانه در${" " +OneData.City + " " + OneData.Area}`}</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>:null}
        { OneData?<><div className='target-all'>
           <div className="target-rsdf-one">
                
            <Gallery Image={OneData.Image}></Gallery>   
            <div className="rstf-dtbx">
            <DataBox reviwegetinit={reviwegetinit}  auth={auth} reviwes={reviwes} OneData={OneData}
             reviweandRatepostinit={reviweandRatepostinit} ></DataBox>
              </div> 
            <DataBoxRes reviwegetinit={reviwegetinit}  auth={auth} reviwes={reviwes} OneData={OneData}
             reviweandRatepostinit={reviweandRatepostinit}/>
             <CommentRes reviwegetinit={reviwegetinit}
                    auth={auth} reviwes={reviwes} OneData={OneData}
                    reviweandRatepostinit={reviweandRatepostinit} />
            
            </div>
            <div className='target-rsdf-two'>
            <Callender 
                auth={auth}
            OneData={OneData} appopostinit={appopostinit}></Callender> 
            {OneData?<>
            {OneData.AdvisorId?<AdvisorData OneData={OneData} ></AdvisorData>:null}
            
           <div className='map-rstf'> <Map location={OneData.Location}></Map></div></>:null  }
                </div>
          
            </div> 
            <div className="rsdf-simpel">
                <h3 className="rsdf-simpel-h3">
                    آگهی های مشابه
                </h3>
            </div> 
            { FocusData?.length > 0?<div className="rsdf-targetrow">
            <div className='rsdf-row'>
                <div className='rstf-less' onClick={lastMyImage}></div>
                <div className="rsdf-row-box">
                {FocusDataLimit?FocusDataLimit.map((mp, i)=><CardRealState 
                addMarkinit={addMarkinit} lessmarkinit={lessmarkinit} auth={auth}
                FocusData={mp} realstatestartfocinit={realstatestartfocinit}></CardRealState>):null}
                </div>
                <div className='rstf-add' onClick={nextMyImage}></div>
            
            </div></div>:null}
            <div className="rstf-rowres">
                {FocusDataLimit?.length > 0?FocusData.map((mp, i)=><CardRealState 
                addMarkinit={addMarkinit} lessmarkinit={lessmarkinit} auth={auth}
                FocusData={mp} realstatestartfocinit={realstatestartfocinit}></CardRealState>):null}
                </div>
            </>:<Spinner/>}
            </div>
            </CloseComponent>
            <Footer/>
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