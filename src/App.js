import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Routes from './Routes';
import { Helmet } from "react-helmet-async";
import * as action from './store/action/index';
import { cookiejwt } from './store/utility/cookie';
import {GoogleLogin} from 'react-google-login'
import axios from 'axios';

 function App(props){
     
      const {setauthgetmeinit, role}= props;
     
     const path= window.location.hash;
     console.clear()
     useEffect(()=>{
            if(path !== '#/search' ){
               let newurl = window.location.protocol + "//" + window.location.host + '/' +  window.location.hash;
            
            window.history.pushState({}, '', newurl)
          }    
     },[path])
               
          // if(path !== '#/search' ){
          //      let newurl = window.location.protocol + "//" + window.location.host + '/' +  window.location.hash;
            
          //   window.history.pushState({}, '', newurl)
          // }
          // if(window.performance){
              
          //      if(performance.navigation.type === 1){
          // let newurl = window.location.protocol + "//" + window.location.host + '/' +  window.location.hash;
          // console.clear()
          //   window.history.pushState({}, '', newurl)
          //      }
          // }
          useEffect(()=>{
               if(cookiejwt){
                    setauthgetmeinit()
                    
               }
          },[cookiejwt, setauthgetmeinit, path])

          const handleLogin = async googleData => {
               console.log(JSON.stringify({
                    token: googleData.tokenId
                  }))
               const res = await fetch("http://localhost:8000/api/v1/auth/googlelogin", {
                   method: "POST",
                   body: JSON.stringify({
                   token: googleData.tokenId
                 }),
                 headers: {
                   "Content-Type": "application/json"
                 }
               })
               const data = await res.json()
               // store returned user somehow
             }
      return(
        <div>
              <Helmet>
           <title>GOOOYA</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
       
           <Routes role={role}></Routes>
           {/* <GoogleLogin
    clientId={process.env.REACT_APP_GOOGELE_API_KEY}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    
/> */}
        </div>

      )
 }

 const mapstatetoprops=state=>{

     return{
          role: state.auth.role
     }
 }

 const MapDispatchToProps= dispatch=>{

     return{
          setauthgetmeinit:()=>dispatch(action.setauthgetmeinit()),
          
     }
 }

export default connect(mapstatetoprops, MapDispatchToProps)(App);



