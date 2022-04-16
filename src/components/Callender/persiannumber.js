
exports.toPersian=(num)=>{

    const per=['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    const latin=['0','1','2','3','4','5','6','7','8','9'];
    let dateLatin= num;
        // console.log(num)
        const lng1= dateLatin.lenght;
    for(let i=0; i <= 10; i++){
            //console.log(i)
        for(let j=0; j <= 10; j++){
                    // console.log(num[i] , per[j])
                if(num[i] === latin[j]){
                    dateLatin= dateLatin.replace(dateLatin[i],per[j])
                }
        
        }
    }
    // console.log(dateLatin)
    return dateLatin;
}