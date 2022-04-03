import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './BuildSampel.css';
import * as action from '../../store/action/index';
import picture from '../../assets/icons/icons8-picture-64.png';
import close from '../../assets/icons/icons8-close-50.png'

const BuildSampel=(props)=>{
        const { getallwsinit, postwsinit, deletewsinit, workSampel}=props;
   
        const [tabs, settab]= useState('mapdesign');
        const [img, setimg]= useState();
        const [txt, settxt]= useState('');
        const [passage, setpassge]= useState('');
        console.log(tabs)
        const changeTabs=(e)=>{
            settab(e.target.value)
            setpassge('');
            settxt('');
            setimg();        }
        useEffect(()=>{
            console.log(tabs)
                getallwsinit(1,10,`Tab=${tabs}`);
        },[getallwsinit, tabs])

        const getBase64 = (file) => new Promise(function (resolve, reject) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject('Error: ', error);
        })

        const imghdl=(e)=>{
                getBase64(e.target.files[0]).then(result=>setimg(result));
           
        }
        const submithandllerss=()=>{
            
            const data= {
                Tab:tabs,
                Img:img,
                Text:txt ,
                Passage: passage
            }
            console.log(data)
        postwsinit(data);
        }
        const switcharr= ['Registrationwork','Advocacy', 'ExpertofJustice', 'endofwork', 'lisense']
        console.log(switcharr.includes(tabs), tabs)
        const arr={'mapdesign':'طراحی نقشه',
        'Mapping':'نقشه برداری',
        'Registrationwork':'کار های ثبتی',
        'Advocacy':'وکالت دادگاهی',
        'Executionandconstruction':' اجرا و ساخت',
        'ExpertofJustice':' کارشناس دادگستری',
        'endofwork':' پایان کار',
        'License ':'جواز'}
    return(
        <div className='sampel-target'>
            <div className='sampel-box'>
                <div className='sampel-buildbox'>
                <div style={{display:'flex', alignItems:'center',justifyContent:'center'}} class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class={tabs !== 'mapdesign'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='mapdesign' >طراحی نقشه</button>
                        <button class={tabs !== 'Mapping'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Mapping' >نقشه برداری</button>
                        <button class={tabs !== 'Registrationwork'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Registrationwork' >کار های ثبتی</button>
                        <button class={tabs !== 'Advocacy'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Advocacy' >وکالت دادگاهی</button>
                        <button class={tabs !== 'Executionandconstruction'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='Executionandconstruction' >اجرا و ساخت</button>
                        <button class={tabs !== 'ExpertofJustice'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='ExpertofJustice' >کارشناس دادگستری</button>
                        <button class={tabs !== 'endofwork'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='endofwork' >پایان کار</button>
                        <button class={tabs !== 'lisense'?"nav-link ":"nav-link-active"} onClick={changeTabs} value='lisense' >جواز</button>
                    </div>
                    <div className='sampel-form' >
                        {!switcharr.includes(tabs) ?
                        <React.Fragment><label className='sampel-label' for='picture'>
                             <img src={picture} className='sampel-label-img'/>
                        انتخاب تصویر</label>
                        <input type='file' multiple id='picture' accept='image/jpeg , image/png'
                         style={{display:'none'}}
                         onChange={imghdl}  />
                         <input type='text' placeholder='متن' 
                         className='sampel-text' value={txt} onChange={(e)=>settxt(e.target.value)} /></React.Fragment>:
                         <textarea value={passage} onChange={(e)=>setpassge(e.target.value)}></textarea>}
                         {/* <input type='submit' className='sampel-submit' value='ارسال'/> */}
                         <button onClick={submithandllerss}>ثبت</button>
                    </div>
                </div>
                <div className='card-tg' style={{width:'100%', minHeight:'100vh', display:'flex', alignItems:'flex-start',justifyContent:'space-around', flexFlow:'row wrap'}} >
                            {workSampel?workSampel.map(mi=>(
                                <div style={{width:'200px', height:'300px', background:'blue'}} 
                                className='card-bx'>
                                            <img src={close} width='20px'
                                            height='20px' onClick={()=>deletewsinit(mi._id)} />
                                           { mi.Image?<img className='card-img'
                                            width='150px' height='150px'
                                             src={`data:image/jpeg;base64,${mi.Image}`} />:null}
                                             <h1 className='card-head'>{arr[mi.Tab]} </h1>
                                             <p className='card-txt'>{mi.Text}</p>
                                            <p className='card-txt'>{mi.Passage}</p>
                                    </div>
                            )):null}
                </div>
            </div>
        </div>
    )
}


const MapStateToProps=state=>{

    return{
        workSampel: state.sampel.data
    }
}

const MapDispatchToProps=dispatch=>{

    return{
        getallwsinit: (page, limit, query)=> dispatch(action.getallwsinit(page,limit,query))
        , postwsinit:(data)=> dispatch(action.postwsinit(data)),
         deletewsinit: (id)=> dispatch(action.deletewsinit(id))
    }
}


export default connect(MapStateToProps,MapDispatchToProps)(BuildSampel)