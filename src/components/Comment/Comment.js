import React from "react";
import { connect } from "react-redux";
import * as action from '../../store/action/index';
import './Comment.css';


const Comment= (props)=>{


    return(
        <div className='comment-target'>
            <div className='comment-box'>
                <div className='comment-reviwe-box'>

                </div>
                <div className='comment-createreviwe-box'>

                </div>
            </div>
        </div>
    )
}
const MapStateToProps=state=>{

    return{

    }
}
const MapDispatchToProps= dispatch=>{

    return{
        
    }
}

export default connect(Map)(Comment);
