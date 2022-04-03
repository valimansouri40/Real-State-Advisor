import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import * as action from '../../store/action/index';
import Logo from '../../components/Logo/Logo'
import Filter from "../../components/Filter/Filter";
import TabRealState from "../../components/TabRealState/TabRealState";


const Home= (props)=>{
        const {areaall,cityall,length, getallfilterinit,AllData, changefilehandller,getallwsinit,filter,
            worksampel, auth, sendreq, REALSTATEGETALLINIT}= props;
        const [tab, settab]=useState('sell');
        

        useEffect(()=>{
            changefilehandller(null, 'getallcity', '');
        },[])
          
       
        console.log(cityall)
        return(<div>
           <Header tab={tab} settab={settab} auth={auth} sendreq={sendreq}></Header>
           <Logo></Logo>
           <Filter worksampel={worksampel} filter={filter} tab={tab} settab={settab} REALSTATEGETALLINIT={REALSTATEGETALLINIT} 
           auth={auth} sendreq={sendreq} getallwsinit={getallwsinit} getallfilterinit={getallfilterinit}
            areaall={areaall} changefilehandller={changefilehandller} cityall={cityall}></Filter>
            <TabRealState
            REALSTATEGETALLINIT={REALSTATEGETALLINIT} length={length} filter={AllData}
            ></TabRealState>
        </div>)


}

const MapStateToProps=state=>{

    return{
        AllData:state.realstate.AllData,
        areaall: state.realstate.areaall,
        cityall: state.realstate.cityall,
        auth: state.auth.data,
        worksampel: state.sampel.data,
        filter: state.request.filter,
        length: state.realstate.length
    }
}

const MapDispatchToProps=dispatch=>{

    return{
         getallwsinit: (page, limit, query)=> dispatch(action.getallwsinit(page,limit,query)),
        changefilehandller:(dt, path, id)=>dispatch(action.changefilehandller(dt, path, id)),
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
        REALSTATEGETALLINIT:(page,query)=>dispatch(action.REALSTATEGETALLINIT(page,query)),
        getallfilterinit:(qu)=>dispatch(action.getallfilterinit(qu))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);
