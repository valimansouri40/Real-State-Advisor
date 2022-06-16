import React,{useEffect, useState} from "react";
import './CommentRes.css';
import StarRatings from "react-star-ratings";

const CommentRes= (props)=>{
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
        <div className='comment-targetres'>
        <div className='comment-box'>
        <div className="gallery-labelbox">
                                <h3 className="gallery-label">
                                   نظرها
                                </h3>
                                <span className="gallery-border"></span>
                            </div>
            <div className="comment-frame">
            {reviwes?reviwes.map((mp,i)=>
            <div className='comment-reviwe-box'>
                    <div className={mp.UserId._id === auth._id?'comment-my':'comment-start'}>
                    <div className='comment-textbox'>
                           <div> {mp.UserId.Image?<img className="comment-textbox-img" width='50px' height='50px' src={mp.UserId.Image}/>:
                            <img className="comment-textbox-img" src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>}
                            <h2 className='comment-name'>{mp.UserId.FristName 
                                        + '  '+ 
                                        `${mp.UserId.LastName? mp.UserId.LastName:''}`}</h2>
                                    </div>
                            <div className='cooment-dateres'>
                               
                            <StarRatings
                rating={mp.Rate}
                starRatedColor="gold"
                numberOfStars={5}
                name='rating'
                starDimension="2vh"
                 starSpacing="3px"
                /> 
                </div>
            </div>
                    
                    <p className='comment-text'>{mp.Message}</p>
                    </div>
            </div>):null}

            {reviwes?reviwes.length === 0? <div className='comment-somebox'>
            <div className='comment-not'>
                                <h5 className="comment-h5">دیدگاهی وجود ندارد</h5>
                        </div>
                </div>:null:null}
            </div>
            <div className='comment-createreviwe-boxres'>
                <div className='comment-ratebox'>
                                <div className="gallery-labelbox">
                                <h3 className="gallery-label">
                                افزودن نظر
                                </h3>
                                <span className="gallery-border"></span>
                            </div>
                        <div className='comment-star'>
                        <h2 className='comment-titel'> ثبت امتیاز</h2>
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


export default CommentRes;