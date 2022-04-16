import React from "react";
import './AdvisorData.css';


const AdvisorData= props=>{
        const {OneData}= props;
    return(
        <div className='advisordata-target'>
            <div className='advisordata-box'>
                    <h2 className='advisordata-h2' > اطلاعات مشاور املاک </h2>
                    <div className='advisordata-profile'> 
                        {OneData.AdvisorId.Image?<img width='50' height='50'
                         className='advisordata-img' src={OneData.AdvisorId.Image} />
                        :<img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                        <div className='advisordata-detail'>
                            <h3 className='advisordata-h3'>
                                { OneData.AdvisorId.FristName + ' ' +
                                 `${OneData.AdvisorId.LastName?OneData.AdvisorId.LastName:''}`}
                            </h3>
                            <h4 className='advisordata-h4'>
                                        مشاور املاک
                            </h4>
                        </div>
                        <div className='advisordata-dt'>
                            <div className='advisordata-phbox'>
                            <img width='30px' height='30px' 
                            src="https://img.icons8.com/color/48/000000/phone.png"/>
                                <h4 className='advisordata-ph'>{OneData.AdvisorId.PhoneNumber}</h4>
                            </div>
                            {OneData.AdvisorId.AdvisorAddress?<div className='advisordata-phbox'>
                            <img width='30px' height='30px' 
                            src="https://img.icons8.com/color/48/000000/marker--v1.png"/>
                                <h4 className='advisordata-ph'>{OneData.AdvisorId.AdvisorAddress}</h4>
                            </div>:null}
                             <div className='advisordata-phbox'>
                            <a href={`https://wa.me/${OneData.AdvisorId.PhoneNumber}`}> 
                                <img width='30px' height='30px'
                                title='کلیک کنید' 
                                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"/>
                                </a>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default AdvisorData;