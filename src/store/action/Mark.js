import axios from 'axios';
import { ShowAlert } from '../utility/alert';
import { apidomain, cookiejwt } from '../utility/cookie';
import * as action from './actionType';



export const startmark= ()=>{

    return{
        type: action.MARKSTART
    }
}

export const GETALLMYMARK= (data, length)=>{

    return{
        type: action.GETALLMYMARK,
        data: data,
        length:length
    }
}

export const GETALLMYMARKINIT= (rsid)=>{

    return dispatch=>{
         dispatch(startmark())
            
         axios( apidomain + `/mark/${rsid}`,{
             method: 'get',
             headers: {'Authorization': `Bearer ${cookiejwt}`}
         }).then(res=>{
            if(res.data){
                dispatch(GETALLMYMARK(res.data.data, res.data.length))
            }
         }).catch(er=>{
            console.clear()
         })
    }
}



export const addmark= ()=>{

    return{
        type: action.ADDMARK,
        
    }
}

export const addmarkinit= (data)=>{

    return dispatch=>{
         dispatch(startmark())

         axios( apidomain + `/mark`,{
             method: 'post',
             data: data,
             headers: {'Authorization': `Bearer ${cookiejwt}`}
         }).then(res=>{
            if(res.data){
                dispatch(addmark());
                ShowAlert([], 'نشانک اضافه شد', 'success')
            }
         }).catch(er=>{
            console.clear()
         })
    }
}



export const lessmarkinit= (id)=>{

    return dispatch=>{

         axios( apidomain + `/mark/${id}`,{
             method: 'delete',
             headers: {'Authorization': `Bearer ${cookiejwt}`}
         }).then(res=>{
            if(res.data){
               
                ShowAlert([], 'نشانک حذف شد', 'success')
            }
         }).catch(er=>{
            console.clear()
         })
    }
}

export const closeModal =(dt, dt2)=>{
    return{
        type: action.CLOSEMODAL,
        dt: dt,
        dt2: dt2
    }
}

export const closeModalInit =(dt, dt2)=>{

    return dispatch =>{
        dispatch(closeModal(dt, dt2));
    }
}