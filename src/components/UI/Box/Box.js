import React from "react";
import Radio from "../Radio/Radio";
import'./Box.css';


const Box=(props)=>{
        const {filter,changeextraall, yaearbuild,setyearbuild,extra}=props;
       
       
    return(
        <div className={extra?'box2':'unseen'} >
            <div className='allappointment-delete' onClick={changeextraall}>
                    <img width='20px' height='20px'
                     src="https://img.icons8.com/windows/32/000000/multiply.png"/>
             </div>
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