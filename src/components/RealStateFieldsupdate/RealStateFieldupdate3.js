import React from "react";
import './RealStateFields.css'



const RealStateFieldupdate3 = (props)=>{
            const {numpage, OneData ,setDataPostthree,loading, DataPostthree, advisor, setnumpage, SubmitDataHandller}= props;

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
                    {!DataPostthree ?
                    <option value={'مشاور املاک'} className='option' selected>
                        {OneData.AdvisorId.FristName + ' ' + `${OneData.AdvisorId.LastName?OneData.AdvisorId.LastName:''}` + ' : ' +  OneData.AdvisorId.PhoneNumber}</option>:null}
             {advisor?advisor.map((mp, i)=>(
                OneData.AdvisorId.PhoneNumber !== mp.PhoneNumber?<option value={i} className='option'>
                    {mp.FristName + ' ' + `${mp.LastName?mp.LastName:''}` + ' : ' +  mp.PhoneNumber}</option>:null
            )):null} 
        </select>
        <div className="btn-box2">
        <button className='send' onClick={()=>setnumpage(2)}>بازگشت</button>
        <button className='send2' disabled={loading} onClick={SubmitDataHandller}>{!loading?"ارسال":<>درحال ارسال<span className="spin">
            </span></>}</button>
            </div>
        </div>
                    </div>
            </div>
        </section>
    )
}


export default RealStateFieldupdate3;