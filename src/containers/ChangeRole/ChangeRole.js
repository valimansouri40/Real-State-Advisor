import React, { useEffect, useState } from "react";
import './ChangeRole.css';
import * as action from '../../store/action/index';
import { connect } from "react-redux";
import Select from "../../components/UI/Select/Select";
import { ShowAlert } from "../../store/utility/alert";
import gallery from '../../assets/icons/icons8-picture-50.png';
import AdminPannelNav from "../../components/AdminPannelNav/AdminPannelNav";

// بخش مدیریت کاربران در پنل مدیریت

const ChangeRole=(props)=>{
        const {changeroledata, changefilehandller,areaall, cityall, fineduserinit, changeroleinit}= props;
        const [role, setrole]=useState();
        let [limit, setlimit]= useState([]);
        let [Citys, setCity]= useState([]);
        const [Adress, setadress]= useState();

        const rolearr= ['admin','user','advisor', 'employee', 'dealer']
        const rolelimit= ['advisor', 'employee', 'dealer']
        useEffect(()=>{
            if(changeroledata){
                setrole(changeroledata.role);
                changefilehandller(null, 'getallcity', '');
                setlimit(changeroledata.CitysAndAreas)
                setadress(changeroledata.AdvisorAddress);
            }
        },[changeroledata])

       

        const keyPressHandller=(e)=>{
            if(e.keys === '13'){
               
                fineduserinit(e.target.value);
            }
        }
    
        const submithandller=(e)=>{
            e.preventDefault()
         
            fineduserinit(e.target[0].value);
        }

        const patchRoleHandller= ()=>{
            
                const data= {
                    role: role,
                    CitysAndAreas: limit,
                    AdvisorAddress: Adress
                }
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
           
            if(filter.length === 0 && v.target.checked){
                setlimit([...limit,{...e}]);
                // const flln = Citys.filter(el=> el.objid.name === e.objid.name );
                // if(flln.length === 0){
                setCity([...Citys, {...e.objid}])
                
            }else{
                const filter2= limit.filter(t=> t.areaName !== e.areaName); 
                const filter3= limit.filter(el=> el.objid.name !== e.objid.name); 
                setlimit(filter2); 
                setCity(filter3); 
            }
            
   }
    return(
        <section className='changerole-target'>
            <AdminPannelNav/>
            <div className='changerole-frame'>
                <div className='changerole-searchtarget'>
                        <form onSubmit={submithandller} className='changerole-searchbox'>
                                <input type='search' name='tell' onKeyPress={keyPressHandller} placeholder='شماره تلفن'  />
                                <input type='submit' value='جستجو' />
                        </form>
                </div>
                <div className='changerole-changetarget'>
                   { changeroledata?<div className='changerole-changebox'>
                                <div className='changerole-imgbox'>
                                    <img width='60px' height='80px' src={changeroledata.Image?changeroledata.Image:gallery}
                                     className='changerole-img' />
                                </div>
                                <Select  val={role} setvaluehandller={setrole}
                                array={rolearr} > نقش </Select>
                        
                    <div className='selectbox'>
                    <label className='label'>   شهر</label>
                <select className='select' disabled={!rolelimit.includes(role)?true:false}
                 onChange={(e)=>setvaluehandller(e.target.value)}  >
                <option className='option'  >
                        شهر
                    </option>
            {cityall?cityall.map(mp=>(
                <option  className='option'>
                    {mp.name}</option>
            )):null}
        </select>
        </div>
        { areaall?<div className='selectbox'>
                         {areaall.map((mp, i)=>
                        <label>
                             {mp.areaName}
                             <input disabled={!rolelimit.includes(role)?true:false} type='checkbox'
                             checked={ limit.filter(lm => lm.areaName === mp.areaName).length > 0?true:false}
                             onChange={(e)=>posibelhandllerr(e,mp)}
                              className='check-posibel' name='pos' /></label>)}
                      </div>:null}
                                {role === 'advisor' || role === 'employee'?<input type='text' name='address' value={Adress}
                                placeholder='آدرس مشاور املاک'
                                 onChange={(e)=>setadress(e.target.value)} />:null}
                                <h4 className='changerole-h4'>{changeroledata.FristName} : نام</h4>
                                <h4 className='changerole-h4'>{changeroledata.LastName} : نام خانوادگی</h4>
                                <button onClick={patchRoleHandller} >ثبت</button>
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