import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter,Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import RealStateBuilder from './containers/RealStateBuilder/RealStateBuilder';
import * as action from './store/action/index';
import { cookiejwt } from './store/utility/cookie';
import AddAreaAndCity from './containers/AddAreaAndCity/AddAreaAndCity';
import MyProfile from './containers/MyProfile/MyProfile';
import Home from './containers/Home/Home';
import BuildSampel from './containers/BuildSampel/BuildSampel';
import MyRequest from './containers/MyProfile/MyRequest';
import RealStatefulldata from './containers/RealStatefulldata/RealStatefulldata';
import RealStateManager from './containers/RealStateManager/RealStateManager';
import RealStateUpdate from './containers/RealStateManager/RealStateUpdate';
import ChangeRole from './containers/ChangeRole/ChangeRole';

 function App(props){
      const {setauthgetmeinit, REALSTATEGETALLINIT, getallfilterinit}= props;
     console.log(cookiejwt)
          useEffect(()=>{
              // REALSTATEGETALLINIT(1,'YearBuild[gte]=1340&City=amol');
               if(cookiejwt){
                    console.log('dsgdsyu')
                    setauthgetmeinit()
               }
          },[cookiejwt, setauthgetmeinit])

          

      let routes= [{route:'/sineup', compnent:Auth},{route:'/login', compnent:Auth},
      {route:'/forgotpassword', compnent:Auth},{route:'/resetpassword', compnent:Auth}
      ,{route:'/sendsmscode', compnent:Auth},{route:'/changepassword', compnent:Auth}]

      return(
        <div>
            <HashRouter>
                 { routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
                 <Route path='/' exact  component={Home}/>
                 <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                 <Route path='/addarea' exact component={AddAreaAndCity} />
                 <Route path='/addcity' exact component={AddAreaAndCity} />
                 <Route path='/myprofile' exact component={MyProfile} />
                 <Route path='/buildsampel' exact component={BuildSampel} />
                 <Route path='/myrequest' exact component={MyRequest} />
                 <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                 <Route path='/realstateupdate/:id' exact component={RealStateUpdate} />
                 <Route path='/realstatemanger' exact component={RealStateManager} />
                 <Route path='/changerole' exact component={ChangeRole} />
            </HashRouter>
        </div>

      )
 }

 const mapstatetoprops=state=>{

     return{
          
     }
 }

 const MapDispatchToProps= dispatch=>{

     return{
          setauthgetmeinit:()=>dispatch(action.setauthgetmeinit()),
          REALSTATEGETALLINIT:(page,query)=>dispatch(action.REALSTATEGETALLINIT(page,query)),
          
     }
 }

export default connect(mapstatetoprops, MapDispatchToProps)(App);


//https://chat.whatsapp.com/DRz95y5GzmA5DR66ALtbNI

// let today = new Date().toLocaleDateString('fa-IR');
//         today.replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));


