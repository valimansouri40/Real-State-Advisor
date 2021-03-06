import React, { useEffect, useState } from "react";
import Map from '../UI/GoogleMaps/GoogleMaps';
import Select from "../UI/Select/Select";
import './RealStateFields.css';


const RealStateFieldsForlease=(props)=>{
        const {setnumpage ,numpage, role , setDataPostOne, changefilehandller, cityall,tab, areaall}=props;
        const [city, setcity]=useState('');
        const [cityid, setcityid]=useState('');
        const [erea, seterea]= useState('');
        const [allerea, setallerea]= useState([]);
        const [areadetail, setareadetail]=useState();
        const [typeAdrress, settypeAdrress]=useState('');
        const [typestate, settypestate]= useState('');
        const [years, setyears]= useState(1);
        const [measure, setmesure]= useState('');
        const [lease, setlease]= useState('');
        const [mortgage, setmortgage]= useState('');
        const [immediat, setimmediet]= useState(false);
        const [fullmortgage, setfullmortgage]= useState(false);
        const [aggrement, setagrement]= useState(false);
        const [location, setlocation]=useState();
        const [cityandareaid, setcityandareaid]= useState();
        const [esquirename, setesquiername]= useState('')
        const [esquireph, setesquierph]= useState('')
        const [esquirephtest, setesquierphts]= useState('')

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
       },[role])
        useEffect(()=>{
                setmortgage('');
                setlease('')
        },[tab])
        const submitHandller=()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
            setnumpage(2)
           
            const data=tab === 'rahn'?{
                Tipic:tab,
                City:city,
                Area: erea,
                AreaDetails:areadetail._id,
                Type:typeAdrress,
                TypeState:typestate,
                YearBuild: years,
                Measure: measure,
                Lease: Number(lease.replace(/,/g, "")),
                Mortgage:Number(mortgage.replace(/,/g, "")),
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
                AreaDetails:areadetail._id,
                Type:typeAdrress,
                TypeState:typestate,
                YearBuild: years,
                Measure: measure,
                Mortgage:Number(mortgage.replace(/,/g, "")),
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
                if(e && e !== '??????' && rolear.includes(role.role)){
             const citid= cityall.find(er=>  er.name === e);
             setcity(e)
            
            changefilehandller(null, 'getallarea',`id=${citid.id}`)
            
    }else{
        const citid= cityall.find(er=>  er.name === role.City[e].name);
            changefilehandller(null, 'getallarea',`id=${citid.id}`)
        setcity(role.City[e].name);
        setcityid(role.City[e]._id);

    }}
            
        }

      const setareahandller=(e)=>{
          if(e && e !== '??????????'){
          
          const oneeria= areaall.find(rs=> rs.areaName === e);
         
         const strid = JSON.stringify(oneeria.CityId) + JSON.stringify(oneeria.Id) + '1000' * 1;
         setcityandareaid(strid) 
          seterea(oneeria.areaName);
          setareadetail(oneeria)
          
          setlocation({lat:oneeria.latitude, lng:oneeria.longtitude })
        }else{
                seterea();
          }

      }
      const setesquierphhandller=(e)=>{
        
          setesquierph(e);
          if(new RegExp('^(\\0|0)?9\\d{9}$').test(e)){
              setesquierphts(e);
          }else{
              setesquierphts();
          }
      }
      

      const addcommaToNumber =(e, setval)=>{
        const pattern = ['1','2','3','4','5','6','7','8','9','0'];
        // console.log(e.replace(/(\d{3})/g, ",$1"))
        
         let addcomma ='';
            for(let i = 0; i<= e.length - 1; i++){
                   
                    for(let j = 0; j<= pattern.length - 1; j++) {
                    if(e[i] === pattern[j]){
                       addcomma =  addcomma + e[i]
                    }
                }
                    
            }
         
             addcomma = addcomma.split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
            //  console.log(addcomma.split( /(?=(?:\d{3})+(?:\.|$))/g ))
            setval( addcomma);
    
      }
    return(
        <div className={numpage === 1?'leaseform': 'hidden'} >
               
                <div className='formbox'>
                    <div className='selectbox'>
                    <label className='label'>   ??????</label>
                <select className='select responesive-select' onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'  >
                        ??????
                    </option>
            {role?cityall && rolear.includes(role.role)?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):null:null}
            {role?!rolear.includes(role.role) && role.CitysAndAreas.length > 0?role.City.map((mp, i)=>(
                <option value={i} className='option'>
                    {mp.name}</option>
            )):null:null}
        </select>
        </div>
        
     {role?rolear.includes(role.role) && allerea?  <div className='selectbox'>
                <label className='label'> ??????????</label>
           <select className='select responesive-select' disabled={allerea && city !== ''?false:true} 
           onChange={(e)=>setareahandller(e.target.value)} >
                    <option className='option'  >
                        ??????????
                    </option>
            {allerea.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            ))}
