import React from "react";
import Radio from "../Radio/Radio";
import classes from'./Box.css';


const Box=(props)=>{
        const {filter, yaearbuild,lease, setlease, setyearbuild,
            maesures, setmeasures,
            price, setprice,extra}=props;
       let cssstyle= [classes.box]
       
    return(
        <div className={extra?'box':'unseen'} >
               <div className='part-year' style={{borderBottom:'2px solid #fff'}}>
                       {filter.YearBuild.map((fil,i)=><Radio name={`yaer`} value={fil}
                       val={yaearbuild} setval={setyearbuild}
                       ></Radio>)}
                   </div> 
                   {filter.Lease?<div className='part-year' style={{borderBottom:'2px solid #fff'}}>
                       {filter.Lease.map((fil,i)=><Radio name={`lease`} value={fil}
                       val={lease} setval={setlease}
                       ></Radio>)}
                   </div>:null}
                   <div className='part-year'  style={{borderBottom:'2px solid #fff'}}>
                       {filter.Price.map(fil=><Radio name={`price`} value={fil}
                       val={price} setval={setprice}
                       ></Radio>)}
                   </div> 
                   <div className='part-year'>
                       {filter.Measure.map(fil=><Radio name={`measure`} value={fil} 
                       val={maesures} setval={setmeasures}
                       ></Radio>)}
                   </div> 
        </div>
    )
}
export default Box;