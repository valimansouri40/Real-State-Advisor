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
            console.log(search)
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
   console.log(field2)
    return(
        <section className='changerole-target' >
            <AdminPannelNav/>
            <div style={{display:'flex'
        ,alignItems:'flex-start', justifyContent:'space-around'}} className='addsection'>
                 <Form  data={data} 
                  setdata={setdata} location={loc} changefilehandller={changefilehandller} />
                  {path === '#/addarea'?<div style={{width:'40rem',height:'40rem'}} className='googelmapbox'>
                      <GoogleMaps location={loc} setlocation={setloc}/></div> :null}
                      <DeleteBox setsearch={setsearch} deleterealstatepost={deleterealstatepost}
                       findhandller={findhandller} data={path==='#/addarea'?field:field2} />
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