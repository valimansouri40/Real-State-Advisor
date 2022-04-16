import React from "react";
import './DeleteBox.css';
import searchIcon from '../../../assets/icons/icons8-search-50.png'
import deleteIcon from '../../../assets/icons/icons8-trash-can-64.png'

const DeleteBox=(props)=>{
    const {data,  setsearch, findhandller, deleterealstatepost}=props;
        let array;
        if(data){
            array =data.length >0? Object.entries(data[0]):null
        }

        const keyPressHandller=(e)=>{
                if(e.charCode === 13){
                    findhandller()
                }
        }
    return(
        <div className='boxdt'>
           <div className='findbox'>
               <input type='text' className='inp' onKeyPress={keyPressHandller} onChange={(e)=>setsearch(e.target.value)} />
               <img src={searchIcon}  onClick={findhandller} className='find' />
               </div> 
            <div className='showdata'>
                {data?data.length >0?<img src={deleteIcon} className='delete' onClick={deleterealstatepost}/>:null:null}
                {data?data.length >0?array.map((mp,index)=>(
                   <> 
                   <p className='showsome' 
                   style={{padding:'1rem'}}>{mp[0] + ' : ' + mp[1]} </p>

                    </>
                )):'!!موردی یافت نشد':null}
            </div>
        </div>
    )
}
export default DeleteBox;
