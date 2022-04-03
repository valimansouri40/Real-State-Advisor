import React from "react";
import './MyProfile.css';
import { connect } from "react-redux";
import * as action from '../../store/action/index';

const MyChangePassword=(props)=>{
        const {data}=props;

    return(
            <div>
                    
            </div>
    )
}
const MapStateToProps=state=>{

    return{
         data: state.auth.data
    }
}

const MapDispatchToProps=dispatch=>{
    return{
        setauthgetmeinit:()=>dispatch(action.setauthgetmeinit()),
         
    }
}

export default connect(MapStateToProps,MapDispatchToProps)(MyChangePassword)