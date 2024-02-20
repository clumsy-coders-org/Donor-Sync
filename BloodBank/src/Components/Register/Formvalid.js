





export const firstFormValid = (inputvalues, seterrmsg, seterrflag,setmobnext,formSubmit) => {


    let nameReg = new RegExp(/^[a-zA-Z ]{2,30}$/)
    
    let passReg = new RegExp(/^[0-9a-zA-Z ]{6,6}$/)
    let mobReg = new RegExp(/^[0-9 ]{10,10}$/)

    if (!inputvalues.name) {

        seterrmsg("Enter Your Full Name ")
        seterrflag(true)

    } else if (!nameReg.test(inputvalues.name)) {

        seterrmsg("Enter Valid Name ")
        seterrflag(true)


    } else if (!inputvalues.regnumber) {

        seterrmsg("Enter Your Register Number ")
        seterrflag(true)



    } else if (!inputvalues.mobile) {


        seterrmsg(" Enter Your Mobile Number ")
        seterrflag(true)


    } else if (!mobReg.test(inputvalues.mobile)) {


        seterrmsg(" Enter Valid Mobile Number ")
        seterrflag(true)

    } else if (!inputvalues.password) {

        seterrmsg(" Enter Your Password ")
        seterrflag(true)


    }else if(!passReg.test(inputvalues.password)){


        seterrmsg(" Enter Must 6 Digit Password ")
        seterrflag(true)


    }else if(!inputvalues.district){

        seterrmsg("Select Your District")
        seterrflag(true)
   
       }else if(!inputvalues.city){

           seterrmsg("Select Your City")
           seterrflag(true)
            
       }

    
    else{

        formSubmit()
        setmobnext(false)
         seterrflag(false)

    }


}



export const secondValidation=(inputvalues, seterrmsg, seterrflag,formSubmit)=>{


    if(!inputvalues.district){

         seterrmsg("Select Your District")
         seterrflag(true)
    
        }else if(!inputvalues.city){

            seterrmsg("Select Your City")
            seterrflag(true)
             
        }else{

                formSubmit()
                seterrflag(false)


            }

        

}