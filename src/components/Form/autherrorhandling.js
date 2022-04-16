
// import areas from './areas.json';
// const areas =require('./areas.json')

exports.autherrorhandling=(data,path)=>{

    
    let datasub;
    
    

    switch(path){
        case '#/login':
            datasub={
                PhoneNumber:data.PhoneNumber.value,
                Password:data.Password.value,
            }
            break;
        case '#/sineup':
            datasub={
                FristName:data.FristName.value,
                LastName:data.LastName.value,
                PhoneNumber:data.PhoneNumber.value,
                Password:data.Password.value,

            }
            break;
        case '#/forgotpassword':
            datasub={
                PhoneNumber:data.PhoneNumber.value,
              
            }
            break;
        case '#/resetpassword':
            datasub={
                Password:data.Password.value
            }
            break
        case '#/changepassword':
            datasub={
                NewPassword:data.NewPassword.value
            }
            break;
        case '#/sendsmscode':
            datasub={
                smspass:data.SMScode.value
            }
            break
        default: datasub = null;
            break
    }
    let dt=[];
    for(let key in data){
        dt.push({
            id:key,
            cng:data[key].valid,
            placeholder: data[key].eltype.placeholder
        })
    }
    const errorhandling=dt.filter(e=> e.cng!== true)

    return {dtsb:datasub , er:errorhandling}
}



exports.validateor=(value,rules)=>{
   
    let valid  = true;
    if(!rules){
        return true;
    }
    if(rules.required){
        valid = value.trim() !== '' && valid;
    }
    if(rules.max){
        valid = value.length <= rules.max && valid;
    }
    if(rules.min){
        valid = value.length >= rules.min && valid;
    }
    
if (rules.isPhoneNumber) {
    const pattern = new RegExp('^(\\0|0)?9\\d{9}$');
    
    valid = pattern.test(value) && valid;
}

if (rules.isNumeric) {
    const pattern = /^\d+$/;
    valid = pattern.test(value) && valid
}
   return valid;
   }


exports.secondsToTime=(expires)=>{
   
        
        const minutes= Math.floor(expires / 60 / 1000);
        const seconds= Math.floor((expires / 1000 / 3) )
        return {minutes:minutes, seconds:seconds}
  };


exports.citydata=(data)=>{
    return {
        "name":data.name.value,
        "id":data.id.value,
        "ostan":data.ostan.value,
        "shahrestan":data.shahrestan.value,
        "bakhsh":data.bakhsh.value,
        "weather" : data.weather.value
    } 
    
}

exports.areadata=(data, location)=>{
    return{
    "CityId": data.CityId.value,
   "areaName" : data.areaName.value,
   "Id": data.Id.value,
   "longtitude" : location.lng,
   "latitude" :location.lat,
   "locationDescription": data.locationDescription.value,
   "subwayAvailability" :  data.subwayAvailability.value,
   "busAndTaxi" :  data.busAndTaxi.value,
   "areaNature" :  data.areaNature.value,
   "areaTemplate": data.areaTemplate.value,
   "humanTissue" :  data.humanTissue.value,
    "ReginonalPrice": data.ReginonalPrice.value,
   "floorArea": data.floorArea.value,
   'landUse': data.landUse.value
    }
}