</select>
 </div>:null:null}
{ role?!rolear.includes(role.role) && role.CitysAndAreas.length > 0? <div className='selectbox'>
                <label className='label'> ??????????</label>
           <select className='select responesive-select' disabled={cityid && city !== ''?false:true} 
           onChange={(e)=>setareahandller(e.target.value)} >
                    <option className='option'  >
                        ??????????
                    </option>
             {role.CitysAndAreas.map(mp=>(
                mp.objid._id === cityid ?<option className='option'>
                    {mp.areaName}</option>:null
            ))}
</select>
 </div>:null:null}
   
            <Select selectRes={true} val={typestate} setvaluehandller={settypestate}
                            array={['?????? ??????','????????????????','????????????','??????????','??????????','??????','????????????']}
                            >?????? ??????</Select>

                <div className='inpcls'><label className='label'>??????????</label>
                 <input type='number' className='inp inp-res inp-one' onChange={(e)=>setmesure(e.target.value)} /></div>
               
                <div className='inpcls'><label className='label'>
                     ?????? ??????</label> <input type='number' min='1' className='inp inp-res inp-one'
                      onChange={(e)=>setyears(e.target.value)} /></div>

               <div className='inpcls'><label className='label'> 
              
               {tab === 'rahn'? '??????':'????????'}</label> <input id="price" type='text' value={mortgage} className='inp inp-res inp-one'
                 onChange={(e)=>addcommaToNumber(e.target.value, setmortgage)} /></div>
              
               {tab === 'rahn'?<div className='inpcls'><label className='label'> ??????????</label> 
               <input type='text' value={lease} className='inp inp-res inp-one' onChange={(e)=>addcommaToNumber(e.target.value, setlease)} /></div>:null}
              
             <div className='inpcls'><label className='label'> ????????</label> 
               <input type='text' className='inp inp-res inp-one' onChange={(e)=>settypeAdrress(e.target.value)}  /></div>
               
               {role?rolear2.includes(role.role)?<>
            <div className='inpcls'><label className='label'> ?????????? ????????</label> 
               <input type='tel' className='inp inp-res inp-one' name='tell' value={esquireph} onChange={(e)=>setesquierphhandller(e.target.value)}  /></div>
            <div className='inpcls'><label className='label'> ?????? ????????</label> 
               <input type='text' className='inp inp-res inp-one' name='esquierName' onChange={(e)=>setesquiername(e.target.value)}  /></div></>:null:null}
              
              
               
            <div className="btn-box">
               {tab === 'rahn'?
               <button className={fullmortgage?'btnui-ok':'btnui'} 
               onClick={()=>setfullmortgage(e=>!e)} >?????? ????????</button>
               :null}
               <button className={immediat?'btnui-ok':'btnui'} onClick={()=>setimmediet(e=>!e)}>????????</button>
               <button className={aggrement?'btnui-ok special':'btnui special'} onClick={()=>setagrement(e=>!e)}>?????????????? ???????? ????????</button>
              
               </div>
                <button className='send1' onClick={submitHandller}>???????? ??????</button>
              
                </div>
                <div  className='rstf-googelmapbox'>
                      <Map location={location} setlocation={setlocation}></Map>
                </div>
        </div>
    )
}

export default RealStateFieldsForlease;