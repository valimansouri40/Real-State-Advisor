import axios from 'axios'
import * as action from './actionType'
import {apidomain, cookiejwt} from '../utility/cookie';


export const reviweget= (data)=>{
        return {
                type: action.REVIWEGET,
                data:data
        }
}

export const reviweandRatepostinit= (data)=>{
    return dispatch=>{

        axios(apidomain + `reviwe/${id}`,{
            method: 'post',
            data: data,
            headers: {'Authorozation' : `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
            }
        }).catch(er=>{

        })
    }
}


export const reviwegetinit=(id)=>{

    return dispatch=>{

        axios(apidomain + `/reviwe/${id}`,{
            method: 'get',
            headers: {'content-Type':'application/json'}
        }).then(res=>{
            if(res.data){
                dispatch(reviweget(res.data.data))
            }
        }).catch(er=>{
            console.log(er)
        })
    }
}