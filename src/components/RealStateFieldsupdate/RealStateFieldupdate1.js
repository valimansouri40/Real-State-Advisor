import React, { useEffect, useState } from "react";
import Button from '../UI/Button/Button';
import Map from '../UI/GoogleMaps/GoogleMaps';
import Select from "../UI/Select/Select";
import './RealStateFields.css';


const RealStateFieldupdate1=(props)=>{
        const {setnumpage,role ,numpage,OneData , setDataPostOne, changefilehandller,
             cityall,tab, areaall}=props;
        
        const [city, setcity]=useState(OneData.City);
        const [cityid, setcityid]=useState('');
        const [erea, seterea]= useState(OneData.Area);
        const [allerea, setallerea]= useState([]);
        // const [areadetail, setareadetail]=useState(OneData.AreaDetails);
        const [typeAdrress, settypeAdrress]=useState(OneData.Type);
        const [typestate, settypestate]= useState(OneData.TypeState);
        const [years, setyears]= useState(OneData.YearBuild);
        const [measure, setmesure]= useState(OneData.Measure);
        const [lease, setlease]= useState(OneData.Lease);
        const [mortgage, setmortgage]= useState(OneData.Mortgage);
        const [immediat, setimmediet]= useState(OneData.Immediatly);
        const [fullmortgage, setfullmortgage]= useState(OneData.FullMortgage);
        const [aggrement, setagrement]= useState(OneData.Aggrement);
        const [location, setlocation]=useState(OneData.Location);
        const [cityandareaid, setcityandareaid]= useState();
        const [esquirename, setesquiername]= useState(OneData.EsquierName)
        const [esquireph, setesquierph]= useState(OneData.EsquierPhoneNumber)
        const [esquirephtest, setesquierphts]= useState('');
        const rolear2= ['admin','employee', 'advisor']

        const rolear= ['admin','dealer']
        useEffect(()=>{
            changefilehandller(null, 'getallcity','')
        },[])
        useEffect(()=>{
            if(role){ if(!rolear2.includes(role.role)){
                 setesquiername(role.FristName + ' ' + `${role.LastName?role.LastName:''}`);
                 setesquierph(role.PhoneNumber)
             }}
        },[ role])

         const submitHandller=()=>{
            
           
            const data=tab === 'rahn'?{
                Tipic:tab,
                City:city,
                Area: erea,
                Type:typeAdrress,
                TypeState:typestate,
                YearBuild: years,
                Measure: measure,
                Lease: lease,
                Mortgage:mortgage,
                Immediatly: immediat,
                Aggrement: aggrement,
                Location: location,
                cityandareaid: cityandareaid ,
                EsquierName: esquirename,
                EsquierPhoneNumber: esquirephtest
            }:{
                Tipic:tab,
                City:city,
                Area: erea,
                Type:typeAdrress,
                TypeState:typestate,
                YearBuild: years,
                Measure: measure,
                Mortgage:mortgage,
                Immediatly: immediat,
                FullMortgage: fullmortgage,
                Aggrement: aggrement,
                Location: location,
                cityandareaid: cityandareaid ,
                EsquierName: esquirename,
                EsquierPhoneNumber: esquirephtest
            }
           
            setDataPostOne(data)
            setnumpage(2)
           
        }
        useEffect(()=>{
            setallerea(areaall)
        },[areaall])

        const setvaluehandller= (e)=>{
            if(role){
                if(e && e !== 'شهر' && rolear.includes(role.role)){
             const citid= cityall.find(er=>  er.name === e);
             setcity(e)

            changefilehandller(null, 'getallarea',`id=${citid._id}`)
            
    }else{
        seterea('')
        // const citid= cityall.find(er=>  er.name === role.City[e].name);
        //     changefilehandller(null, 'getallarea',`id=${citid._id}`)
        //     console.log('vali',citid)
        setcity('');
        setcityid('');

    }}      
        }

      const setareahandller=(e)=>{
          if(e && e !== 'منطقه'){
          
          const oneeria= areaall.find(rs=> rs.areaName === e);
         
          seterea(oneeria.areaName);
        //   setareadetail(oneeria)
        }else{
                seterea();
          }
      }
      const setesquierphhandller=(e)=>{
        
        setesquierph(e);
      
    }
    useEffect(()=>{
        if(new RegExp('^(\\0|0)?9\\d{9}$').test(esquireph)){
            setesquierphts(esquireph);
        }else{
            setesquierphts();
        }
    },[esquireph])
     
    return(
        <div className={numpage === 1?'leaseform': 'hidden'} >
                
                <div className='formbox'>
                    <div className='selectbox'>
                    <label className='label'>   شهر</label>
                <select className='select'   onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'  >
                       شهر
                    </option>
                    {cityid === '' ?<option selected>{OneData.City}
                     </option>:null}
                    {role?cityall && rolear.includes(role.role)?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):null:null}
            {role?!rolear.includes(role.role) && role.CitysAndAreas.length > 0?role.City.map((mp, i)=>(
                cityid === '' && mp.name === OneData.City? null:
                <option value={i} className='option'>
                {mp.name}</option>
            )):null:null}
        </select>
        </div>
        
        {role?rolear.includes(role.role) ?  <div  className='selectbox'>
                <label className='label'> منطقه</label>
           <select className='select' value={erea}  
           onChange={(e)=>setareahandller(e.target.value)}  disabled={ city !== ''?false:true} >
                    <option className='option'  >
                        منطقه
                    </option>
            {allerea?allerea.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            )):<option className='option' 
            >
                {erea}</option>}
