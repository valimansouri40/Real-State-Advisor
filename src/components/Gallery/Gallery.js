import React, { useState } from "react";
import './Gallery.css';


const Gallery=(props)=>{
        const {Image}= props;
        const [num, setnum]= useState(0);

        const changefullimage=(i)=>{
                    setnum(i)
        }
        const nextMyImage=()=>{

            if( num < Image.length - 1 ){
                    setnum(num=> num + 1)
            }else{
                setnum(0)
            }
            
        }
        const lastMyImage=()=>{
    
            if( 0 < num ){
                    setnum(num=> num - 1)
            }else{
                setnum(Image.length - 1)
            }
            
        }

        console.log(Image)
    return(
        <div className='gallery-target' >
            <div className='gallery-Frist'>
                    <span className='gallery-lessnum' onClick={lastMyImage}>{'>'}</span>
                    <img src={`data:image/jpeg;base64,${Image[num]}`} className='gallery-frist-img' />
                    <span className='gallery-addnum' onClick={nextMyImage}>{'<'}</span>
            </div>
            <div  className='gallery-imagerow'>
                   {  Image.map((mp, i)=><div onClick={()=>changefullimage(i)}
                    className={i === num?'gallery-imagerow-box-active':'gallery-imagerow-box'}>
                            <img src={`data:image/jpeg;base64,${mp}`} className='gallery-img' />
                    </div>)}
                    
            </div>
            
        </div>
    )
}

export default Gallery;


// <div style={{direction:'ltr'}} className='callender-date'>
//                        {/* <span className='callender-lessdate'></span>
//                         <p className='callender-'>{}</p>
//                         <span className='callender-adddate'></span> */}
//                         <input type='number' min='1401' max='1401'  defaultValue='1401' />/
//                         <input type='number' min='1' max='12' defaultValue='1' />/
//                         <input type='number' min='1' max='31' defaultValue='1'  />
//                    </div>