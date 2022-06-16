const { toPersian } = require("../../Callender/persiannumber");


exports.changeprice=(price)=>{

    let pricestr= price * 1;

    if( pricestr >= 1000000000){
        const latin= pricestr / 1000000000
        const lk= toPersian(latin.toFixed(0));
        
        pricestr = ` ${lk} میلیارد تومان  `
    }else {
        const latin= pricestr / 1000000
        const lk= toPersian(latin.toFixed(0));
        pricestr = ` ${lk} میلیون تومان  `

    }

      
    return pricestr;
}

