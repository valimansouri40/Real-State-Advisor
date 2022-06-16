import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Routes from './Routes';
import { Helmet } from "react-helmet-async";
import * as action from './store/action/index';
import { cookiejwt } from './store/utility/cookie';

 function App(props){
     
      const {setauthgetmeinit, role}= props;
     
     const path= window.location.hash;
 

          useEffect(()=>{
               if(cookiejwt){
                    setauthgetmeinit()
                    
               }
          },[cookiejwt, setauthgetmeinit, path])

          

      return(
        <div>
              <Helmet>
           <title>GOOOYA</title>
          <meta name="description" content="App Description" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
       
           <Routes role={role}></Routes>
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



