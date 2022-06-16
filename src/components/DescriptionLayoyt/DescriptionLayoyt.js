import React from "react";
import './DescriptionLayoyt.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import Header from "../Header/Header";
import CloseComponent from "../CloseComponent/CloseComponent";
import Footer from "../Footer/Footer";


const DescriptionLayoyt =(props)=>{
        const {children, auth, sendreq} = props;
    return(
        <section>
                <Header auth={auth} sendreq={sendreq}></Header>
                <CloseComponent>
                    {children}
                </CloseComponent>
                <Footer/>
        </section>
    );
}


const MapStateToProps= state=>{

    return{
        auth: state.auth.data
    }
}
const MapDispatchToProps= dispatch=>{
    return{
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(DescriptionLayoyt)