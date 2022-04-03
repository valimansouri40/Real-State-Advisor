import React, { useEffect, useState } from "react";
import './TabRealState.css';
import video1 from '../../assets/icons/icons8-car-cleaning-48.png';
import Paginate from '../Paginate/Paginate';
import { Link } from "react-router-dom";
// import video from '../../assets/icons/icons8-car-cleaning-48.png';
// import video from '../../assets/icons/icons8-car-cleaning-48.png';
// import video from '../../assets/icons/icons8-car-cleaning-48.png';
// import video from '../../assets/icons/icons8-car-cleaning-48.png';


const TabRealState=(props)=>{
        const {REALSTATEGETALLINIT,length , filter}=props;
        console.log(length)
        const [Tab, settab]=useState('rahn');
        const [page, setpage]=useState(1)

        console.log(Tab)
        useEffect(()=>{

            REALSTATEGETALLINIT(1, `Tipic=${Tab}`)
        },[REALSTATEGETALLINIT, Tab])
            console.log(filter)
        const setvaluehd=(e)=>{
            settab(e.target.value);
        }
    return(
        <section class="posts">
    <div class="container">
        <div class="row">
            <div class="tabs">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button onClick={setvaluehd} className={Tab !==""?"nav-link":"nav-link active"} value="" >پیشنهاد ویژه سایت</button>
                        <button onClick={setvaluehd} className={Tab !=="rahn"?"nav-link":"nav-link active"}value="rahn" >رهن و اجاره</button>
                        <button onClick={setvaluehd} className={Tab !=="sells"?"nav-link":"nav-link active"} value="sells" >خرید ملک</button>
                        
                    </div>
                </nav>
                <div className="tab-content"  >
                  {filter? filter.map((mp,i)=>(
                      <div className='realstate-box'>
                          <div className='card-imbox'>
                            <img src={`data:image/jpeg;base64,${mp.Image[0]}`}
                             width='100px' height='100px' />
                            <span className="card-status">{mp.Tipic?"":""}</span>
                            <img src={video1} />
                          </div>
                          <div className='card-middle'>
                              <div className='card-headbox'>
                              <h2 className='card-head'>{mp.TypeState}</h2>
                                <h3 className='card-address'>{mp.Type}</h3>
                              </div>
                                <p className='field'>{`${mp.YearBuild} سال ساخت`}</p>
                                <p className='field'>{mp.TypeState}</p>
                                <p className='field'>{mp.Type}</p>
                                <p className='field'>{mp.SomeRoom}</p>
                                <p className='field'>{mp.Measure}</p>
                                <p className='field'>{mp.Mortgage}</p>
                                {/* <p className='field'>{mp.Flooring}</p>
                                <p className='field'>{mp.Balcony}</p>
                                <p className='field'>{mp.City}</p>
                                <p className='field'>{mp.Type}</p>
                                <p className='field'>{mp.HeaterSystem}</p>
                                <p className='field'>{mp.Floors}</p>
                                <p className='field'>{mp.PropertySituation}</p> */}
                                
                                </div>
                          
                          <button className="card-btn"><Link to={`/viewrealstate/${mp._id}`}> مشاهده صفحه </Link></button>
                          </div>
                  )):null}
                  
                   </div>
                   <Paginate setpage={setpage} page={page} length={length} />
            </div>
        </div>
    </div>
</section>
    )
}


export default TabRealState;
