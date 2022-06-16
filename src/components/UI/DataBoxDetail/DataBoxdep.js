import React from "react";
// import './DataBoxDetail.css';



const DataBoxdep= (props)=>{
        const {dt}= props;


        return(
            <div className='databoxps-box'>
                   
                    {dt.PropertyDirection?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> جهت نما  : </span> 
                            <span className='databoxps-spn'>
                                     {dt.PropertyDirection}
                                      </span>
                            
                             </h2>
                    </div>:null}
                    {dt.Service?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> سرویس  : </span> 
                            <span className='databoxps-spn'> {dt.Service} </span>
                            
                             </h2>
                    </div>:null}
                    {dt.PropertySituation?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> وضعیت اسکان ملک  : </span> 
                            <span className='databoxps-spn'> {dt.PropertySituation} </span>
                            
                             </h2>
                    </div>:null}
                    {dt.HeaterSystem?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> سیستم گرمایشی  : </span> 
                            <span className='databoxps-spn'> {dt.HeaterSystem} </span>
                           
                             </h2>
                    </div>:null}
                    {dt.CoolerSystem?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> سیستم سرمایشی  : </span> 
                            <span className='databoxps-spn'> {dt.CoolerSystem} </span>
                             </h2>
                            
                    </div>:null}
                    {dt.Entry?<div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> ورود از : </span> 
                            <span className='databoxps-spn'> {dt.Entry} </span>
                             </h2>
                        
                    </div>:null}
                    {dt.Kitchen? <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>آشپز خانه : </span>  
                            <span className='databoxps-spn'>  {dt.Kitchen} </span>
                             </h2>
                    </div>:null}
                   
                    <div className="databoxps-block">
                   <h2 className='databoxsp-h2'>
                              آیدی ملک : {dt.RealStateNumber}
                             </h2>
                  
                    </div>
                    <div className="dbr-box-detail-field-big">
                        <h2 className='databoxsp-h2'>
                               انباری 
                             </h2>
                             {dt.OfStorage?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                           
                           <div className="dbr-box-detail-field-big">
                           <h2 className='databoxsp-h2'>
                                   پارکینگ 
                             </h2>
                             {dt.Parking ?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                    <div className="dbr-box-detail-field-big">
                    <h2 className='databoxsp-h2'>
                                    آسانسور
                             </h2>
                             {dt.Assansor?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field-big">
                            <h2 className='databoxsp-h2'>
                                   تراس
                             </h2>
                             {dt.Tras?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field-big">
                            <h2 className='databoxsp-h2'>
                                   نگهبان
                             </h2>
                             {dt.Security?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field-big">
                            <h2 className='databoxsp-h2'>
                                  استخر
                             </h2>
                             {dt.Pool?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field-big">
                            <h2 className='databoxsp-h2'>
                                 پاسیو
                             </h2>
                             {dt.Pasio?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field-big">
                            <h2 className='databoxsp-h2'>
                                   سونا
                             </h2>
                             {dt.Sona?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
                             <div className="dbr-box-detail-field-big">
                            <h2 className='databoxsp-h2'>
                                   جکوزی
                             </h2>
                             {dt.Jacuzzi?<img className="dbr-box-detail-img" 
                             src="https://img.icons8.com/fluency/48/000000/ok.png"/>:
                             <img 
                             className="dbr-box-detail-img" 
                             src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"/>}
                             </div>
            </div>
        )

}

export default DataBoxdep;


{/* <div className="databoxps-block">
{ dt.Jacuzzi?<h2 className='databoxsp-h2'>
                     جکوزی دارد
          </h2>:null}
        { dt.Tras ?<h2 className='databoxsp-h2'>
                تراس دارد
          </h2>:null}
 </div>
 <div className="databoxps-block">
{ dt.Sona?<h2 className='databoxsp-h2'>
            سونا دارد
          </h2>:null}
        { dt.Pasio ?<h2 className='databoxsp-h2'>
                پاسیو دارد
          </h2>:null}
 </div>
 <div>
{ dt.Labi?<h2 className='databoxsp-h2'>
             لابی دارد
          </h2>:null}
        { dt.Pool ?<h2 className='databoxsp-h2'>
                استخر دارد
          </h2>:null}
 </div>
 <div className="databoxps-block">
{ dt.Security?<h2 className='databoxsp-h2'>
             نگهبان دارد
          </h2>:null}

 </div> */}