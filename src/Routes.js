import React, { Suspense } from "react";
import { HashRouter,Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import RealStateBuilder from './containers/RealStateBuilder/RealStateBuilder';
import MyProfile from './containers/MyProfile/MyProfile';
import Home from './containers/Home/Home';
import MyRequest from './containers/MyProfile/MyRequest';
import RealStatefulldata from './containers/RealStatefulldata/RealStatefulldata';
import MyMarks from './containers/MyMarks/MyMarks';
import AllAppointments from './containers/AllAppointments/AllAppointments';
const AcceptComment = React.lazy(()=>{
   return import("./containers/AcceptComment/AcceptComment");
});
const AllRequest = React.lazy(()=>{
    return import('./containers/AllRequest/AllRequest');
});
const ChangeRole = React.lazy(()=>{
    return import('./containers/ChangeRole/ChangeRole');
});
const RealStateUpdate = React.lazy(()=>{
    return import('./containers/RealStateManager/RealStateUpdate');
});
const RealStateManager = React.lazy(()=>{
    return import('./containers/RealStateManager/RealStateManager');
});
const BuildSampel = React.lazy(()=>{
    return import('./containers/BuildSampel/BuildSampel');
});
const AddAreaAndCity = React.lazy(()=>{
    return import('./containers/AddAreaAndCity/AddAreaAndCity');
});




const Routes=(props)=>{

    const {role, cookie}= props;
    
    let routes= [{route:'/sineup', compnent:Auth},{route:'/login', compnent:Auth},
    {route:'/forgotpassword', compnent:Auth},{route:'/resetpassword', compnent:Auth}
    ,{route:'/sendsmscode', compnent:Auth},{route:'/changepassword', compnent:Auth}]

        let limitRoutes=<>{ routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
        </>

        if(role){
            switch(role){
                case 'user':
                    limitRoutes =<>
                    <Route path='/myprofile' exact component={MyProfile} />
                    <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                    <Route path='/mymarks' exact component={MyMarks} />
                    <Route  path='/changepassword' exact component={Auth}/>
                    </>
                    break;
                case 'dealer':
                    limitRoutes=<>
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/mymarks' exact component={MyMarks} />
                   <Route  path='/changepassword' exact component={Auth}/>
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/alladvisorappointments' exact component={AllAppointments} />
                   </>
                     break;
                case 'advisor':
                    limitRoutes=<>
                     <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                     <Route path='/myprofile' exact component={MyProfile} />
                    <Route path='/myrequest' exact component={MyRequest} />
                    <Route path='/alladvisorappointments' exact component={AllAppointments} />
                    <Route path='/mymarks' exact component={MyMarks} />
                    <Route  path='/changepassword'  component={Auth}/>
                   <Route path='/myappointments' exact component={AllAppointments} />

                    </>
                    break;
                case 'employee':
                    limitRoutes=<>
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                   
                   <Route path='/mymarks' exact component={MyMarks} />
                   <Route path='/addarea' exact component={AddAreaAndCity} />
                    <Route path='/addcity' exact component={AddAreaAndCity} />
                    <Route path='/buildsampel' exact component={BuildSampel} />
                    <Route path='/realstateupdate/:id' exact component={RealStateUpdate} />
                    <Route path='/realstatemanger' exact component={RealStateManager} />
                    <Route path='/changerole' exact component={ChangeRole} />
                    <Route path='/allappointments' exact component={AllAppointments} />
                    <Route path='/allrequest' exact component={AllRequest} />
                    <Route  path='/changepassword' exact component={Auth}/>
                    <Route path='/alladvisorappointments' exact component={AllAppointments} />
                    <Route path='/commentmanagement' exact component={AcceptComment}/>
                   </>
                    break;
                case 'admin':
                    limitRoutes=<>
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/alladvisorappointments' exact component={AllAppointments} />
                   <Route path='/mymarks' exact component={MyMarks} />
                   <Route path='/addarea' exact component={AddAreaAndCity} />
                    <Route path='/addcity' exact component={AddAreaAndCity} />
                    <Route path='/buildsampel' exact component={BuildSampel} />
                    <Route path='/realstateupdate/:id' exact component={RealStateUpdate} />
                    <Route path='/realstatemanger' exact component={RealStateManager} />
                    <Route path='/changerole' exact component={ChangeRole} />
                    <Route path='/allappointments' exact component={AllAppointments} />
                    <Route path='/commentmanagement' exact component={AcceptComment}/>
                    <Route path='/allrequest' exact component={AllRequest} />
                    <Route  path='/changepassword' exact component={Auth}/>
                   </>
                    break;
                default: limitRoutes=<>{ routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
                </>
                    break
            }
        }


    return(
           <Suspense  fallback={<p style={{background:'#111',position: 'fixed', direction:'ltr',top:'10%', left:'10%'}}>لطفا کمی صبر کنید ...</p>}>
          <HashRouter>
              
          <Route path='/' exact  component={Home}/>
        <Route path='/search' exact  component={Home}/>
        <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
            
              {limitRoutes}
              
              
               {/* <Route exact render={()=><div>
                   <h1>ERROR 404</h1>
                   <p>page not found  </p></div>}  /> */}
          </HashRouter>
         
          </Suspense>

    )
}


export default Routes;
