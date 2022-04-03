import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Fields2 from "../../components/RealStateFieldsupdate/RealStateFieldupdate2";
import RealStateFieldsForlease from "../../components/RealStateFieldsupdate/RealStateFieldupdate1";
import * as action from '../../store/action/index';
import { ShowAlert } from "../../store/utility/alert";


const RealStateUpdate=(props)=>{
        const {OneData, REALSTATEGETONEINIT, changefilehandller,
            REALSTATEPATCHINIT ,cityall, areaall} = props;

        const paramid= useParams().id;

        useEffect(()=>{
            REALSTATEGETONEINIT(paramid)
        },[REALSTATEGETONEINIT])
       
      const [tab, settab]= useState('rahn');
      const [numpage, setnumpage]= useState(1);
      const [DataPostOne ,setDataPostOne]= useState();
      const [DataPosttwo ,setDataPosttwo]= useState();

      useEffect(()=>{
        if(OneData){
            settab(OneData.Tab)
        }
      },[OneData])
     

      let errorarr= {Tipic:"تب",
        City:"شهر",
        Area: "منطقه",
        TypeState:"نوع ملک",
        YearBuild: "تعداد سال ساخت",
        Measure: "متراژ",
        Lease: "اجاره",
        Mortgage:"رهن",
        Location: "لوکیشن"}

        if(tab !== "rahn"){
            errorarr= {Tipic:"تب",
        City:"شهر",
        Area: "منطقه",
        TypeState:"نوع ملک",
        YearBuild: "تعداد سال ساخت",
        Measure: "متراژ",
        Mortgage:"قیمت",
        Location: "لوکیشن"}
        }

   
    const [DataPost, setDataPost]=useState();
    useEffect(()=>{
            setDataPost({Tab:tab,...DataPostOne, ...DataPosttwo});
    },[DataPostOne,DataPosttwo, tab])

    const SubmitDataHandller=()=>{

       const er= Object.entries(errorarr);
        console.log(er)
        let errorhandller = []

        const entiresData= Object.entries(DataPost);
       
        entiresData.map((mp, index)=>{
            if(mp[1] === '' || mp[1] === undefined && mp[1]){
                er.map(en=>{
                    if(en[0] === mp[0]){
                    return errorhandller.push(errorarr[mp[0]])
                }
                })
               
            }
        })
        console.log(entiresData,errorhandller)

      if(errorhandller.length === 0){ 
        REALSTATEPATCHINIT(DataPost, paramid);
        }else{
            ShowAlert(errorhandller, 'را وارد نکردید', 'fail')
        }
    }

    return(
        <section>

{ OneData? <div className='builder'>
            {/* <div className='tabbar'>
                <button className={tab !== 'sells'?'tab':'tab-activ'} onClick={()=>settab('sells')}> آگهی فروش</button>
                    <button className={tab !== 'rahn'?'tab':'tab-activ'} onClick={()=>settab('rahn')}> رهن و اجاره</button>
               </div> */}
                <RealStateFieldsForlease
                OneData={OneData}
                tab={tab}
                cityall={cityall} areaall={areaall}
                changefilehandller={changefilehandller}
                numpage={numpage} setnumpage={setnumpage} 
                setDataPostOne={setDataPostOne}/>
                    <Fields2 numpage={numpage} 
                    OneData={OneData}
                     tab={tab}
                    setnumpage={setnumpage}
                     setDataPosttwo={setDataPosttwo} SubmitDataHandller={SubmitDataHandller}/>
            </div>:null}
        </section>
    )
}

const MapStateToProps=state=>{

    return{
        OneData: state.realstate.OneData,
        cityall: state.realstate.cityall,
        areaall: state.realstate.areaall
    }
}
const MapDispatchToProps=dispatch=>{
    return{
        REALSTATEGETONEINIT:(id)=>dispatch(action.REALSTATEGETONEINIT(id)),
        changefilehandller:(data,path, query)=>dispatch(action.changefilehandller(data,path, query)),
        REALSTATEPATCHINIT:(data, id)=>dispatch(action.REALSTATEPATCHINIT(data, id))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(RealStateUpdate)