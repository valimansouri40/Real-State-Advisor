import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import "./SearchResult.css";
import * as action from '../../store/action/index';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import SearchRs from "../../components/SearchResult/SearchResult";
import CloseComponent from "../../components/CloseComponent/CloseComponent";

const SearchResult= (props)=>{
        const {areaall,cityall,length,   addMarkinit, lessmarkinit, 
             getallfilterinit,AllData, changefilehandller,filter, auth, sendreq, REALSTATEGETALLINIT}= props;
            
            const [page, setpage]=useState(1)
            const [tab, settab]=useState('');
            const searchquery = window.location.pathname;
            useEffect(()=>{
                if(searchquery.includes("Tipic=rahn")){
                      settab("rahn");
                }else{
                    settab('sells')
                }
            },[])
        
            
        const [data, setdata] = useState({
            Tipic: "sells",
            City: "",
            Area: "",
            SomeRoom: "",
            TypeState: "",
            Mortgage: "",
            Lease:"",
            YearBuild: "",
            Measure: "",
            Parking: false,
            OfStorage: false,
            Pasio: false,
            Pool: false,
            Security: false,
            Sona: false,
            Assansor: false
        })
       

        useEffect(()=>{
            changefilehandller("", 'getallcity','')
        },[])
        useEffect(()=>{
            
                getallfilterinit(data.Tipic === "rahn"?'rh':'sell');
                
        },[data])
       
        const setvalueHandller =(value, id)=>{
           
            let spobj = {...data};
            if(value === 'rahn' && value === 'sells'){
               spobj.Mortgage = '';
               spobj.Lease = '';
            }
            

            spobj = {
                ...data,
                [id]:value
            }

            // console.log(spobj);
            setdata(spobj)
        }
        let userid= null;
        if(auth){
            userid= auth._id
        }
        const searchhandller=(e)=>{
            
    
            const obj= Object.entries(data);
              
            let st= '';
            obj.map((mp,i)=>{
                if(mp[0] === 'Measure' || mp[0] ===  'YearBuild' ||mp[0] === 'Mortgage' || mp[0] === 'Lease'){
                   if(mp[1]){
                    st = st + mp[1]
                } 
                }else if(mp[1] !== '' && mp[1] !== false && mp[1]){
                    st = st + `&${mp[0]}=${mp[1]}`
                }
            })
            // window.location.assign(`${'Tipic='+ tab+ ''}${st}#/search`);
            // let searchParams = new URLSearchParams(st);
            // console.log(searchParams)
            let newurl = window.location.protocol + "//" + window.location.host + '/' + '#/search?'+ st ;
            
            window.history.pushState({}, '', newurl)
             REALSTATEGETALLINIT(page, `${ st }${userid?"&_id=" + userid:""}` )
             setTimeout(() => {
                if(window.innerWidth < 800){
                    
                        window.scrollTo({
                            top:800,
                            left: 0,
                            behavior: "smooth"
                        })
                    }
                    }, 100);
        }
            
        const setareahandller=(e)=>{
            
            if(e && e !== 'شهر' && e !== ""){
                const citid= cityall.find(er=>  er.name === e);
                setvalueHandller(e, "City");
              
               changefilehandller("", 'getallarea',`id=${citid._id}`)
            //    setarea('')
            // setvalueHandller("", "Area");
       }else{
        setvalueHandller("", "City");
        setvalueHandller("", "Area");
    }
        }

    
       
    
    return(
        <div className="srch-target">

        <Header tab={tab} settab={settab} auth={auth} sendreq={sendreq} ></Header>
        <CloseComponent>
        <section class="container-search">
        <section class="blog-post">
        <SearchRs   page={page} setpage={setpage}
                    REALSTATEGETALLINIT={REALSTATEGETALLINIT} 
                    length={length} filter={AllData} auth={auth}
                    addMarkinit={addMarkinit} lessmarkinit={lessmarkinit}
                    />
        </section>
        <aside class="filter-asid">
            <div className="filter-asid-fixed">
            {/* <div class="map type-asid">
                <h3 class="h3-asid">جستجو با محدوده</h3>
                <img class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, '')} src="img/map.png" alt="map"/>
            </div> */}

            <div class="type-tride type-asid">
                <h3 class="h3-asid">نوع معامله</h3>

                <div class="type-tride-btn">
                    {/* <button class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, '')}>همه</button>
                    <button>پیش فروش</button> */}
                    <button className={data.Tipic === 'rahn'?"button-tipic-active":"button-tipic"} 
                    onClick={()=>{
                    setvalueHandller('rahn', 'Tipic');
                }} >رهن و اجاره</button>
                    <button className={data.Tipic === 'sells'?"button-tipic-active":"button-tipic"} 
                    onClick={()=>{
                     setvalueHandller('sells', 'Tipic');
                     
                     }}>فروش</button>
                   {/*  <button>مشارکت در ساخت</button> */}
                </div>

            </div>
            <div class="type-home type-asid">
                <button className="search-button" onClick={searchhandller}>جستجو</button>
                </div>
            <div class="type-home type-asid">
                <select className="type-asid-field" onChange={(e)=>{
                    console.log()
                    setvalueHandller(e.target.value, "TypeState")
                }} name="" id="">
               
                    <option value=''>نوع ملک</option>
                    <option >آپارتمان</option>
                    <option >ویلایی</option>
                    <option >باغ</option>
                    <option >تجاری</option>
                    <option > صنعتی</option>
                    <option > مزروعی</option>
                    
                </select>
            </div>
            <div class="type-home type-asid">
                
                <input type="search"  className="type-asid-field" list="sellscity" 
                
                placeholder="شهر"
                name="sl1"
                onChange={(e)=>setareahandller(e.target.value)} />
                <datalist  id="sellscity"   >
            {cityall?cityall.map(mp=>(
                <option className='option'>
                    {mp.name}</option>
            )):""}
        </datalist>
                
            </div>
            <div class="type-price type-asid">
            <input type="search" className="type-asid-field" list="sellsarea" 
                value={data.Area}
                name="sl2"
                placeholder="منطقه"
                onChange={(e)=>setvalueHandller(e.target.value,"Area")}
                disabled={areaall && data.City !== ''?false:true} />   
           <datalist id="sellsarea"  value={data.Area}
            disabled={areaall && data.City !== ''?false:true} 
            >
            {areaall?areaall?.map(mp=>(
                <option className='option' 
                >
                    {mp.areaName}</option>
            )):""}
            
</datalist>

            </div>
            {filter?<div  class="type-price type-asid">
                <select value={data.Mortgage} onChange={(e)=>
                    setvalueHandller(e.target.value , "Mortgage")
                } className="type-asid-field" name="" id="">
                     <option value=''> قیمت</option>
                    {filter.Price.map(mp=>(
                       <option value={mp.value} >
                            {mp.text}
                       </option>
                   ))}
                </select>
            </div>:null}
            { data.Tipic === 'rahn' && filter?.Lease?<div  class="type-price type-asid">
                <select className="type-asid-field" value={data.Lease} onChange={(e)=>
                    setvalueHandller(e.target.value , "Lease")
                } name="" id="">
                    <option value=''> اجاره</option>
                    {filter?.Lease.map(mp=>(
                       <option value={mp.value} >
                            {mp.text}
                       </option>
                   ))}
                </select>
            </div>:null}
            {filter?<div  class="type-price type-asid">
                <select className="type-asid-field" onChange={(e)=>
                    setvalueHandller(e.target.value , "Measure")
                } name="" id="">
                     <option value='' > متراژ</option>
                    {filter.Measure.map(mp=>(
                       <option value={mp.value} >
                            {mp.text}
                       </option>
                   ))}
                </select>
            </div>:null}
    

            <div class="type-room type-asid">
                <select className="type-asid-field" onChange={(e)=>
                    setvalueHandller(e.target.value, "SomeRoom")
               }>
                    <option value=''>تعداد خواب</option>
                    <option >  یک خواب</option>
                    <option >دو خواب</option>
                    <option >سه خواب</option>
                    <option > چهار خواب</option>
                </select>
            </div>

            {filter?<div class="type-age-bana type-asid">
                <select className="type-asid-field" onChange={(e)=>setvalueHandller(e.target.value, 'YearBuild')} name="" id="">
                <option value=''> سال ساخت</option>
                {filter.YearBuild.map(mp=>(
                    <option value={mp.value}>{mp.text}</option>
                ))}
            </select>
            </div>:null}

            <div class="type-emkanat type-asid">
                <h3 class="h3-asid">امکانات</h3>
                <div className="box-asid">
                    <label className="label-asid">پارکینگ</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'Parking')} type="checkbox"/> 
                </div>
                <div className="box-asid">
                    <label className="label-asid">آسانسور</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'Assansor')} type="checkbox"/> 
                </div>
                <div className="box-asid">
                    <label className="label-asid">سونا</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'Sona')} type="checkbox"/> 
                </div>
                <div className="box-asid">
                    <label className="label-asid">نگهبان</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'Security')} type="checkbox"/> 
                </div>
                <div className="box-asid">
                    <label className="label-asid">استخر</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'Pool')} type="checkbox"/> 
                </div>
                <div className="box-asid">
                    <label className="label-asid">پاسیو</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'Pasio')} type="checkbox"/> 
                </div>
                <div className="box-asid">
                    <label className="label-asid">انباری</label>
                        <input class="mt-10" onChange={(e)=>setvalueHandller(e.target.checked, 'OfStorage')} type="checkbox"/> 
                </div>

            </div>
            </div>
        </aside>
    </section>
    </CloseComponent>
    <Footer/>
    </div>
    )
}

const MapStateToProps=state=>{
    return{
        AllData:state.realstate.AllData,
        areaall: state.realstate.areaall,
        cityall: state.realstate.cityall,
        auth: state.auth.data,
        filter: state.request.filter,
        length: state.realstate.length,
        Tab: state.realstate.Tab,
    }
}
const MapDispatchToProps= dispatch=>{
    return{
        changefilehandller:(dt, path, id)=>dispatch(action.changefilehandller(dt, path, id)),
        sendreq:(data,authdt)=> dispatch(action.sendreq(data, authdt)),
        REALSTATEGETALLINIT:(page,query,limit)=>dispatch(action.REALSTATEGETALLINIT(page,query,limit)),
        getallfilterinit:(qu)=>dispatch(action.getallfilterinit(qu)),
        addMarkinit: (data)=> dispatch(action.addmarkinit(data)),
        lessmarkinit: (id)=> dispatch(action.lessmarkinit(id))
    }
}
export default  connect(MapStateToProps, MapDispatchToProps)(SearchResult)