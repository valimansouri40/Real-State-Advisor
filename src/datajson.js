
///1.login
export const login= {
    PhoneNumber:{
        eltype:{
            type:"text",
            placeholder:'شماره تلفن همراه'
        },
        validation:{
            required:true,
            isPhoneNumber:true
        },
        img: <img width='40px' height='40px' src="https://img.icons8.com/windows/32/000000/phone.png"/>,
        value:'',
        touch:false,
        valid:false
    },
    Password:{
        eltype:{
            type:"password",
            placeholder:'پسوورد'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        img: <img width='40px' height='40px' src="https://img.icons8.com/ios-glyphs/32/000000/lock--v1.png"/> ,
        value:'',
        touch:false,
        valid:false
    }
};

///2.sineup
export const sineup= {
    PhoneNumber:{
        eltype:{
            type:"text",
            placeholder:'شماره تلفن همراه'
        },
        validation:{
            required:true,
            isPhoneNumber:true
        },
        value:'',
        touch:false,
        img: <img width='40px' height='40px' src="https://img.icons8.com/windows/32/000000/phone.png"/>,
        valid:false
    },
    Password:{
        eltype:{
            type:"password",
            placeholder:'پسوورد'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        img: <img width='40px' height='40px' src="https://img.icons8.com/ios-glyphs/32/000000/lock--v1.png"/> ,
        valid:false
    },
    FristName:{
        eltype:{
            type:"name",
            placeholder:'نام'
        },
        validation:{
            required:true,
            max: 20,
            min:2
        }
        ,
        value:'',
        img: <img width='40px' height='40px' src="https://img.icons8.com/windows/32/000000/collaborator-male.png"/>,
        touch:false,
        valid:false
    },
        LastName:{
            eltype:{
                type:"name",
                placeholder:'فامیل'
            },
            validation:{
                required:true,
                max: 20,
                min:2
            },
            value:'',
            img: <img width='40px' height='40px' src="https://img.icons8.com/windows/32/000000/collaborator-male.png"/>,
            touch:false,
            valid:false}
}

//3.forgotpassword
export const forgotpassword= {
    PhoneNumber:{
        eltype:{
            type:"text",
            placeholder:'شماره تلفن همراه'
        },
        validation:{
            required:true,
            isPhoneNumber:true
        },
        value:'',
        img: <img width='40px' height='40px' src="https://img.icons8.com/windows/32/000000/phone.png"/>,
        touch:false,
        valid:false
    },
};

///4.ressetpassword
export const ressetpassword= {
    Password:{
        eltype:{
            type:"password",
            placeholder:'پسوورد'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        img: <img width='40px' height='40px' src="https://img.icons8.com/ios-glyphs/32/000000/lock--v1.png"/> ,
        valid:false
    }
};


//5. sendSmScode

export const SMS= {
    SMScode:{
        eltype:{
            type:"password",
            placeholder:'کد ارسالی را وارد کنید'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        img: <img src="https://img.icons8.com/windows/32/000000/sms-token.png"/>,
        valid:false
    }
};

//6. addarea
export const adderea= {
    CityId:{
        eltype:{
            type:"text",
            placeholder:'CityId'
        },
        validation:{
            required:true,
            isNumeric:true
        },
        value:'',
        touch:false,
        valid:false
    },
    areaName:{
        eltype:{
            type:"text",
            placeholder:'areaName'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    Id:{
        eltype:{
            type:"text",
            placeholder:'Id'
        },
        validation:{
            required:true,
            isNumeric:true
        },
        value:'',
        touch:false,
        valid:false
    },
    locationDescription:{
        eltype:{
            type:"select",
            options:["منطقه میانی شهر","منطقه جنوبی شهر ","منطقه شمالی شهر" ],
            multiple: false,
            placeholder:'locationDescription'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    subwayAvailability:{
        eltype:{
            type:"text",
            placeholder:'subwayAvailability'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    busAndTaxi:{
        eltype:{
            type:"bol",
            placeholder:'busAndTaxi'
        },
        validation:{
            required:true,
           
        },
        value:false,
        touch:true,
        valid:true
    },
    areaNature:{
        eltype:{
            type:"text",
            placeholder:'areaNature'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    areaTemplate:{
        eltype:{
            type:"select",
            options:["بافت قدیمی","منطقه آپارتمانی","منطقه ویلایی" ],
            multiple: false,
            placeholder:'areaTemplate'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    humanTissue:{
        eltype:{
            type:"select",
            options:['بومی', 'بومی و مهاجر ', 'مهاجر ' ],
            multiple: false,
            placeholder:'humanTissue'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    ReginonalPrice:{
        eltype:{
            type:"text",
            placeholder:'ReginonalPrice'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    floorArea:{
        eltype:{
            type:"select",
            options:[' تراکم زیاد', ' تراکم متوسط', 'تراکم کم' ],
            multiple: false,
            placeholder:'floorArea'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    landUse:{
        eltype:{
            type:"multiplieselect",
            options:['کشاورزی','صنعتی','مسکونی', 'تجاری','باغات ' ],
            multiple: true,
            placeholder:'landUse'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
   
};

//7.addcity
export const addcity={
    name:{
        eltype:{
            type:"text",
            placeholder:'name'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    id:{
        eltype:{
            type:"text",
            placeholder:'id'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    ostan:{
        eltype:{
            type:"text",
            placeholder:'ostan'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    shahrestan:{
        eltype:{
            type:"text",
            placeholder:'shahrestan'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    bakhsh:{
        eltype:{
            type:"text",
            placeholder:'bakhsh'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
    weather:{
        eltype:{
            type:"text",
            placeholder:'weather'
        },
        validation:{
            required:true,
           
        },
        value:'',
        touch:false,
        valid:false
    },
}

//8.changepassword

export const changepassword={
    NewPassword:{
        eltype:{
            type:"password",
            placeholder:'پسوورد جدید را وارد کنید'
        },
        validation:{
            required:true,
            max: 20,
            min:6
        },
        value:'',
        touch:false,
        valid:false
    }
}