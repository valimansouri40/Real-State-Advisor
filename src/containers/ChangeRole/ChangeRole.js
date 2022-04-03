import React, { useEffect, useState } from "react";
import './ChangeRole.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import Select from "../../components/UI/Select/Select";
import { ShowAlert } from "../../store/utility/alert";



const ChangeRole=(props)=>{
        const {changeroledata, changefilehandller,areaall, cityall, fineduserinit, changeroleinit}= props;
        const [role, setrole]=useState();
        let [limit, setlimit]= useState([]);
        let [Areas, setareas]= useState();
        useEffect(()=>{
            if(changeroledata){
                setrole(changeroledata.role);
                changefilehandller(null, 'getallcity', '');
                setlimit(changeroledata.CitysAndAreas)
            }
        },[changeroledata])

        useEffect(()=>{
            setareas(areaall)
        },[areaall])

        const keyPressHandller=(e)=>{
            if(e.keys === '13'){
                const data= {
                    PhoneNumber: e.target.value
                }
                fineduserinit(e.target.value);
            }
        }
        console.log(changeroledata)
        const submithandller=(e)=>{
            e.preventDefault()
           
            console.log(e.target[0].value)
            fineduserinit(e.target[0].value);
        }

        const patchRoleHandller= ()=>{
                const data= {
                    role: role,
                    CitysAndAreas: limit
                }
                console.log(data)
                if(role !== '' && role){
            changeroleinit(data, changeroledata._id);
            fineduserinit(changeroledata.PhoneNumber);
        }else{
            ShowAlert([], ' با موفقیت انجام نشد','success');
        }
        }

        const setvaluehandller= (e)=>{
            if(e && e !== 'شهر'){
             const citid= cityall.find(er=>  er.name === e);
            changefilehandller(null, 'getallarea',`id=${citid._id}`)
           
            
            
    }
   }

   const posibelhandllerr= (v ,e)=>{
            const filter= limit.filter(t=> t.areaName === e.areaName);
            console.log(filter.length, v.target.checked);
            if(filter.length === 0 && v.target.checked){
                setlimit([...limit,{...e}]);
            }else{
                console.log('else')
                const filter2= limit.filter(t=> t.areaName !== e.areaName); 
                setlimit(filter2)   
            }
            
   }
   console.log(limit)
    return(
        <section className='changerole-target'>
            <div className='changerole-frame'>
                <div className='changerole-searchtarget'>
                        <form onSubmit={submithandller} className='changerole-searchbox'>
                                <input type='search' onKeyPress={keyPressHandller} placeholder='شماره تلفن'  />
                                <input type='submit' value='جستجو' />
                        </form>
                </div>
                <div className='changerole-changetarget'>
                   { changeroledata?<div className='changerole-changebox'>
                                <div className='changerole-imgbox'>
                                    <img src='#' className='changerole-img' />
                                </div>
                                <Select  val={role} setvaluehandller={setrole}
                                array={['admin','user','advisor', 'employee']} > نقش </Select>
                        
                    <div className='selectbox'>
                    <label className='label'>   شهر</label>
                <select className='select' onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'  >
                        شهر
                    </option>
            {cityall?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):null}
        </select>
        </div>
        { areaall?<div className='selectbox'>
                         {areaall.map((mp, i)=>
                        <label>
                             {mp.areaName}
                             <input type='checkbox'
                             checked={ limit.filter(lm => lm.areaName === mp.areaName).length > 0?true:false}
                             onChange={(e)=>posibelhandllerr(e,mp)}
                              className='check-posibel' name='pos' /></label>)}
                      </div>:null}
       {/* <div className='selectbox'>
                <label className='label'> منطقه</label>
           <select className='select' disabled={areaall && city !== ''?false:true} 
           onChange={(e)=>setareahandller(e.target.value)} >
                    <option className='option'  >
                        منطقه
                    </option>
            {areaall?areaall.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            )):null}
            
</select>
 </div> */}
                                <h4 className='changerole-h4'>{changeroledata.FristName} : نام</h4>
                                <h4 className='changerole-h4'>{changeroledata.LastName} : نام خانوادگی</h4>
                                <button onClick={patchRoleHandller} ></button>
                        </div>:null}
                </div>
            </div>
        </section>
    )
}

const MapStateToProps= state=>{

    return{
        changeroledata: state.auth.changeroledata,
        areaall: state.realstate.areaall,
        cityall: state.realstate.cityall,
    }
}

const MapDispatchToProps= dispatch=>{

    return{
        changefilehandller:(dt, path, id)=>dispatch(action.changefilehandller(dt, path, id)),
        fineduserinit:(num)=> dispatch(action.fineduserinit(num)),
         changeroleinit: (dt, num)=> dispatch(action.changeroleinit(dt, num))
    }
}

export default connect(MapStateToProps ,MapDispatchToProps)(ChangeRole);