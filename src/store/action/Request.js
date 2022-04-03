import axios from 'axios';
import { apidomain, cookiejwt } from '../utility/cookie';
import * as action from './actionType';


export const startreq= ()=>{

    return{
        type: action.STARTREQ
    }
}

export const getallmyreq=(data, length)=>{

    return{
        type: action.GETALLREQ,
        length:length,
        data:data
    }
}


export const getallmyreqinit=( query,page, limit)=>{

    return dispatch=>{
        dispatch(startreq());
        axios(apidomain + `/request/getallrequest?Type=${query}&page=${page}&limit=${limit}`,
        {
            method:'get',
            headers:{'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(getallmyreq(res.data.data));
                console.log(res.data)
            }
        }).catch(er=>{
            console.log(er)
        })
    }
}


const getfilter=(data)=>{
    return{
        type:action.GETALLFILTER,
        data:data
    }
}
export const getallfilterinit=(query)=>{

    return dispatch=>{
        axios(apidomain + `/filter/${query}`,{
            method:'get',
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
                if(res.data){
                        dispatch(getfilter(res.data.data))
                        console.log(res.data)
                }
        }).catch(er=>{
            console.log(er)
        })
    }
}
