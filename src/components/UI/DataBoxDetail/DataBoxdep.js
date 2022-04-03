import React from "react";
// import './DataBoxDetail.css';



const DataBoxdep= (props)=>{
        const {dt}= props;
        console.log(dt)

        return(
            <div className='databoxps-box'>
                    saijdihsauidhuias
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> جهت نما </span> :
                            <span className='databoxps-spn'> {dt.PropertyDirection} </span>
                            
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> سرویس </span> :
                            <span className='databoxps-spn'> {dt.Service} </span>
                            
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> وضعیت اسکان ملک </span> :
                            <span className='databoxps-spn'> {dt.PropertySituation} </span>
                            
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'> سیستم گرمایشی </span> :
                            <span className='databoxps-spn'> {dt.HeaterSystem} </span>
                           
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> سیستم سرمایشی </span> :
                            <span className='databoxps-spn'> {dt.CoolerSystem} </span>
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>آشپز خانه</span> : 
                            <span className='databoxps-spn'> {dt.Kitchen} </span>
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> نوع ملک </span> :
                            <span className='databoxps-spn'> {dt.Entry} </span>
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>آشپز خانه</span> : 
                            <span className='databoxps-spn'> {dt.Kitchen} </span>
                             </h2>
                    </div>
                    <div>
                   { dt.Jacuzzi?<h2 className='databoxsp-h2'>
                                        جکوزی دارد
                             </h2>:null}
                           { dt.Tras ?<h2 className='databoxsp-h2'>
                                   تراس دارد
                             </h2>:null}
                    </div>
                    <div>
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
                    <div>
                   { dt.Security?<h2 className='databoxsp-h2'>
                                نگهبان دارد
                             </h2>:null}
                           
                    </div>
            </div>
        )

}

export default DataBoxdep;