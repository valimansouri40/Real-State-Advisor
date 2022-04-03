import React from "react";
// import './DataBoxDetail.css';



const DataBoxsp= (props)=>{
        const {dt}= props;
        console.log(dt)

        return(
            <div className='databoxps-box'>
                    saijdihsauidhuias
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> منطقه </span> :
                            <span className='databoxps-spn'> {dt.Area} </span>
                            
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>شهر</span> :
                            <span className='databoxps-spn'> {dt.City} </span>
                            
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'>قیمت</span> :
                            <span className='databoxps-spn'> {dt.Mortgage} </span>
                            
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>تعداد اتاق خواب</span> :
                            <span className='databoxps-spn'> {dt.SomeRoom} </span>
                           
                             </h2>
                    </div>

                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> نوع ملک </span> :
                            <span className='databoxps-spn'> {dt.TypeState} </span>
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'>آشپز خانه</span> : 
                            <span className='databoxps-spn'> {dt.Kitchen} </span>
                             </h2>
                    </div>
                    <div className='databoxps-block'>
                    <h2 className='databoxsp-h2'>
                    <span className='databoxps-spn'> وضعیت سند </span> :
                            <span className='databoxps-spn'> {dt.DocumentSituation} </span>
                            
                             </h2>
                             <h2 className='databoxsp-h2'>
                             <span className='databoxps-spn'></span> :
                            <span className='databoxps-spn'> {dt.DocumentOnership} </span>
                            
                             </h2>
                    </div>
                    <div>

                   { dt.OfStorage?<h2 className='databoxsp-h2'>
                               انباری دارد
                             </h2>:null}
                           { dt.Parking ?<h2 className='databoxsp-h2'>
                                   پارکینگ دارد
                             </h2>:null}
                    </div>
                    <div>
                   { dt.Assansor?<h2 className='databoxsp-h2'>
                                        آسانسور دارد
                             </h2>:null}
                           { dt.Tras ?<h2 className='databoxsp-h2'>
                                   تراس دارد
                             </h2>:null}
                    </div>
                   
                    <div>
                            <label>توضیحات</label>
                            <p className='databoxps-p'>
                                    {dt.Explain}
                            </p>
                    </div>
            </div>
        )

}

export default DataBoxsp