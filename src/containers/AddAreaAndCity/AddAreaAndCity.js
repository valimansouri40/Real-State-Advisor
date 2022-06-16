import React,{useEffect,useState} from 'react';
import './AddAreaAndCity.css';
import {addcity, adderea} from '../../datajson';
import Form from '../../components/Form/Form'
import { connect } from 'react-redux';
import * as action from '../../store/action/index';
import GoogleMaps from '../../components/UI/GoogleMaps/GoogleMaps';
import DeleteBox from '../../components/UI/DeleteBox/DeleteBox';
const AdminPannelNav= React.lazy(()=>{
    return import("../../components/AdminPannelNav/AdminPannelNav")
})

///  اضافه کردن شهر ها و منطقه ها در پنل مدیریت

const AddAreaAndCity=(props)=>{

    const {changefilehandller, field2, field}= props;
    const path= window.location.hash;
    const [loc, setloc]=useState();
    const [search, setsearch]=useState();
    const [data,setdata]=useState();

    useEffect(()=>{
        switch(path){
            case '#/addcity':
                setdata(addcity)
                break;
            case '#/addarea':
                setdata(adderea)
                break;
            default: setdata();
            break;
        }

    },[path])
    
    const findhandller=()=>{
           
            if(path === '#/addarea'){
                changefilehandller(null, 'getarea',`area=${search}`)
            }else if(path === '#/addcity'){
                changefilehandller(null, 'getcity',`city=${search}`)

            }
    }

    const deleterealstatepost=()=>{
        if(path === '#/addarea'){
            changefilehandller(null, 'deletearea',`id=${field[0]._id}`)
        }else if(path === '#/addcity'){
            changefilehandller(null, 'deletecity',`id=${field[0]._id}`)

        }
    }
   
    return(
        <section className='addareaandcity-target' >
            <AdminPannelNav/>
            <div  className='addsection'>
               {/* <div className='addareaandcity-formbox'></div> */}
               <div>
               <DeleteBox setsearch={setsearch} deleterealstatepost={deleterealstatepost}
                       findhandller={findhandller} data={path==='#/addarea'?field:field2} />
               {path === '#/addarea'?<div  className='googelmapbox'>
                      <GoogleMaps location={loc} setlocation={setloc}/></div> :null}
                      </div>    
                 <Form  data={data} 
                  setdata={setdata} location={loc} changefilehandller={changefilehandller} />
                 
            </div>
        </section>
    )
}


const MapStateToProps=state=>{

    return{
        field: state.realstate.areaone,
        field2: state.realstate.cityone
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        changefilehandller:(data,path, query)=>dispatch(action.changefilehandller(data,path, query))
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(AddAreaAndCity);
 // "dev:build-server": "NODE_ENV=development webpack --config webpack.server.js --mode=development -w",
//  "dev:start": "nodemon ./server-build/index.js",
//  "dev": "npm-run-all --parallel build dev:*",