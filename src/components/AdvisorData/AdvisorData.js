import React from "react";
import './AdvisorData.css';
import StarRatings from "react-star-ratings";
import axios from "axios";
import { apidomain, cookiejwt } from "../../store/utility/cookie";
import { ShowAlert } from "../../store/utility/alert";

const AdvisorData= props=>{
        const {OneData}= props;
        

        const setAdvisorRatHandller = (e)=>{
            const data= {
                Rate: e,
                RealStateId: OneData._id,
                UserId: OneData.AdvisorId._id
            }
            
            axios(apidomain + '/RateAdvisor',{
                method: 'post',
                data: data,
                headers: {'Authorization': `Bearer ${cookiejwt}`}
            }).then(res =>{
               
                ShowAlert([],'انجام شد','succes')
            }).catch(er=>{
                ShowAlert([],'انجام نشد','fail')

            })
        }
    return(
        <div className="advisordata-frame">
        <div className='advisordata-target'>
            <div className='advisordata-box'>
                    <h2 className='advisordata-h2' > اطلاعات مشاور املاک </h2>
                    <div className='advisordata-profile'> 
                        <div className="advisordata-profile-box">
                        {OneData.AdvisorId.Image?<img 
                         className='advisordata-img' src={OneData.AdvisorId.Image} />
                        :<img className='advisordata-img' src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                        <div className='advisordata-detail'>
                            <h3 className='advisordata-h3'>
                                { OneData.AdvisorId.FristName + ' ' +
                                 `${OneData.AdvisorId.LastName?OneData.AdvisorId.LastName:''}`}
                            </h3>
                            <h4 className='advisordata-h4'>
                                        مشاور املاک
                            </h4>
                        </div>
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
                            <div className='advisordata-phbox-foot'>
                            <StarRatings
                                rating={OneData.AdvisorId.RateAdvisor}
                                starRatedColor="gold"
                                changeRating={(e)=>setAdvisorRatHandller(e)}
                                numberOfStars={5}
                                name='rating'
                                starDimension="2vh"
                                starSpacing="3px"
                                /> 
                                <h4> امتیاز مشاور</h4>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}


export default AdvisorData;