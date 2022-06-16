import axios from 'axios'
import * as action from './actionType'
import {apidomain, cookiejwt} from '../utility/cookie';
import { ShowAlert} from '../utility/alert';

export const startrate=()=>{

    return{
        type:action.STARTRATE
    }
}

export const reviweget= (data, length)=>{
        return {
                type: action.REVIWEGET,
                data:data,
                length: length
        }
}

export const reviweandRatepostinit= (data)=>{
    return dispatch=>{
        dispatch(startrate())
        axios(apidomain + `/reviwe`,{
            method: 'post',
            data: data,
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                ShowAlert([],'دیدگاه شما ارسال شد.','success')
            }
        }).catch(er=>{
            ShowAlert([],'دیدگاه شما ارسال نشد.','fail')
        })
    }
}




export const reviwegetinit=(id)=>{

    return dispatch=>{
        dispatch(startrate());
        axios(apidomain + id,{
            method: 'get',
            headers: {'content-Type':'application/json'}
        }).then(res=>{
            if(res.data){
                
                dispatch(reviweget(res.data.data,  res.data.length))
            }
        }).catch(er=>{
            console.log(er)
        })
    }
}


export const Patchrate=()=>{

    return{
        type:action.RATEPATCH
    }
}

export const reviwepatchinit=(dt, id)=>{

    return dispatch=>{
        dispatch(startrate());
       
        axios(apidomain + `/reviwe/${id}`,{
            method: 'patch',
            data:dt,
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(Patchrate())
            }
        }).catch(er=>{
            console.log(er)
        })
    }
}


export const getbestofad = (data)=>{

    return{
        type: action.GETBESTOFADVISOR,
        data: data
    }
} 

export const getbestofadinit =()=>{

    return dispatch=>{

        axios(apidomain + '/RateAdvisor/getbestof',{
            method: 'get',
            headers:{"Content-type": "application/json"}
        }).then(res=>{
                dispatch(getbestofad(res.data.data))
        }).catch(er=>{
            console.log(er)
        })
    }
}