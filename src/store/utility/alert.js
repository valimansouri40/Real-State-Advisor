export const remowchild=()=>{
        const el= document.querySelector('#alert');
        if(el) el.parentElement.removeChild(el)

}

export const ShowAlert=(ms,text,cls,time=5000)=>{
    const art= `<div class="alert--${cls}" id="alert">
    ${' ' + ms.map((mp,index)=>mp.placeholder?' ' + mp.placeholder + ' ':
    ' ' + mp + ' ')+ ", " + text}</div>`;

    document.querySelector('body').insertAdjacentHTML('afterbegin',art);
    setTimeout(() => {
        remowchild();
    }, time);
}