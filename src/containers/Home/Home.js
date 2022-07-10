import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import * as action from '../../store/action/index';
import Logo from '../../components/Logo/Logo';
import Filter from "../../components/Filter/Filter";
import TabRealState from "../../components/TabRealState/TabRealState";
import SearchResult from "../../components/SearchResult/SearchResult";
import './Home.css';
import Footer from "../../components/Footer/Footer";
import BestOfArea from "../../components/BestOf/BestOfArea";
import CloseComponent from "../../components/CloseComponent/CloseComponent";


// صفحه اصلی و صفحه نتایج سرچ

const Home= (props)=>{
        const {areaall,cityall,length,Tab , getbestofadinit,bestOf,  addMarkinit, lessmarkinit, 
            savetabserchboxinit, getallfilterinit,AllData, changefilehandller,getallwsinit,filter,
            worksampel, auth, sendreq, REALSTATEGETALLINIT}= props;
        const [tab, settab]=useState(Tab);
       

        useEffect(()=>{
            changefilehandller(null, 'getallcity', '');
            getbestofadinit();
        },[])
          
        // useEffect(()=>{
        //     if(window.location.hash === '#/search' && !['sell', 'rent'].includes(tab)){
        //         settab('sell')
        //     }
        // },[])
        useEffect(()=>{
                savetabserchboxinit(tab);
        },[tab])
        
        
        return(<div >
           
           <Header tab={Tab} settab={settab} auth={auth} sendreq={sendreq}></Header>
           <CloseComponent>
           <Logo></Logo>
            
           <div className={'home-searchboxbox'}>
               <div className={'home-filters'}>
                   <Filter worksampel={worksampel}
                filter={filter} tab={Tab} settab={settab}
                 REALSTATEGETALLINIT={REALSTATEGETALLINIT} 
                auth={auth} sendreq={sendreq} getallwsinit={getallwsinit} getallfilterinit={getallfilterinit}
                    areaall={areaall} changefilehandller={changefilehandller} cityall={cityall}></Filter>
                    </div> 
                {/* {limitpath?<SearchResult 
                    REALSTATEGETALLINIT={REALSTATEGETALLINIT} 
                    length={length} filter={AllData} auth={auth}
                    addMarkinit={addMarkinit} lessmarkinit={lessmarkinit}
                    />
                    :null} */}
                
                    
                    <div className='home-tabs'><TabRealState
                    addMarkinit={addMarkinit} lessmarkinit={lessmarkinit} auth={auth}
                    REALSTATEGETALLINIT={REALSTATEGETALLINIT} length={length} filter={AllData}
                    ></TabRealState>
                   <BestOfArea bestOf={bestOf}/>
                    </div>
                    
                  
            </div>
            </CloseComponent>
            <Footer tab={Tab} settab={settab} auth={auth} />
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
        length: state.realstate.length,
        Tab: state.realstate.Tab,
        bestOf: state.rate.bestOfAdvisor
    }
}

const MapDispatchToProps=dispatch=>{

    return{
         getallwsinit: (page, limit, query)=> dispatch(action.getallwsinit(page,limit,query)),
        changefilehandller:(dt, path, id)=>dispatch(action.changefilehandller(dt, path, id)),
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
        REALSTATEGETALLINIT:(page,query,limit)=>dispatch(action.REALSTATEGETALLINIT(page,query,limit)),
        getallfilterinit:(qu)=>dispatch(action.getallfilterinit(qu)),
        savetabserchboxinit: (tab)=> dispatch(action.savetabserchboxinit(tab)),
        addMarkinit: (data)=> dispatch(action.addmarkinit(data)),
        lessmarkinit: (id)=> dispatch(action.lessmarkinit(id)),
        getbestofadinit: ()=> dispatch(action.getbestofadinit())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);
