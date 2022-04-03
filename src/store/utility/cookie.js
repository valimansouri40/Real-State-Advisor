exports.cookiejwt= document.cookie.split(' ')[0].replace('car=','');
exports.apidomain='http://localhost:8000/api/v1';

exports.sendcookie=(name,token)=>{
    let date = new Date();
    date.setTime(date.getTime()+(50*24*60*60*1000));
    document.cookie = name + " = " + token + "; expires = " +date.toGMTString();
    
    
}

