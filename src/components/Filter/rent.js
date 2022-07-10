import React,{useEffect, useState} from "react";

import Select from "../UI/Select/Select";

import Box from "../UI/Box/Box";
import { useHistory } from "react-router-dom";




const Rent=(props)=>{
    const {areaall,cityall,getallfilterinit,
        changefilehandller}=props;
    const history = useHistory();
//    const [room, setsomerom]= useState('')
  
   const [city, setcity]=useState('');
   const [area, setarea]= useState('');
    const [tipic, settipic]= useState('')
    const [extra, setextra]= useState(false);

//    const [lease, setlease]=useState('');
//    const [yaearbuild, setyearbuild]=useState('')
//        const [maesures, setmeasures]=useState('')
//        const [price, setprice]=useState('')
  
//    const [ps, setps]=useState([
//     {OfStorage:false, name:'انباری',dis:false},
//     {Parking:false, name:'پارکینگ',dis:false},
//     {Pasio:false, name:'پاسیو',dis:false},
//     {Pool:false, name:'استخر',dis:false}
//     ,{Security:false, name:'نگهبان',dis:false},
//     {Sona:false, name:'سونا'},
//     {Assansor:false, name:'آسانسور',dis:false}])

   const searchhandller=(e)=>{
       e.preventDefault()
       const data={
        Tipic:'rahn',
           City: city,
           Area: area,
           TypeState: tipic,
          
       }

       const obj= Object.entries(data);

       let st= '';
       obj.map((mp,i)=>{
           if(mp[0] === 'Measure' || mp[0] ===  'YearBuild' ||mp[0] === 'Mortgage'){
              if(mp[1]){
               st = st + mp[1]
           } 
           }else if(mp[1] !== '' && mp[1] !== false && mp[1]){
               st = st + `&${mp[0]}=${mp[1]}`
           }
       })

     
    //    window.location.search = ''
    window.location.hash = '#/search'
          
    let newurl = window.location.protocol + "//" + window.location.host + '/' +'#/search?'+ st;
    
    window.history.pushState({}, '', newurl)
 
  
   }
   useEffect(()=>{
       getallfilterinit('rh')
  },[])
   
   const setareahandller=(e)=>{
       
       if(e && e !== 'شهر'){
           const citid= cityall.find(er=>  er.name === e);
           setcity(e)
         
          changefilehandller(null, 'getallarea',`id=${citid._id}`)
  }else{
      setcity('')
      setarea('')
  }

   }

   const settipichandller=(e)=>{
       if(e !== 'نوع ملک'){
       settipic(e)}else{
           settipic('')
       }
   }


       let year=['همه'];

        
               for(let i=1401; 1370 < i;i--){
                   year.push(i)
               }
           

    //    const roomhandller=(e)=>{
    //        if(e !== 'همه'){
    //            setsomerom(e)
    //        }else{
    //            setsomerom('')
    //        }
    //    }
     

    //    const posibelhandllerr=(e)=>{
    //     console.log(e)
    //    let obj= [...ps];
    //    obj[e]={
    //        ...ps[e],
    //        dis: true
    //    }
       
    //    console.log(obj)
    //    setps(obj)
    //  }
    //    // const selectonehandller=(e)=>{
    //    //     set
    //    // }
    //    const changeextra=()=>{
    //        setextra(e=>!e)
    //    }
       
    //    const typestateinc= ['آپارتمان','ویلایی','تجاری']
    //    useEffect(()=>{
    //      if( !typestateinc.includes(tipic)){
    //          console.log('vhhhh')
    //          setsomerom('');
    //          setps([
    //              {OfStorage:false, name:'انباری',dis:false},
    //              {Parking:false, name:'پارکینگ',dis:false},
    //              {Pasio:false, name:'پاسیو',dis:false},
    //              {Pool:false, name:'استخر',dis:false}
    //              ,{Security:false, name:'نگهبان',dis:false},
    //              {Sona:false, name:'سونا'},
    //              {Assansor:false, name:'آسانسور',dis:false}])
    //      }
    //    },[tipic])
      
          

           const changeextraall=()=>{
               if(extra){
                  setextra(false) 
               }
           }

           const setareahl=(e)=>{
            if(e !== 'منطقه'){
                setarea(e)
            }else{
                setarea('')
            }
        }
   return(
       <div  onClick={()=>changeextraall()} class="tab-pane fade show active" id="pills-Buy" role="tabpanel" aria-labelledby="pills-Buy-tab">
       <div  class="rents">
               {/* <Select array={} setvaluehandller={}></Select> */}
               <div className='selectbox'>
                              <label className='label'>   شهر</label>
                              <input type="search" list="sellscity" className="select-search filter-box"
                            value={city}
                            name="sl1"
                            onChange={(e)=>setareahandller(e.target.value)} />
                            <datalist className='select' id="sellscity" value={city !==''?city: 'شهر'}   >
                            <option className='option'  >
                                    شهر
                                </option>
                        {cityall?cityall.map(mp=>(
                            <option className='option'>
                                {mp.name}</option>
                        )):null}
                    </datalist>
        </div>
       
        <div className='selectbox'>
                    <label className='label'> منطقه</label>
                    <input type="search" list="sellsarea" className="select-search filter-box"
                    value={area}
                    name="sl2"
                    onChange={(e)=>setareahl(e.target.value)}
                    disabled={areaall && city !== ''?false:true} />   
                    <datalist id="sellsarea" className='select' value={area !==''?area: 'منطقه'} disabled={areaall && city !== ''?false:true} 
                        >
                            
                                <option className='option'>
                                    منطقه
                                </option>
                        {areaall?areaall.map(mp=>(
                            <option className='option' 
                            >
                                {mp.areaName}</option>
                        )):null}
            
                </datalist></div>
              
              <Select
              val={tipic}
              selectRes={true}
               setvaluehandller={settipichandller}
               array={['نوع ملک','آپارتمان','ویلایی','تجاری','صنعتی','باغ','مزروعی']} >نوع ملک</Select>
{/* 
               <div className='extra'>
                   <button  className="extra-btn" onClick={changeextra}>امکانات اضافی</button>
               {filters ?<Box filter={filters} 
                yaearbuild={yaearbuild} extra={extra} setyearbuild={setyearbuild}
                maesures={maesures} setmeasures={setmeasures} 
                price={price} setprice={setprice} lease={lease} setlease={setlease}>
                 <div className='selectbox'>
                          <div className='selectbox-bx'>
                         {ps.map((mp, i)=><label>
                             {mp.name}
                             <input type='checkbox' disabled={!typestateinc.includes(tipic)?true:false} onChange={()=>posibelhandllerr(i)}
                              className='check-posibel' name='pos' /></label>)}
                      </div>
            </div>
               </Box>
                :null}
               </div>

                 <div className='selectbox'>
                               <label className='label'> رهن </label>
                       <select onChange={(e)=>setprice(e.target.value)} className='select'  
                        >
                           {filters?filters.Price?filters.Price.map((mp,i)=>(
                           <option value={mp.value} className='option'>
                                            {mp.text}</option>
                                )):null:null}
                              </select>
                                    </div>
                              
                  <div className='selectbox'>
                               <label className='label'> اجاره </label>
                       <select onChange={(e)=>setlease(e.target.value)} className='select'  >
                           {filters?filters.Lease?filters.Lease.map((mp)=>(
                           <option value={mp.value} className='option'>
                                            {mp.text}</option>
                                )):null:null}
                              </select>
                  </div>      
                  <div className='selectbox'>
                       <label className='label'> متراژ </label>
                         <select onChange={(e)=>setmeasures(e.target.value)} className='select'  
                            >
                        {filters?filters.Measure?filters.Measure.map((mp,i)=>(
                        <option value={mp.value} className='option'>
                                    {mp.text}</option>
                        )):null:null}
                              </select>
                    </div>
               <Select val={room} disabled={!typestateinc.includes(tipic)}
                  array={['همه','چهار خواب','سه خواب','دو خواب','یک خواب']} 
                setvaluehandller={roomhandller}>تعداد اتاق خواب</Select> */}
            <div className="extra">
           <button className="search-ok" onClick={searchhandller} type="submit" >جستجو</button>
           </div>
       </div>
   </div>
   )
}

export default Rent;