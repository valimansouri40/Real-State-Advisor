import React,{useEffect, useState} from "react";

import Select from "../UI/Select/Select";
import close from '../../assets/icons/icons8-close-50.png';
import Box from "../UI/Box/Box";


const Seles=React.memo((props)=>{
    const {areaall,cityall,filters,getallfilterinit,
         changefilehandller, REALSTATEGETALLINIT}=props;
    
    const [room, setsomerom]= useState('')
    const [city, setcity]=useState('');
    const [area, setarea]= useState('');
     const [tipic, settipic]= useState('')
     const [extra, setextra]= useState(false);
    const [yaearbuild, setyearbuild]=useState('')
        const [maesures, setmeasures]=useState('')
        const [price, setprice]=useState('')
    const [ps, setps]=useState([
    {OfStorage:false, name:'انباری',dis:false},
    {Parking:false, name:'پارکینگ',dis:false},
    {Pasio:false, name:'پاسیو',dis:false},
    {Pool:false, name:'استخر',dis:false}
    ,{Security:false, name:'نگهبان',dis:false},
    {Sona:false, name:'سونا'},
    {Assansor:false, name:'آسانسور',dis:false}])

    const searchhandller=(e)=>{
        e.preventDefault()
        const data={
            Tipic:'sells',
            City: city,
            Area:area,
            SomeRoom: room,
            TypeState: tipic,
            Mortgage: price,
            YearBuild: yaearbuild,
            Measure: maesures,
            Parking: ps[1].dis,
            OfStorage: ps[0].dis,
            Pasio: ps[2].dis,
            Pool: ps[3].dis,
            Security: ps[4].dis,
            Sona: ps[5].dis,
            Assansor: ps[6].dis
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

        console.log(st)
         REALSTATEGETALLINIT(1 ,st);
    }
    useEffect(()=>{
        getallfilterinit('sell')
   },[])
    
    const setareahandller=(e)=>{
        
        if(e && e !== 'شهر'){
            const citid= cityall.find(er=>  er.name === e);
            setcity(e)
          
           changefilehandller(null, 'getallarea',`id=${citid._id}`)
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
            

        const roomhandller=(e)=>{
            if(e !== 'همه'){
                setsomerom(e)
            }else{
                setsomerom('')
            }
        }

        const changeextra=()=>{
            setextra(e=>!e)
        }
        
      const posibelhandllerr=(e)=>{
        let obj= [...ps];
        obj[e]={
            ...ps[e],
            dis: true
        }
        setps(obj)
      }

    return(
        <div class="tab-pane fade show active" id="pills-Buy" role="tabpanel" aria-labelledby="pills-Buy-tab">
        <div  class="kharid">
                {/* <Select array={} setvaluehandller={}></Select> */}
                <div className='selectbox'>
                              <label className='label'>   شهر</label>
                <select className='select' onChange={(e)=>setareahandller(e.target.value)}  >
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
           <select className='select' disabled={areaall && city !== ''?false:true} 
           onChange={(e)=>setarea(e.target.value)} >
                    <option className='option'>
                        منطقه
                    </option>
            {areaall?areaall.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            )):null}
            
</select></div>
               
               <Select
                setvaluehandller={settipichandller}
                array={['نوع ملک','آپارتمان','ویلایی','تجاری','صنعتی','باغ','مزروعی']} >نوع ملک</Select>

                <div className='extra'>
                    <button onClick={changeextra}>امکانات بیشتر</button>
                {filters ?<Box filter={filters} 
                 yaearbuild={yaearbuild} extra={extra} setyearbuild={setyearbuild}
                 maesures={maesures} setmeasures={setmeasures} 
                 price={price} setprice={setprice}/>:null}
                </div>
                { tipic !== 'باغ' && tipic !== 'مزروعی' && tipic!== 'صنعتی'?<>
                
                <Select array={['همه','چهار خواب','سه خواب','دو خواب','یک خواب']} 
                setvaluehandller={roomhandller}>تعداد اتاق خواب</Select></>:null}
                
              { tipic !== 'باغ' && tipic !== 'مزروعی' && tipic!== 'صنعتی'?<div className='selectbox'>
                         
                            {ps.map((mp, i)=><label>
                                {mp.name}
                                <input type='checkbox' onChange={()=>posibelhandllerr(i)}
                                 className='check-posibel' name='pos' /></label>)}
                         </div>:null}
        

            <button onClick={searchhandller} type="submit" >جستجو
            </button>
        </div>
    </div>
    )
})

export default Seles;



// <div>
//                     <button onClick={()=>sethigh(e=>!e)} className='btn-price'>{gteprice.toLocaleString() + " " + 'قیمت پایین تر از'}</button>
//                    { high?<div className='range-box'>
//                             <input onChange={(e)=>setgte(e.target.value)}
//                              step='10000000'
//                             type='range' min='10000000' max='10000000000' />
//                     </div>:null}
//                 </div>

//                 <div>
//                     <button  onClick={()=>setlow(e=>!e)} className='btn-price'>{lteprice + " " + 'قیمت بالاتر از'}</button>
//                    { low?<div className='range-box'>
//                             <input onChange={(e)=>setlte(e.target.value)} type='range'
//                             step='10000000'
//                             min='10000000' max='10000000000'
//                             defaultValue='10000000000' />
//                     </div>:null}
//                 </div>
//                 <div>
//                     <button onClick={()=>sethighmeter(e=>!e)} className='btn-price'>{gtemeters + " " + 'متراژ کوچیک از'}</button>
//                    { highmeter?<div className='range-box'>
//                             <input onChange={(e)=>setgtemeter(e.target.value)}
//                              step='10'
//                             type='range' min='40' max='1000' defaultValue='40'/>
//                     </div>:null}
//                 </div>

//                 <div>
//                     <button  onClick={()=>setlowmeter(e=>!e)} className='btn-price'>{ltemeters + " " + 'متراژ بزرگ تر از'}</button>
//                    { lowmeter?<div className='range-box'>
//                             <input onChange={(e)=>setltemeter(e.target.value)} type='range'
//                             step='10'
//                             defaultValue= '40'
//                             min='40' max='1000' />
//                     </div>:null}
//                 </div>

// &Area=${area}
    // 
    //&Mortgage[gte]=${gteprice} &Mortgage[lte]=${lteprice}&Measure[gte]=${gtemeters}&
    // Measure[lte]=${ltemeters}Tipic=sells&YearBuild[lte]=${age}&Sona=${ps[5].dis}
    // &Parking=${ps[1].dis}
    // &Pasio=${ps[2].dis}&Pool=${ps[3].dis}&Security=${ps[4].dis}
    // &Assansor=${ps[6].dis}&OfStorage=${ps[0].dis}