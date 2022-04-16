import React, { useState } from "react";
import './Callender.css';
import { toPersian } from "./persiannumber";


const Callender=(props)=>{
        const {appopostinit,auth ,OneData}=props;

        

    let date = new Date();
    

      let datearr= [];

      for(let i =0; i <= 10 ; i++){
          const date1= new Date();
        date1.setTime(date.getTime()-((226895 - i)*24*60*60*1000 ) );
        const dateios1= date1.toISOString().slice(0,10).replace('-','/').replace('-','/');
        const persiandate= toPersian(dateios1);
        datearr.push(persiandate)
      }
      let timearr=[];
      for(let j =10; j <= 19 ; j++){
             const persianhour= toPersian(JSON.stringify(j))
            
            timearr.push(`ساعت ${persianhour}`)
    }
    const [time, settime]= useState(timearr[0]);
    const [appointment, setappointment]= useState(datearr[0]);
   
    const subhandllerdfs = ()=>{
       console.log('saiodsa saihd')
       if(auth){
        const data= {
            Appointment: appointment,
            Time: time,
            AdvisorId: OneData.AdvisorId._id,
            UserId:auth._id ,
            RealStateId:OneData._id,
            RealStateNumber: OneData.RealStateNumber
        }
        console.log(data)
        appopostinit(data)
        }else{
            window.location.hash = '#/login'
        }
    }

    return(
        <div className='callender-target'>
                <div className='callender-box'>
                <div className='callender-head-box'>
                    <h2 className='callender-h2'>رزرو وقت</h2>
                </div>
                <div className='callender-date-box'>
                   <div style={{display:'flex'}} className='callender-date'>
                      
                        <select value={appointment} onChange={(e)=>setappointment(e.target.value)} >
                            {datearr.map(mp=>(
                                <option >{mp}</option>
                            ))}
                        </select>
                        <select value={time} onChange={(e)=>settime(e.target.value)} >
                            {timearr.map(mp=>(
                                <option>{mp}</option>
                            ))}
                        </select>
                   </div>
                </div>
                    <div className='callender-btn-box'>
                        <button onClick={subhandllerdfs} className='callender-btn'>ثبت رزرو</button>
                    </div>
                </div>
        </div>
    )
}


export default Callender;
