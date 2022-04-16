import React from "react";
import Radio from "../Radio/Radio";
import classes from'./Box.css';


const Box=(props)=>{
        const {filter, yaearbuild,setyearbuild,extra}=props;
       
       
    return(
        <div className={extra?'box':'unseen'} >
               <div className='part-year' style={{borderBottom:'2px solid #fff'}}>
                       {filter.YearBuild.map((fil,i)=><Radio name={`yaer`} value={fil}
                       val={yaearbuild} setval={setyearbuild}
                       ></Radio>)}
                   </div> 
                   {props.children}
        </div>
    )
}
export default Box;