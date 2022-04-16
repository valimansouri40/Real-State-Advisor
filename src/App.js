import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter,Route} from 'react-router-dom';
import Routes from './Routes';

import * as action from './store/action/index';
import { cookiejwt } from './store/utility/cookie';



 function App(props){
      
      const {setauthgetmeinit, role}= props;

     const path= window.location.hash;


          useEffect(()=>{
               if(cookiejwt){
                    setauthgetmeinit()
                    var data = JSON.parse(document.getElementById('data123').innerHTML);
                    console.log(data)
               }
          },[cookiejwt, setauthgetmeinit, path])

          

      return(
        <div>
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



