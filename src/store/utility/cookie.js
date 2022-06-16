
exports.cookiejwt= document.cookie.split(' ')[0].replace('car=','');
exports.apidomain=process.env.REACT_APP_API_URL;

exports.sendcookie=(name,token)=>{
    let date = new Date();
    date.setTime(date.getTime()+(50*24*60*60*1000));
    document.cookie = name + " = " + token + "; expires = " +date.toGMTString();
    
    
}

exports.deletecookie=()=>{
    let date = new Date();
    date.setTime(date.getTime()+(100));
    document.cookie = 'car' + " = " + "token" + "; expires = " +date.toGMTString();
  
    setTimeout(() => {
    window.location.hash = '/';
        window.location.reload();
    }, 1000);

}

exports.LimitRouter= {
    admin:['/','/search','/viewrealstate/','/buildrealstatepost','/myprofile','/myrequest','/myappointments', '/alladvisorappointments','/mymarks','/addarea','/addcity','/buildsampel','/realstateupdate/','/realstatemanger','/changerole','/allappointments','/commentmanagement','/allrequest','/changepassword'],
    employee:['/','/search','/viewrealstate/','/buildrealstatepost','/myprofile','/myrequest','/myappointments', '/alladvisorappointments','/mymarks','/addarea','/addcity','/buildsampel','/realstateupdate/','/realstatemanger','/changerole','/allappointments','/commentmanagement','/allrequest','/changepassword'],
    user: ['/','/','/allrequest','/changerole','/buildsampel','/addcity','/addarea','/commentmanagement','/alladvisorappointments','/buildrealstatepost'],
    advisor: ['/buildrealstatepost',
    '/myprofile',
    '/myrequest',
    '/alladvisorappointments',
    '/mymarks',
    '/changepassword',
    '/myappointments',
    '/',
    '/search',
    '/viewrealstate/:id'], 
    dealer:['/buildrealstatepost',
    '/myprofile',
    '/myrequest',
    '/alladvisorappointments',
    '/mymarks',
    '/changepassword',
    '/myappointments',
    '/',
    '/search',
    '/viewrealstate/:id'],
    unknowe: ['/sineup','/login','/','/search','/viewrealstate/:id','/forgotpassword', '/sendsmscode']
}



