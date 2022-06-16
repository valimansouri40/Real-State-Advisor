import React from "react";

 import './DataBoxDetail.css';



const DataBoxsp= (props)=>{
        const {dt}= props;
        const tsinclude=['آپارتمان','تجاری'];
        return(
            <div className='databoxps-box'>
                    
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> منطقه  : </span> 
                            <span className='databoxps-spn'> {dt.Area} </span>
                            
                             </h2>
                            
                    </div>
                    <div className="databoxps">
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>شهر : </span> 
                            <span className='databoxps-spn'> {dt.City} </span>
                            
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'>{dt.Tab === 'sells'? 'قیمت':"رهن"} : </span> 
                            <span className='databoxps-spn'>   {(dt.Mortgage * 1).toLocaleString()} </span>
                            
                             </h2>
                          
                    </div>
                    {dt.Lease?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'>اجاره : </span> 
                            <span className='databoxps-spn'>   {(dt.Lease * 1).toLocaleString()} </span>
                            
                             </h2>
                    </div>:null}
                    {dt.SomeRoom?<div className='databoxps-block'>         
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>تعداد اتاق خواب : </span> 
                            <span className='databoxps-spn'> {dt.SomeRoom} </span>
                           
                             </h2>
                    </div>:null}
                    {dt.Measure?<div className='databoxps-block'>         
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>متراژ : </span> 
                            <span className='databoxps-spn'> {dt.Measure} متر </span>
                           
                             </h2>
                    </div>:null}
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> نوع ملک  : </span> 
                            <span className='databoxps-spn'> {dt.TypeState} </span>
                             </h2>
                          
                            
                    </div>
                    {dt.Floors && tsinclude.includes(dt.TypeState)?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> طبقه  : </span> 
                            <span className='databoxps-spn'> {dt.Floors} </span>
                             </h2>
                    </div>:null}
                   { dt.DocumentOnership?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> وضعیت مالکیت  : </span> 
                            <span className='databoxps-spn'> {dt.DocumentOnership} </span>
                            
                             </h2>
                    </div>:null}
                   { dt.DocumentSituation?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> وضعیت سند :</span> 
                            <span className='databoxps-spn'> {dt.DocumentSituation} </span>
                            
                             </h2>
                            
                    </div>:null}
                    { dt.Subject?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'>  عنوان  :</span> 
                            <span className='databoxps-spn'> {dt.Subject} </span>
                            
                             </h2>
                            
                    </div>:null}
                   
                    <div>
                            <label className="databoxps-label">توضیحات</label>
                            <p className='databoxps-p'>
                                    {dt.Explain}
                            </p>
                    </div>
            </div>
        )

}

export default DataBoxsp