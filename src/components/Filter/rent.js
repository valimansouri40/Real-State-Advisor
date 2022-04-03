import React,{useEffect, useState} from "react";
import './Filter.css';
import Select from "../UI/Select/Select";
import close from '../../assets/icons/icons8-close-50.png';
import Box from "../UI/Box/Box";
import Radio from "../UI/Radio/Radio";



const Rent=(props)=>{
    const {areaall,cityall,filters,getallfilterinit,
        changefilehandller, REALSTATEGETALLINIT}=props;
   
   const [room, setsomerom]= useState('')
   const [posibel, setposibel]=useState(false)
   const [city, setcity]=useState('');
   const [area, setarea]= useState('');
    const [tipic, settipic]= useState('')
    const [extra, setextra]= useState(false);

   const [lease, setlease]=useState('');
   const [yaearbuild, setyearbuild]=useState('')
       const [maesures, setmeasures]=useState('')
       const [price, setprice]=useState('')
   const fl=['باغ','مزروعی','صنعتی']
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
        Tipic:'rahn',
           City: city,
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
       
       const strquery= `City=${city}&SomeRoom=${''}&
       TypeState=${''}
       `
        REALSTATEGETALLINIT(1 ,st);

        //console.log(gteprice)
   }
   useEffect(()=>{
       getallfilterinit('rh')
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
       let bn=[]
       const bolhandller=(id,r)=>{
               console.log(id, r)
           if(r === 'del'){
               const ok2= [...ps];
               ok2[id]={
                   ...ps[id],
                   dis:false
               }
               setps(ok2)
           }else if(r === 'ad'){
              
               const ok= [...ps];
               ok[id]={
                   ...ps[id],
                   dis:!ps[id].dis
               }
               setps(ok)
               
           }
       }

       const posibelhandllerr=(e)=>{
        console.log(e)
       let obj= [...ps];
       obj[e]={
           ...ps[e],
           dis: true
       }
       
       console.log(obj)
       setps(obj)
     }
       // const selectonehandller=(e)=>{
       //     set
       // }
       const changeextra=()=>{
           setextra(e=>!e)
       }
       
     
      
           console.log(filters)
   return(
       <div class="tab-pane fade show active" id="pills-Buy" role="tabpanel" aria-labelledby="pills-Buy-tab">
       <div action="" class="kharid">
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
                   <button onClick={changeextra}>امکانات اضافی</button>
               {filters ?<Box filter={filters} 
                yaearbuild={yaearbuild} extra={extra} setyearbuild={setyearbuild}
                maesures={maesures} setmeasures={setmeasures} 
                price={price} setprice={setprice} lease={lease} setlease={setlease}/>
               
                :null}
               </div>
               { tipic !== 'باغ' && tipic !== 'مزروعی' && tipic!== 'صنعتی'?<>
               
               <Select array={['همه','چهار خواب','سه خواب','دو خواب','یک خواب']} 
               setvaluehandller={roomhandller}>تعداد اتاق خواب</Select></>:null}
               
             { tipic !== 'باغ' && tipic !== 'مزروعی' && tipic!== 'صنعتی'?<div className='selectbox'>
                        {/* <div style={{width:'10rem'}} onClick={()=>setposibel(e=>!e)} > 
                        <span className='spn-label'>امکانات
                        {ps.map((mp, id)=>(mp.dis?<div>{mp.name}
                         <img src={close} width='20px' height='20px' onClick={()=>bolhandller(id,'del')} /></div>:null)) }
                         </span>
                        </div> */}
                       {/* { posibel?<div className='spn-box'>
                            {ps.map((mi,id)=>(
                                <span onClick={()=>bolhandller(id,'ad')} 
                                className={mi.dis?'valid-spn-option':'spn-option'}>
                                    {mi.name}
                                </span>
                            ))}
                        </div>:null} */}
                          { tipic !== 'باغ' && tipic !== 'مزروعی' && tipic!== 'صنعتی'?<div className='selectbox'>
                         
                         {ps.map((mp, i)=><label>
                             {mp.name}
                             <input type='checkbox' onChange={()=>posibelhandllerr(i)}
                              className='check-posibel' name='pos' /></label>)}
                      </div>:null}
       </div>:null}

           <button onClick={searchhandller} type="submit" >جستجو<i class="fad fa-search"></i></button>
       </div>
   </div>
   )
}

export default Rent;