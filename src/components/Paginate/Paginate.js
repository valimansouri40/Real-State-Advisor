import React from "react";
import  './Paginate.css';

const Paginate=(props)=>{
        const {length,setpage,page}=props;
        const pages= Math.ceil(length /20);
        const scrolltopzero=()=>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
        }
    return(
       <div className="paginatebox">
            {page > 1?<button  onClick={(e)=>{setpage(e=>e-1);scrolltopzero()}} className="btnpage1"></button>:null}
            {page - 1 > 1?<button onClick={(e)=>{setpage(e.target.innerHTML * 1);scrolltopzero()}} className="btnpage">1</button>:null}
            {page > 3?<p  className="sp">...</p>:null}
            {page > 1?<button onClick={(e)=>{setpage(e.target.innerHTML * 1);scrolltopzero()}} className="btnpage">{page * 1 - 1}</button>:null}
            <button  className="btnpageactive">{page}</button>
            {pages  > page?<button onClick={(e)=>{setpage(e.target.innerHTML * 1);scrolltopzero()}} className="btnpage">{page * 1 + 1}</button>:null}
            {pages -2 > page?<p onClick={(e)=>{setpage(e.target.innerHTML * 1);scrolltopzero()}}  className="sp">...</p>:null}
            {pages-1  > page?<button onClick={(e)=>{setpage(e.target.innerHTML * 1);scrolltopzero()}} className="btnpage">{pages}</button>:null}
            {pages > page?<button onClick={(e)=>{setpage(e=> e + 1);scrolltopzero()}} className="btnpage2"></button>:null}
            
        </div>
    )
}

export default Paginate;