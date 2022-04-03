import React, { useEffect, useState } from "react";
import classes from './Timer.css';



const Timer=(props)=>{
    const {timer, settime,expiresCode, deleteexp}= props;
    const [minutes, setminutes]=useState('00');
    const [seconds, setseconds]= useState('00');

    useEffect(()=>{
        if(expiresCode > 0){
            settime(expiresCode);
        }
    },[expiresCode])
        
    let interval;
    useEffect(()=>{
        if(timer >= 0){
             interval= setInterval(() => {                
                const second = timer % 60;
                const minute= Math.floor( timer / 60);

                const chgsecond= String(second).length === 1? `0${second}`:second;
                const chgminute= String(minute).length === 1? `0${minute}`:minute;

                setminutes(chgminute);
                setseconds(chgsecond);

                settime(e=> e - 1)
                if(timer === 1){
                    deleteexp(timer);
                }
            
        }, 1000);}
        return () => clearInterval(interval)
    },[ timer])

    return(
        <div className={classes.timer}>
            <span className={classes.minute}>{minutes}</span>
            :<span className={classes.minute}>{seconds}</span>
        </div>
    )
}

export default Timer;