import axios from 'axios';
import * as action from './actionType';
import { ShowAlert } from '../utility/alert';
import { apidomain, cookiejwt, sendcookie } from '../utility/cookie';

export const startauth=()=>{
    return{
        type:action.STARTAUTH
    }
}

export const errorauth=()=>{
    return{
        type:action.ERRORAUTH
    }
}

export const setauthlogin=(path)=>{
    return{
        type:action.SETAUTHLOGIN,
        path:path
    }
}

export const setauthlogininit=(data,sine,settime)=>{

    return dispatch=>{
        dispatch(startauth());
        const rephash= sine.replace('#','');
            
          
        axios(apidomain + '/auth' + rephash,{
            method:'post',
            data:data,
            headers:{'Content-Type':'application/json'}
        }).then(res=>{
            if(res.data){
                
                dispatch(setauthlogin(sine));
                if(!res.data.error){
                switch(rephash){
                    case '/login':
                        sendcookie('car',res.data.data)
                        window.location.hash = '/';
                        localStorage.removeItem('phn');
                        window.location.reload();
                        break;
                    case '/resetpassword':
                        sendcookie('car',res.data.data)
                        window.location.hash = '/';
                        window.location.reload();
                        break;
                    case '/sineup':
                        window.location.hash = '/sendsmscode';
                        localStorage.setItem('phn',  data.PhoneNumber);
                        break;
                    case '/forgotpassword':
                        window.location.hash = '/sendsmscode';
                        localStorage.setItem('phn',  data.PhoneNumber);
                        break;
                    case '/sendsmscode':
                        localStorage.removeItem('phn');
                        sendcookie('car',res.data.data)
                        window.location.hash = '/';
                        window.location.reload();
                    break;
                }
            }else if(res.data.error){
                ShowAlert([], res.data.error, "fail");
            }
                // if(rephash === '/login' || rephash === '/resetpassword'){
                //     sendcookie('car',res.data.data)
                //     window.location.hash = '/';
                //     window.location.reload();
                // }else if(rephash === '/sineup'){
                    
                //     window.location.hash = '/sendsmscode';
                //     localStorage.setItem('phn',  data.PhoneNumber);
                    
                    
                // }else if(rephash === '/sendsmscode'){
                //     sendcookie('car',res.data.data)
                //     window.location.hash = '/';
                //     localStorage.removeItem('phn');
                //     window.location.reload();
                // }else if(rephash === '/forgotpassword'){
                //     window.location.hash = '/sendsmscode'
                //     localStorage.setItem('phn',  data.PhoneNumber);

                // }
            }
        }).catch((er,ms)=>{
            console.clear()
            // console.log(JSON.stringify(er.message),ms)
            dispatch(errorauth())
            ShowAlert([], '?????? ?????????? ???????? ?????? ?????? ?????? ','fail')
        })
    }
}



export const setauthgetme=(dt)=>{
    return{
        type:action.SETAUTHGETME,
        dt:dt
    }
}

export const setauthgetmeinit=()=>{

    return dispatch=>{

        axios(apidomain + `/auth/gh`,{
            method:'get',
            headers:{"Authorization": `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
             
                dispatch(setauthgetme(res.data.data));
            }
        }).catch((er)=>{
            console.clear()
            // console.log('can not send request getme')
        })
    }
};


export const setchangepassword=(dt)=>{
    return{
        type:action.SETAUTHCHANGEPASS,
        dt:dt
    }
}

export const setchangepasswordinit=(pas, url)=>{

    return dispatch=>{

        axios(apidomain + url,{
            method:'post',
            data:pas,
            headers:{"Authorization": `Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(setchangepassword(res.data.data));
                window.location.reload();
               
            }
        }).catch((er)=>{
            console.clear()
            // console.log('can not send request change password')
        })
    }
};

export const sendSms= ()=>{

    return{
        type: action.SETAUTHSENDSMS
    }
}

export const sensSMSinit=(dt)=>{

    return dispatch=>{
        dispatch(startauth());

        axios(apidomain + 'sendsms',{
            headers: {'Content-Type':'application/json'},
            method:'post',
            data: dt
        }).then(res=>{

            if(res.data){
                
                dispatch(sendSms());
                ShowAlert([],'???????????????? ?????????? ????.','success');
                sendcookie('car',res.data.data)
            }
        }).catch(er=>{
            console.clear()
                dispatch(errorauth());
        })
    }
}

