import React from "react";
import './Callender.css';


const Callender=(props)=>{
        const {}=props;
    let date = new Date();
    const dateios= date.toISOString().slice(0, 10);

      let datearr= [];

      for(let i =0; i <= 10 ; i++){
          const date1= new Date();
        date1.setTime(date.getTime()-((226896 - i)*24*60*60*1000 ) );
        const dateios1= date1.toISOString().slice(0,10)
        datearr.push(dateios1)
      }
      let timearr=[];
      for(let j =10; j <= 19 ; j++){
            timearr.push(`ساعت ${j}`)
    }
    return(
        <div className='callender-target'>
                <div className='callender-box'>
                <div className='callender-head-box'>
                    <h2 className='callender-h2'>رزرو وقت</h2>
                </div>
                <div className='callender-date-box'>
                   <div style={{display:'flex'}} className='callender-date'>
                       {/* <span className='callender-lessdate'></span>
                        <p className='callender-'>{}</p>
                        <span className='callender-adddate'></span> */}
                        {/* <input type='number'  min='1401' max='1405' defaultValue={`${dateios.slice(0,4)}`}  />/
                        <input type='number' min='1' max='12' defaultValue={`${dateios.slice(5,7)}`}  />/
                        <input type='number' min='1' max='31' defaultValue={`${dateios.slice(8, 10)}`} /> */}
                        <select >
                            {datearr.map(mp=>(
                                <option>{mp}</option>
                            ))}
                        </select>
                        <select >
                            {timearr.map(mp=>(
                                <option>{mp}</option>
                            ))}
                        </select>
                   </div>
                </div>
                    <div className='callender-btn-box'>
                        <button className='callender-btn'>ثبت رزرو</button>
                    </div>
                </div>
        </div>
    )
}


export default Callender;