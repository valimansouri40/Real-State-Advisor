import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Fields2 from "../../components/RealStateFieldsupdate/RealStateFieldupdate2";
import RealStateFieldsForlease from "../../components/RealStateFieldsupdate/RealStateFieldupdate1";
import * as action from '../../store/action/index';
import { ShowAlert } from "../../store/utility/alert";
import RealStateFieldupdate3 from "../../components/RealStateFieldsupdate/RealStateFieldupdate3";
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";

// صفحه آپدیت ملک در پنل مدیریت

const RealStateUpdate=(props)=>{
        const {OneData, REALSTATEGETONEINIT, changefilehandller,
            REALSTATEPATCHINIT ,cityall, getadvisorinit ,advisor, role,areaall} = props;
            
        const paramid= useParams().id;

        useEffect(()=>{
            REALSTATEGETONEINIT(paramid)
        },[REALSTATEGETONEINIT])
        const rolear= ['employee', 'admin']
      const [tab, settab]= useState('rahn');
      const [numpage, setnumpage]= useState(1);
      const [DataPostOne ,setDataPostOne]= useState();
      const [DataPosttwo ,setDataPosttwo]= useState();
      const [DataPostthree ,setDataPostthree]= useState();
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
      Location: "لوکیشن",
      AdvisorId: "مشاور املاک",
      EsquierName: "نام ملک",
      EsquierPhoneNumber: "شماره مالک"
  }
      if(tab !== "rahn"){
          errorarr= {Tipic:"تب",
      City:"شهر",
      Area: "منطقه",
      TypeState:"نوع ملک",
      YearBuild: "تعداد سال ساخت",
      Measure: "متراژ",
      Mortgage:"قیمت",
      Location: "لوکیشن",
      AdvisorId: "مشاور املاک",
      EsquierName: "نام ملک",
      EsquierPhoneNumber: "شماره مالک"}
      }

   
    const [DataPost, setDataPost]=useState();
    useEffect(()=>{
            setDataPost({Tab:tab,...DataPostOne, ...DataPosttwo});
    },[DataPostOne,DataPosttwo, tab])
    useEffect(()=>{
        if(numpage === 3){
           
            getadvisorinit(DataPost.City, DataPost.Area) 
        }
    },[numpage])
    const SubmitDataHandller=()=>{
        switch(role.role){
            case 'employee':
                DataPost.AdvisorId = DataPostthree?DataPostthree:OneData.AdvisorId
                break
            case 'admin':
                DataPost.AdvisorId = DataPostthree?DataPostthree:OneData.AdvisorId;
                break;
            case  'dealer':
                DataPost.AdvisorId = DataPostthree?DataPostthree:1234;
            case 'advisor':
                DataPostthree.AdvisorId = role._id
                break
        }
        DataPost.RegistrarId = role._id;

        
       const er= Object.entries(errorarr);
       
       let errorhandller = []

       const entiresData= Object.entries(DataPost);

        entiresData.map((mp, index)=>{
            if(mp[1] === '' || mp[1] === undefined ){
              
                er.map(en=>{
                    
                    if(en[0] === mp[0]){
                        errorhandller.push(errorarr[mp[0]])
                    }
                  
                })}else if(mp[0] === 'Image'){
                    if(mp[1].length === 0 ){
                        errorhandller.push('عکس')
                    }
                }
        })
        
      if(errorhandller.length === 0){ 
          REALSTATEPATCHINIT(DataPost, paramid);
        }else{
            ShowAlert(errorhandller, 'را وارد نکردید', 'fail')
        }
    }

    return(
        <section className='changerole-target'>
                <AdminPannelNav/>
{ OneData? <div className='builder'>
            
                <RealStateFieldsForlease
                OneData={OneData}
               role={role}
                tab={tab}
                cityall={cityall} areaall={areaall}
                changefilehandller={changefilehandller}
                numpage={numpage} setnumpage={setnumpage} 
                setDataPostOne={setDataPostOne}/>
                    <Fields2 numpage={numpage} 
                    OneData={OneData}
                     tab={tab}
                     role={role}
                    setnumpage={setnumpage}
                     setDataPosttwo={setDataPosttwo} SubmitDataHandller={SubmitDataHandller}/>
                     { role?rolear.includes(role.role)?<RealStateFieldupdate3 
                      role={role}
                      OneData={OneData}
                     tab={tab} getadvisorinit={getadvisorinit}
                     numpage={numpage}
                     advisor={advisor}
                    setnumpage={setnumpage}
                     setDataPostthree={setDataPostthree} SubmitDataHandller={SubmitDataHandller}
                     />:null:null}
            </div>:null}
        </section>
    )
}

const MapStateToProps=state=>{

    return{
        OneData: state.realstate.OneData,
        cityall: state.realstate.cityall,
        areaall: state.realstate.areaall,
        role: state.auth.data,
        advisor: state.auth.advisor
    }
}
const MapDispatchToProps=dispatch=>{
    return{
        REALSTATEGETONEINIT:(id)=>dispatch(action.REALSTATEGETONEINIT(id)),
        changefilehandller:(data,path, query)=>dispatch(action.changefilehandller(data,path, query)),
        REALSTATEPATCHINIT:(data, id)=>dispatch(action.REALSTATEPATCHINIT(data, id)),
        getadvisorinit : (cityid, area)=> dispatch(action.getadvisorinit(cityid, area) )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(RealStateUpdate)