export const updateprof =()=>{
        return{
            type: action.UPDATEPROFILE
        }
}
export const UpdateProfile=(data, btndis)=>{

    return dispatch=>{
        dispatch(startauth());
        axios(apidomain + `/auth/updateprofile/${data._id}`,{
            method:'patch',
            data: data,
            headers: {"Authorization": `Bearer ${cookiejwt}`}
        }).then(res=>{

            if(res.data){
                ShowAlert([], '?????????????? ???? ???????????? ?????????? ????','success');
                dispatch(updateprof());
                window.location.reload()
            }
            btndis = true
        }).catch(er=>{
            dispatch(errorauth());
            console.clear()
            ShowAlert([],'?????????????? ?????????? ??????', 'fail')
        })
    }
}

export const SENDREQ=()=>{
    return{
        type: action.SENDREQ,
        
    }
}

export const sendreq= (data, authdt)=>{

    return dispatch=>{
        dispatch(startauth())
        axios(apidomain + `/auth/sendreq?_id=${authdt?authdt:''}`,{
            method:'post',
            data: data,
            headers:{'Authorization': `Bearea ${cookiejwt}`}
        }).then(res=>{

            if(res.data){
               
                if(cookiejwt){
                    ShowAlert([], '?????????????? ?????? ???? ???????????? ?????? ????','success')
                    setTimeout(()=>{
                        window.location.reload()
                    },[2000])
                
            }else {
                localStorage.setItem('phn',  data.PhoneNumber);
                window.location.hash = '/sendsmscode';
                ShowAlert([], '???????? ???? ???????????? ???? ???????? ????????','success')
                dispatch(setauthlogin("#/sineup"));
            }
          

            }
        }).catch(er=>{
            console.clear()
            dispatch(errorauth())
            ShowAlert([],'?????????????? ???????? ?????? ???????? ?????? ????????','fail')
        })
    }
}

export const expires= (time)=>{
    return{
        type: action.EXPIRESCODE,
        time: time
    }
}

export const deleteexp=(time)=>{

    return dispatch=>{
        dispatch(expires(time))
    }
}
 

export const changepassword=(data)=>{
     return dispatch=>{
         axios(apidomain + '/auth/changepassword',{
             method:'post',
             data:data,
             headers:{'Authorization':`Bearer ${cookiejwt}`}
         }).then(res=>{
             if(res.data){
                ShowAlert([],'?????? ???? ???????????? ?????? ????', 'success')
                setTimeout(() => {
                    window.location.reload() 
                }, 2000);
                
               
             }
         }).catch(er=>{
            console.clear()
            ShowAlert([],'?????????????? ???????? ?????? ???????? ?????? ????????','fail')
         })
     }
}

export const startchangerole=()=>{
    return{
        type: action.STARTCHANGEROLE
    }
}


export const changeroleget=(changerole)=>{
    return{
        type: action.FINDPHONENUMBER,
        data: changerole
    }
}

export const fineduserinit=(data)=>{
    return dispatch=>{
            dispatch(startchangerole())
            
        axios(apidomain + `/auth/changerole/${data}`,{
            method:'get',
            headers:{'Authorization':`Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
               ShowAlert([], ' ???? ???????????? ?????????? ????','success');
               dispatch(changeroleget(res.data.data))
              
            }
        }).catch(er=>{
            console.clear()
           ShowAlert([],'???? ???????????? ?????????? ??????','fail')
        })
    }
}

export const changerole=(changerole)=>{
    return{
        type: action.CHANGEROLE,
        data: changerole
    }
}

export const changeroleinit=(data, number)=>{
    return dispatch=>{
        dispatch(startchangerole())
        
        axios(apidomain + `/auth/changerole/${number}`,{
            method:'patch',
            data:data,
            headers:{'Authorization':`Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
               ShowAlert([], ' ???? ???????????? ?????????? ????','success');
               dispatch(changerole(res.data.data))
              
            }
        }).catch(er=>{
            console.clear()
           ShowAlert([],'???? ???????????? ?????????? ??????','fail')
        })
    }
}


export const getadvisor= (data)=>{

    return{
        type: action.GETADVISOR,
        advisor: data
    }
}


export const getadvisorinit = (cityid, area )=>{

    return dispatch=>{

        axios(apidomain + `/auth/getadvisor?CityId=${cityid}&area=${area}`,{
            method:'get',
            headers:{'Authorization':`Bearer ${cookiejwt}`}
        }).then(res=>{
            if(res.data){
                
                dispatch(getadvisor(res.data.data));
            }
        }).catch(er=>{
            console.clear()
           
        })
    }
}