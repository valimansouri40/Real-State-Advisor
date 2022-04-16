import React, { Suspense } from "react";
import { HashRouter,Route, Redirect} from 'react-router-dom';
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

        let limitRoutes=<HashRouter>
               <Route path='/' exact  component={Home}/>
        <Route path='/search' exact  component={Home}/>
        <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
        <Redirect to="/" />
            { routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
        </HashRouter>

        if(role){
            switch(role){
                case 'user':
                    limitRoutes =<HashRouter>
                    <Route path='/myprofile' exact component={MyProfile} />
                    <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                    <Route path='/mymarks' exact component={MyMarks} />
                    <Route  path='/changepassword' exact component={Auth}/>
                    <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={Home}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    <Redirect to="/" />
                    </HashRouter>
                    break;
                case 'dealer':
                    limitRoutes=<HashRouter>
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/mymarks' exact component={MyMarks} />
                   <Route  path='/changepassword' exact component={Auth}/>
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/alladvisorappointments' exact component={AllAppointments} />
                   <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={Home}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                     <Redirect to="/" />
                   </HashRouter>
                     break;
                case 'advisor':
                    limitRoutes=<HashRouter>
                     <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                     <Route path='/myprofile' exact component={MyProfile} />
                    <Route path='/myrequest' exact component={MyRequest} />
                    <Route path='/alladvisorappointments' exact component={AllAppointments} />
                    <Route path='/mymarks' exact component={MyMarks} />
                    <Route  path='/changepassword'  component={Auth}/>
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={Home}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    <Redirect to="/" />
                    </HashRouter>
                    break;
                case 'employee':
                    limitRoutes=<HashRouter>
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={Home}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    <Redirect to="/" />
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
                   </HashRouter>
                    break;
                case 'admin':
                    limitRoutes=<HashRouter>
                    <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={Home}/>
                <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                     <Redirect to="/" />
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
                   </HashRouter>
                    break;
                default: limitRoutes=<HashRouter>
                       <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={Home}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    <Redirect to="/" />
                    { routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
                </HashRouter>
                    break
            }
        }


    return(
           <Suspense  fallback={<p style={{background:'#111',
           position: 'fixed', direction:'ltr',top:'10%', left:'10%'}}>لطفا کمی صبر کنید ...</p>}>
              {limitRoutes}
          </Suspense>

    )
}


export default Routes;
