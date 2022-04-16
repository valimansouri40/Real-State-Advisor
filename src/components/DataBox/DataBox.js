import React, { useEffect, useState } from "react";
import DataBoxdep from "../UI/DataBoxDetail/DataBoxdep";
import DataBoxsp from "../UI/DataBoxDetail/DataBoxsp";
import './DataBox.css';
import Comment from "../Comment/Comment";

const DataBox=(props)=>{
        const {OneData, reviwegetinit,
        reviweandRatepostinit, auth, reviwes}= props;
        const [tabDatabox, settabdb]= useState('data');

        const changetabHandller=(e)=>{
                settabdb(e)
        }
        let detail;
        
            switch(tabDatabox){
                case 'data':
                    detail= <DataBoxsp dt={OneData}></DataBoxsp>
                    break;
                case 'dep':
                    detail= <DataBoxdep dt={OneData}></DataBoxdep>
                    break;
                case 'comment':
                    detail= <Comment reviwegetinit={reviwegetinit}
                    auth={auth} reviwes={reviwes} OneData={OneData}
                    reviweandRatepostinit={reviweandRatepostinit} ></Comment>
                    break;
            }
    return(
        <div className='databox-target'>
                <div className='databox-frame'>
                    <div style={{display:'flex'}} className='databox-tabbox'>
                    <button onClick={()=>changetabHandller('data')}
                     className={tabDatabox === 'data'?'databox-tab-active':'databox-tab'}>اطلاعات کلی</button>
                    <button onClick={()=>changetabHandller('dep')}
                     className={tabDatabox === 'dep'?'databox-tab-active':'databox-tab'}>جزئیات</button>
                    <button onClick={()=>changetabHandller('comment')}
                     className={tabDatabox === 'comment'?'databox-tab-active':'databox-tab'}>نظرات</button>
                    </div>
                    <div className='databox-box'>
                        {detail}
                    </div>
                </div>
        </div>
    )
}

export default DataBox;


