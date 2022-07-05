import axios from 'axios';
import { ShowAlert } from '../utility/alert';
import { apidomain, cookiejwt } from '../utility/cookie';
import * as action from './actionType';




export const errorws= ()=>{

    return{
        type: action.WORKSAMPELERROR
    }
}

export const startws= ()=>{
    return{
        type: action.WORKSAMPELSTART
    }
}

export const postws=()=>{

    return{
        type:action.WORKSAMPELPOST
    }
}


export const postwsinit=(data)=>{

    return dispatch=>{
        dispatch(startws());

        axios(apidomain + `/worksampel`,{
            method:'post',
            data:data,
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                ShowAlert([],'با موفقیت انجام','success');
              
                dispatch(postws())
            }
        }).catch(er=>{
            console.clear()
            // ShowAlert([],'انجام نشد','fail')
            dispatch(errorws())
            
        })
    }
}



export const getallws=(data)=>{

    return{
        type:action.WORKSAMPELGETALL,
        dt:data
    }
}

export const getallwsinit=(page,limit,query)=>{

    return dispatch=>{
        dispatch(startws());
      
        axios(apidomain + `/worksampel?page=${page}&limit=${limit}&${query}`,{
            method:'get',
            headers: {'Content-Type' : 'application/json'}
        }).then(res=>{
            if(res.data){
               dispatch(getallws(res.data.data));
                
            }
        }).catch(er=>{
            console.clear()
            dispatch(errorws)
        })
    }
}


export const deletewsinit=(id)=>{

    return dispatch=>{
           
        axios(apidomain + `/worksampel/${id}`,{
            method:'delete',
            headers: {'Authorization': `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                ShowAlert([],'با موفقیت انجام','success');  
            }
        }).catch(er=>{
            console.clear()
            ShowAlert([],'انجام نشد','fail')
        })
    }
}