</select>
 </div>:null:null}
{ role?!rolear.includes(role.role) && role.CitysAndAreas.length > 0? <div className='selectbox'>
                <label className='label'> منطقه</label>
           <select value={erea} className='select'  
           onChange={(e)=>setareahandller(e.target.value)}  disabled={cityid && city !== ''?false:true} >
                    <option className='option'  >
                        منطقه
                    </option>
                    {cityid === '' ?<option selected>{OneData.Area}
                     </option>:null}
             {role.CitysAndAreas.map(mp=>(
                mp.objid._id === cityid ?<option className='option'>
                    {mp.areaName}</option>:null
            ))}
</select>
 </div>:null:null}
   
  
 <Select val={typestate} setvaluehandller={settypestate}
                            array={['نوع ملک','آپارتمان','ویلایی','تجاری','صنعتی','باغ','مزروعی']}
                            >نوع ملک</Select>

                <div className='inpcls'><label className='label'>متراژ</label>
                 <input type='number' value={measure} className='inp' onChange={(e)=>setmesure(e.target.value)} /></div>
                <div className='inpcls'><label className='label'>
                     سال بنا</label> <input type='number' min='1' className='inp'
                    value={years}  onChange={(e)=>setyears(e.target.value)} /></div>
               <div className='inpcls'><label className='label'> 
               {tab === 'rahn'? 'رهن':'قیمت'}</label> <input type='number' value={mortgage} className='inp'
                 onChange={(e)=>setmortgage(e.target.value)} /></div>
               {tab === 'rahn'?<div className='inpcls'><label className='label'> اجاره</label> 
               <input type='number' value={lease} className='inp' onChange={(e)=>setlease(e.target.value)} /></div>:null}
               <div className='inpcls'><label className='label'> آدرس</label> 
               <input type='text' className="inp" value={typeAdrress} onChange={(e)=>settypeAdrress(e.target.value)}  /></div>
               {role?rolear2.includes(role.role)?<><div className='inpcls'><label className='label'> شماره مالک</label> 
               <input type='tel' className="inp" value={esquireph} onChange={(e)=>setesquierphhandller(e.target.value)}  /></div>
               <div className='inpcls'><label className='label'> نام مالک</label> 
               <input type='text' className="inp" value={esquirename} onChange={(e)=>setesquiername(e.target.value)}  /></div></>:null:null}
               <div className="btn-box">
               {tab === 'rahn'?
               
               <button className={fullmortgage?'btnui-ok':'btnui'} onClick={()=>setfullmortgage(e=>!e)} >رهن کامل</button>:null}
               {/* <Button val={aggrement} setvalue={()=>setagrement(true)} >قیمت توافقی</Button> */}
               <button className={aggrement?'btnui-ok':'btnui'} onClick={()=>setagrement(e=>!e)}>پیشنهاد ویژه سایت</button>
                {/* <Button val={immediat} setvalue={setimmediet} >فوری</Button> */}
               <button className={immediat?'btnui-ok':'btnui'} onClick={()=>setimmediet(e=>!e)}>فوری</button>
                </div>
                <button className='send1' onClick={submitHandller}>صفحه بعد</button>
                </div>
                <div  className='rstf-googelmapbox'>
                      <Map location={location} setlocation={setlocation}></Map>
                </div>
        </div>
    )
}


export default RealStateFieldupdate1;