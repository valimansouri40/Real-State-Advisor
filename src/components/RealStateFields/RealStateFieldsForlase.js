import React, { useEffect, useState } from "react";
import Button from '../UI/Button/Button';
import Map from '../UI/GoogleMaps/GoogleMaps';
import Select from "../UI/Select/Select";
import './RealStateFields.css';


const RealStateFieldsForlease=(props)=>{
        const {setnumpage ,numpage , setDataPostOne, changefilehandller, cityall,tab, areaall}=props;
        const [city, setcity]=useState('');
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

        useEffect(()=>{
            changefilehandller(null, 'getallcity','')
        },[])
       
        console.log(tab)
        const submitHandller=()=>{
            console.log('vali')
            const data=tab === 'rahn'?{
                Tipic:tab,
                City:city,
                Area: erea,
                AreaDetails:areadetail,
                Type:typeAdrress,
                TypeState:typestate,
                YearBuild: years,
                Measure: measure,
                Lease: lease,
                Mortgage:mortgage,
                Immediatly: immediat,
                Aggrement: aggrement,
                Location: location
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
                Location: location
            }
            setDataPostOne(data)
            setnumpage(2)
            console.log(data);

            
        }
        useEffect(()=>{
            setallerea(areaall)
        },[areaall])

        const setvaluehandller= (e)=>{
            if(e && e !== 'شهر'){
             const citid= cityall.find(er=>  er.name === e);
             setcity(e)
            console.log(citid._id,e)
            changefilehandller(null, 'getallarea',`id=${citid._id}`)
            console.log(areaall)
         //   const filterErea= []
        //     if(filterErea.length > 0){
        //     setallerea(filterErea)
        // }else{
        //     setallerea(null);
        //     seterea()
        // }
    }
            
        }

      const setareahandller=(e)=>{
          if(e && e !== 'منطقه'){
          
          const oneeria= areaall.find(rs=> rs.areaName === e);
         
          seterea(oneeria.areaName);
          setareadetail(oneeria)
        }else{
                seterea();
          }

      }
      console.log(numpage)
        console.log('daugududy')
    return(
        <div className={numpage === 1?'leaseform': 'hidden'} >
                <div style={{width:'40rem',height:'40rem'}} className='googelmapbox'>
                      <Map location={location} setlocation={setlocation}></Map>
                </div>
                <div className='formbox'>
                    <div className='selectbox'>
                    <label className='label'>   شهر</label>
                <select className='select' onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'  >
                        شهر
                    </option>
            {cityall?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):null}
        </select>
        </div>
        
       <div className='selectbox'>
                <label className='label'> منطقه</label>
           <select className='select' disabled={allerea && city !== ''?false:true} 
           onChange={(e)=>setareahandller(e.target.value)} >
                    <option className='option'  >
                        منطقه
                    </option>
            {allerea?allerea.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            )):null}
            
</select>
 </div>
   {/*              <div className='selectbox'>
                <label className='label'> نوع کاربری</label>
           <select className='select'  onChange={(e)=>settype(e.target.value)} >
                    
           <option className='option'>  اداری</option>
           <option className='option'> تجاری </option>
           <option className='option'> مسکونی </option>
            
</select></div> */}
<Select val={typestate} setvaluehandller={settypestate}
                array={['نوع ملک','آپارتمان','ویلایی','تجاری','صنعتی','باغ','مزروعی']} >نوع ملک</Select>
{/* 
<div className='selectbox'>
                <label className='label'> نوع کاربری</label>
           <select className='select'  onChange={(e)=>settypestate(e.target.value)} >
              {type=== 'اداری'? <>
              <option className='option'> </option>
         <option className='option'>  دفتر</option>
           <option className='option'> شرکت </option></>:null}  

            {type=== 'تجاری'? <>
            <option className='option'>  </option>
         <option className='option'>  مغازه </option>
           <option className='option'> پاساژ </option></>:null}    

            {type=== 'مسکونی'? <>
            <option className='option'> </option>
         <option className='option'>  آپارتمان</option>
           <option className='option'> ویلا </option>
           </>:null}       
</select></div> */}
                <div className='inpcls'><label className='label'>متراژ</label>
                 <input type='number' className='inp' onChange={(e)=>setmesure(e.target.value)} /></div>
                <div className='inpcls'><label className='label'>
                     سال بنا</label> <input type='number' min='1' className='inp'
                      onChange={(e)=>setyears(e.target.value)} /></div>
               <div className='inpcls'><label className='label'> 
               {tab === 'rahn'? 'رهن':'قیمت'}</label> <input type='number' className='inp'
                 onChange={(e)=>setmortgage(e.target.value)} /></div>
               {tab === 'rahn'?<div className='inpcls'><label className='label'> اجاره</label> 
               <input type='number' className='inp' onChange={(e)=>setlease(e.target.value)} /></div>:null}
               <div className='inpcls'><label className='label'> آدرس</label> 
               <input type='text' onChange={(e)=>settypeAdrress(e.target.value)}  /></div>
               {tab === 'rahn'?
               <button className={fullmortgage?'btnui-ok':'btnui'} onClick={()=>setfullmortgage(e=>!e)} >رهن کامل</button>
               :null}
                <button className={aggrement?'btnui-ok':'btnui'} onClick={()=>setagrement(e=>!e)}>قیمت توافقی</button>
                {/* <Button val={immediat} setvalue={setimmediet} >فوری</Button> */}
               <button className={immediat?'btnui-ok':'btnui'} onClick={()=>setimmediet(e=>!e)}>فوری</button>
                
                <button className='send' onClick={submitHandller}>صفحه بعد</button>
              {/* { erea?<div> 
                <p className='pragraf'>   قیمت هر متر : <span> {erea.ReginonalPrice} </span></p>
                <p className='pragraf'> راه های دسترسی  : <span>{erea.subwayAvailability} </span> </p>
                <p className='pragraf'>   مردم  : <span> {erea.humanTissue} </span></p>
              <p className='pragraf'> نوع بافت : <span> {erea.landUse}</span> </p>
               </div>:null} */}
                </div>
        </div>
    )
}


export default RealStateFieldsForlease;