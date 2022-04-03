import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './RealStatefulldata.css';
import * as action from '../../store/action/index';
import { useParams } from "react-router";
import Header from '../../components/Header/Header';
import Gallery from "../../components/Gallery/Gallery";
import Callender from "../../components/Callender/Callender";
import DataBox from "../../components/DataBox/DataBox";

const RealStatefulldata=(props)=>{
        const {REALSTATEGETONEINIT, OneData}= props;

        const [numimg, setnumimg]=useState(0);
        
        useEffect(()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        },[])
        const param = useParams().id;
        console.log(OneData)
        useEffect(()=>{
            REALSTATEGETONEINIT(param)
        },[REALSTATEGETONEINIT, param])

        let onedt= null;
        if(OneData){
            onedt= Object.entries(OneData);
            console.log(OneData)
        }
        
        const nextMyImage=()=>{

            if( numimg < OneData.Image.length - 1 ){
                    setnumimg(num=> num + 1)
            }else{
                setnumimg(0)
            }
            
        }
        console.log(numimg)
        const lastMyImage=()=>{
    
            if( 0 < numimg ){
                    setnumimg(num=> num - 1)
            }else{
                setnumimg(OneData.Image.length - 1)
            }
            
        }
        console.log(numimg)
    return(
        <section className='sec-rsdf'>
            <Header></Header>
            
             <div className='target-all'>
           { OneData?<div className="target-rsdf-one">
                
            <Gallery Image={OneData.Image}></Gallery>   
            <DataBox OneData={OneData}></DataBox>
               
            </div>:null}
            <div className='target-rsdf-two'>
            <Callender></Callender>   
                </div>
            </div> 
        </section>
    )
}

const MapStateToProps=state=>{

    return{
        OneData: state.realstate.OneData
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        REALSTATEGETONEINIT:(id)=> dispatch(action.REALSTATEGETONEINIT(id))
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(RealStatefulldata);