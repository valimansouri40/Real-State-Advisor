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
    return(
        <div className='gallery-target' >
            <div className="gallery-frame">
            <div className="gallery-labelbox">
                <h3 className="gallery-label">
                    گالری
                </h3>
                <span className="gallery-border"></span>
            </div>
            <div className='gallery-Frist'>
            {Image.length > 1?<span className='gallery-lessnum' onClick={lastMyImage}></span>:null}
                    <img src={`data:image/jpeg;base64,${Image[num]}`} className='gallery-frist-img' />
                    {Image.length > 1?<span className='gallery-addnum' onClick={nextMyImage}></span>:null}
            </div>
            <div  className='gallery-imagerow'>
                   {  Image.map((mp, i)=><div onClick={()=>changefullimage(i)}
                    className={i === num?'gallery-imagerow-box-active':'gallery-imagerow-box'}>
                            <img src={`data:image/jpeg;base64,${mp}`} className='gallery-img' />
                    </div>)}
                    
            </div>
            </div>
        </div>
    )
}

export default Gallery;
