
import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Fields2 from "../../components/RealStateFields/RealStateField2";
import RealStateFields3 from "../../components/RealStateFields/RealStateField3";
import RealStateFieldsForlease from "../../components/RealStateFields/RealStateFieldsForlase";
import * as action from '../../store/action/index';
import { ShowAlert } from "../../store/utility/alert";
import './RealStateBuilder.css';

// صفحه ساخت ملک در پنل مدیریت

const RealStateBuilder=(props)=>{
      const {RealStatePostData,changefilehandller, loading,
         advisor, getadvisorinit , role ,cityall, areaall}=props;
      const [tab, settab]= useState('rahn');
      const [numpage, setnumpage]= useState(1);
      const [DataPostOne ,setDataPostOne]= useState();
      const [DataPosttwo ,setDataPosttwo]= useState();
      const [DataPostthree ,setDataPostthree]= useState();

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
        let responsive = '' ;
            
        switch(numpage){
            case 1 : responsive= 'rstb-target-1';
            break;
            case 2 : responsive = 'rstb-target-2';
            break;
            default: responsive = 'rstb-target-3';
            break;
        }
   
    const [DataPost, setDataPost]=useState();
        useEffect(()=>{
            if(numpage === 3){
               
                getadvisorinit(DataPost.City, DataPost.Area) 
            }
        },[numpage])

        const rolear= ['employee', 'admin']

       
       
    useEffect(()=>{
        if(role){
            setDataPost({Tab:tab,...DataPostOne, ...DataPosttwo });
}    },[DataPostOne,DataPosttwo, tab])

    const SubmitDataHandller=()=>{    
           
        switch(role.role){
            case 'employee':
                DataPost.AdvisorId = DataPostthree
                break
            case 'admin':
                DataPost.AdvisorId = DataPostthree;
                break;
            case  'dealer':
                DataPost.AdvisorId = 1234;
            case 'advisor':
                DataPost.AdvisorId = role._id
                break
            default:DataPost.AdvisorId = ''
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
        
          RealStatePostData(DataPost);
        }else{
            ShowAlert(errorhandller, 'را وارد نکردید', 'fail')
        }
    }
    const lmrole=['advisor','dealer']
    return(
        <section className={`rstb-target ${responsive}` }>
              <Link className="rstb-btn"
                to={'/'}>بازگشت به صفحه اصلی
               </Link>
            <div className='builder'>
                <div className='tabbar'>
                <button className={tab !== 'sells'?'tab':'tab-activ'} onClick={()=>settab('sells')}> آگهی فروش</button>
                    <button className={tab !== 'rahn'?'tab':'tab-activ'} onClick={()=>settab('rahn')}> رهن و اجاره</button>
                </div>
                <RealStateFieldsForlease
                role={role}
                tab={tab}
                cityall={cityall} areaall={areaall}
                changefilehandller={changefilehandller}
                numpage={numpage} setnumpage={setnumpage} 
                setDataPostOne={setDataPostOne}/>
                    <Fields2 numpage={numpage} loading={loading}
                    role={role}
                     tab={tab}
                    setnumpage={setnumpage}
                     setDataPosttwo={setDataPosttwo} SubmitDataHandller={SubmitDataHandller}/>
                    { role?rolear.includes(role.role)?<RealStateFields3 
                      role={role} loading={loading}
                     tab={tab}
                     numpage={numpage}
                     advisor={advisor}
                    setnumpage={setnumpage}
                     setDataPostthree={setDataPostthree} SubmitDataHandller={SubmitDataHandller}
                     />:null:null}
            </div>
        </section>
    )
}

const MapStateToProps=state=>{

    return{
        cityall: state.realstate.cityall,
        areaall: state.realstate.areaall,
        loading: state.realstate.loading,
        role: state.auth.data,
        advisor: state.auth.advisor
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        RealStatePostData: (data)=> dispatch(action.REALSTATEPOSTINIT(data)),
        changefilehandller:(data,path, query)=>dispatch(action.changefilehandller(data,path, query)),
        getadvisorinit : (cityid, area)=> dispatch(action.getadvisorinit(cityid, area) )
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(RealStateBuilder);