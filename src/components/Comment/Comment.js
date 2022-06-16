import React, { useEffect, useState } from "react";

import './Comment.css';
import StarRatings from "react-star-ratings";

const Comment= (props)=>{
        const {reviwegetinit, auth, reviwes,OneData,
            reviweandRatepostinit}= props;
        const [rate, setrate]= useState(4.5);
        const [comment, setcomment]= useState();

        useEffect(()=>{
            if(auth, OneData){
            reviwegetinit(`/reviwe/get?RealStateId=${OneData._id}&Accept=ok`);
        }
        },[reviwegetinit,auth, OneData])

        const submitreviwehandller=()=>{
            const data={
                Message: comment,
                Rate: rate,
                UserId: auth._id,
                RealStateId: OneData._id
            }
            setcomment("");
            
            reviweandRatepostinit(data);
            reviwegetinit(`/reviwe/get?RealStateId=${OneData._id}&Accept=ok`);
        }
        
    return(
        <div className='comment-target'>
            <div className='comment-box'>
                {reviwes?reviwes.map((mp,i)=><div className='comment-reviwe-box'>
                        <div className='comment-somebox'>
                            <h2 className='comment-some'>دیدگاه {reviwes.length - i} </h2>
                        </div>
                        <div className={mp.UserId._id === auth._id?'comment-my':'comment-start'}>
                        <div className='comment-textbox'>
                                {mp.UserId.Image?<img width='50px' height='50px' src={mp.UserId.Image}/>:
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                                <h2 className='comment-name'>{mp.UserId.FristName 
                                            + '  '+ 
                                            `${mp.UserId.LastName? mp.UserId.LastName:''}`}</h2>
                                <span className='cooment-date'>
                                <StarRatings
                    rating={mp.Rate}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name='rating'
                    starDimension="2vh"
                     starSpacing="3px"
                    /> 
                    </span>
                </div>
                        
                        <p className='comment-text'>{mp.Message}</p>
                        </div>
                </div>):null}
                {reviwes?reviwes.length === 0? <div className='comment-somebox'>
                <div className='comment-not'>
                                    <h5 className="comment-h5">دیدگاهی وجود ندارد</h5>
                            </div>
                    </div>:null:null}
                <div className='comment-createreviwe-box'>
                    <div className='comment-ratebox'>
                            <h2 className='comment-titel1'>افزودن نظر</h2>
                            <h2 className='comment-titel'> ثبت امتیاز</h2>
                            <div className='comment-star'>
                    <StarRatings
                    rating={rate}
                    starRatedColor="gold"
                    changeRating={(e)=>setrate(e)}
                    numberOfStars={5}
                    name='rating'
                    starDimension="2vh"
                     starSpacing="3px"
                    /> 
                </div>
                    </div>
                    <div className='comment-textareabox'>
                        <p className='comment-textareabox-p'>
                                گفت گوی شما بعد از تایید توسط کارشناسان در وبسایت قابل مشاهده خواهد بود.
                        </p>
                        <textarea  value={comment} placeholder='سوال نظر و پیشنهاد خود را بنویسید'
                        onChange={(e)=>setcomment(e.target.value)} className='comment-textarea' ></textarea>
                        <button className="comment-btn" onClick={submitreviwehandller}>ثبت</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment;
