import React from "react";

import './RealStateFields.css'



const RealStateFields3 = (props)=>{
            const {numpage ,setDataPostthree, DataPostthree, advisor, setnumpage, SubmitDataHandller}= props;

        const setAdvisorHandller= ( mp)=>{
            
            if(mp !== 'مشاور املاک'){
            setDataPostthree(advisor[mp]._id);
        }else{
            setDataPostthree();
        }
        }
    return(
        <section className={numpage === 3?'rstf3-sec': 'hidden'}>
            <div className='rstf3-target'>
                    <div className='rstf3-box'>
                    <div className='selectbox'>
                    <label className='label'>  مشاور املاک</label>
                <select className='select'  onChange={(e)=>setAdvisorHandller(e.target.value)}  >
                <option className='option'  >
                مشاور املاک
                    </option>
             {advisor?advisor.map((mp, i)=>(
                <option value={i} className='option'>
                    {mp.FristName + ' ' + `${mp.LastName?mp.LastName:''}` + ' : ' +  mp.PhoneNumber}</option>
            )):null} 
        </select>
        <button className='send' onClick={()=>setnumpage(2)}>بازگشت</button>
        <button className='send' onClick={SubmitDataHandller}>ارسال</button>
        </div>
                    </div>
            </div>
        </section>
    )
}


export default RealStateFields3;