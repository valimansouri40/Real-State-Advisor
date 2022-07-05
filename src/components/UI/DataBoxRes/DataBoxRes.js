import React from "react";
import './DataBoxRes.css';


const DataBoxRes= (props)=>{
        const {OneData}= props

            const tsinclude=['آپارتمان','تجاری'];
    return(
        <div className="dbr-target">
                <div className="dbr-des-target">
                <div className="dbr-des-box">
                            <div className="gallery-labelbox">
                                <h3 className="gallery-label">
                                    توضیحات
                                </h3>
                                <span className="gallery-border"></span>
                            </div>
                            <div className="dbr-des-div">
                                    <p className="dbr-des-p">
                                        {OneData.Explain}
                                    </p>
                            </div>
                    </div>
                </div>
                <div className="dbr-des-target">
                <div className="dbr-des-box">
                            <div className="gallery-labelbox">
                                <h3 className="gallery-label">
                                    اطلاعات ملک
                                </h3>
                                <span className="gallery-border"></span>
                            </div>
                            <div className="dbr-datail-div">
                            <div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>شهر:</span> 
                            <span className='databoxps-spn'> {OneData.City} </span>
                            
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> منطقه :</span> 
                            <span className='databoxps-spn'> {OneData.Area} </span>
                            
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'>{OneData.Tab === 'sells'? 'قیمت':"رهن"}:</span> 
                            <span className='databoxps-spn'>   {(OneData.Mortgage * 1).toLocaleString()} </span>
                            
                             </h2>
                    </div>
                    {OneData.Lease? <div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'>اجاره:</span> 
                            <span className='databoxps-spn'>   {(OneData.Lease * 1).toLocaleString()} </span>
                            
                             </h2>
                    </div>:null}
                    {OneData.SomeRoom?<div className='databoxps-block'>
                           
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>تعداد اتاق خواب:</span> 
                            <span className='databoxps-spn'> {OneData.SomeRoom} </span>
                           
                             </h2>
                    </div>:null}
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> نوع ملک :</span> 
                            <span className='databoxps-spn'> {OneData.TypeState} </span>
                             </h2>
                    </div>
                    {tsinclude.includes(OneData.TypeState) ? <div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> طبقه :</span> 
                            <span className='databoxps-spn'> {OneData.Floors} </span>
                             </h2>
                    </div>:null}
                    {OneData.Kitchen?<div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>آشپز خانه:</span>  
                            <span className='databoxps-spn'> {OneData.Kitchen} </span>
                             </h2>
                    </div>:null}
                    {OneData.DocumentOnership?<div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> وضعیت مالکیت :</span> 
                            <span className='databoxps-spn'> {OneData.DocumentOnership} </span>
                            
                             </h2>
                    </div>:null}
                    {OneData.DocumentSituation?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> وضعیت سند :</span> 
                            <span className='databoxps-spn'> {OneData.DocumentSituation} </span>
                            
                             </h2>
                    </div>:null}

                    {OneData.PropertyDirection?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> جهت نما :</span> 
                            <span className='databoxps-spn'>
                                     {OneData.PropertyDirection}
                                      </span>
                            
                             </h2>
                    </div>:null}
                    {OneData.Service?<div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> سرویس :</span> 
                            <span className='databoxps-spn'>{OneData.Service} </span>
                            
                             </h2>
                    </div>:null}
                    {OneData.HeaterSystem?<div className='databoxps-block'>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>سیستم گرمایشی :</span> 
                            <span className='databoxps-spn'> {OneData.HeaterSystem} </span>
                             </h2>
                    </div>:null}
                    {OneData.PropertySituation?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> وضعیت اسکان ملک :</span> 
                            <span className='databoxps-spn'> {OneData.PropertySituation} </span>
                             </h2>
                    </div>:null}
                    {OneData.CoolerSystem?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> سیستم سرمایشی :</span>
                             <span className='databoxps-spn'>{OneData.CoolerSystem} </span>
                             </h2>
                            
                    </div>:null}
                    <div className="databoxps-block-id">
                   <h2 className='databoxsp-h2'>
                           <span className="databoxps-spn">آیدی ملک :</span>  
                           <span className="databoxps-spn">{OneData.RealStateNumber}</span>
                             </h2>
                  
                    </div>
                            </div>
                            <div className="gallery-labelbox">
                                <h3 className="gallery-label">
                                   جزئیات
                                </h3>
                                <span className="gallery-border"></span>
                            </div>
                        <div className="dbr-box-detail2">
                        
                        <div className="dbr-box-detail-field">
                        <h2 className='databoxsp-h2'>
                               انباری 
                             </h2>
                             {OneData.OfStorage?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                           
                           <div className="dbr-box-detail-field">
                           <h2 className='databoxsp-h2'>
                                   پارکینگ 
                             </h2>
                             {OneData.Parking ?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                    
                    
                   <div className="dbr-box-detail-field">
                       <h2 className='databoxsp-h2'>
                                    آسانسور
                             </h2>
                             {OneData.Assansor?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field">
                            <h2 className='databoxsp-h2'>
                                   تراس
                             </h2>
                             {OneData.Tras?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field">
                            <h2 className='databoxsp-h2'>
                                   نگهبان
                             </h2>
                             {OneData.Security?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field">
                            <h2 className='databoxsp-h2'>
                                  استخر
                             </h2>
                             {OneData.Pool?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field">
                            <h2 className='databoxsp-h2'>
                                 پاسیو
                             </h2>
                             {OneData.Pasio?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field">
                            <h2 className='databoxsp-h2'>
                                   سونا
                             </h2>
                             {OneData.Sona?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field">
                            <h2 className='databoxsp-h2'>
                                   جکوزی
                             </h2>
                             {OneData.Jacuzzi?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}


export default DataBoxRes; 