import React, { Suspense, useEffect, useLayoutEffect } from "react";
import { HashRouter,Route,Redirect} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import RealStateBuilder from './containers/RealStateBuilder/RealStateBuilder';
import MyProfile from './containers/MyProfile/MyProfile';
import Home from './containers/Home/Home';
import MyRequest from './containers/MyProfile/MyRequest';
import RealStatefulldata from './containers/RealStatefulldata/RealStatefulldata';
import MyMarks from './containers/MyMarks/MyMarks';
import AllAppointments from './containers/AllAppointments/AllAppointments';
import Spinner from './components/UI/spinner/Spinner';
import SearchResult from "./containers/SearchResult/SearchResult";
import { LimitRouter } from "./store/utility/cookie";
import DesciptionPagesOne from "./containers/DesciptionPages/DesciptionPagesOne";
import DesciptionPagesTwo from "./containers/DesciptionPages/DesciptionPagesTwo";
import DesciptionPagesThree from "./containers/DesciptionPages/DesciptionPagesThree";

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

    const {role}= props;
    const hash = window.location.hash;
    const lmunknowe= LimitRouter['unknowe'].includes(hash.replace('#',''));
    let routes= [{route:'/sineup', compnent:Auth},{route:'/login', compnent:Auth},
    {route:'/forgotpassword', compnent:Auth},{route:'/resetpassword', compnent:Auth}
    ,{route:'/sendsmscode', compnent:Auth}]

        let limitRoutes=<HashRouter>
               <Route path='/' exact  component={Home}/>
        <Route path='/search' exact  component={SearchResult}/>
        <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
        
            { routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
        </HashRouter>

        if(role){
            switch(role){
                case 'user':
                    limitRoutes =<HashRouter>
                         <Route path='/description/one'  component={DesciptionPagesOne}/>  
                <Route path='/description/two'  component={DesciptionPagesTwo}/> 
                <Route path='/description/three'  component={DesciptionPagesThree}/> 
                    <Route path='/myprofile' exact component={MyProfile} />
                    <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                    <Route path='/mymarks' exact component={MyMarks} />
                    <Route  path='/changepassword' exact component={Auth}/>
                    <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={SearchResult}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    
                    </HashRouter>
                    break;
                case 'dealer':
                    limitRoutes=<HashRouter>
                         <Route path='/description/one'  component={DesciptionPagesOne}/>  
                <Route path='/description/two'  component={DesciptionPagesTwo}/> 
                <Route path='/description/three'  component={DesciptionPagesThree}/> 
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/mymarks' exact component={MyMarks} />
                   <Route  path='/changepassword' exact component={Auth}/>
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/alladvisorappointments' exact component={AllAppointments} />
                   <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={SearchResult}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                     
                   </HashRouter>
                     break;
                case 'advisor':
                    limitRoutes=<HashRouter>
                         <Route path='/description/one'  component={DesciptionPagesOne}/>  
                <Route path='/description/two'  component={DesciptionPagesTwo}/> 
                <Route path='/description/three'  component={DesciptionPagesThree}/> 
                     <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                     <Route path='/myprofile' exact component={MyProfile} />
                    <Route path='/myrequest' exact component={MyRequest} />
                    <Route path='/alladvisorappointments' exact component={AllAppointments} />
                    <Route path='/mymarks' exact component={MyMarks} />
                    <Route  path='/changepassword'  component={Auth}/>
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={SearchResult}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    
                    </HashRouter>
                    break;
                case 'employee':
                    limitRoutes=<HashRouter>
                         <Route path='/description/one'  component={DesciptionPagesOne}/>  
                <Route path='/description/two'  component={DesciptionPagesTwo}/> 
                <Route path='/description/three'  component={DesciptionPagesThree}/> 
                    <Route path='/buildrealstatepost' exact component={RealStateBuilder} />
                    <Route path='/myprofile' exact component={MyProfile} />
                   <Route path='/myrequest' exact component={MyRequest} />
                   <Route path='/myappointments' exact component={AllAppointments} />
                   <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={SearchResult}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    
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
                    <Route path='/search' exact  component={SearchResult}/>
                <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                <Route path='/description/one'  component={DesciptionPagesOne}/>  
                <Route path='/description/two'  component={DesciptionPagesTwo}/>  
                <Route path='/description/three'  component={DesciptionPagesThree}/>  
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
                     <Route path='/description/one'  component={DesciptionPagesOne}/>  
                <Route path='/description/two'  component={DesciptionPagesTwo}/> 
                <Route path='/description/three'  component={DesciptionPagesThree}/> 
                       <Route path='/' exact  component={Home}/>
                    <Route path='/search' exact  component={SearchResult}/>
                    <Route path='/viewrealstate/:id' exact component={RealStatefulldata} />
                    <Route path='/*'
                     component={Home}/>
                    { routes.map((mp)=><Route path={mp.route} exact component={mp.compnent} />)}
                    
                </HashRouter>
                    break
            }
        }
        
    return(
           <Suspense  fallback={<Spinner></Spinner>}>
              {limitRoutes}
              {/* {role && roles.includes(role) ?LimitRouter[role].map(mp=>(
                  <Route to={mp} render={()=><p style={{width:'100%', textAlign:'center'}} >not found</p>} />
              )):null} */}
                  
          </Suspense>

    )
}


export default Routes;
