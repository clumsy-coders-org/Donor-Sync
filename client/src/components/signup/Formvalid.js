





export const firstFormValid = (inputvalues, seterrmsg, seterrflag,setmobnext) => {


    let nameReg = new RegExp(/^[a-zA-Z ]{2,30}$/)
    let ageReg = new RegExp(/^[0-9 ]{1,2}$/)
    let passReg = new RegExp(/^[0-9a-zA-Z ]{6,6}$/)
    let emailReg = new RegExp(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)

    if (!inputvalues.name) {

        seterrmsg("Enter Your Full Name ")
        seterrflag(true)

    } else if (!nameReg.test(inputvalues.name)) {

        seterrmsg("Enter Valid Name ")
        seterrflag(true)


    } else if (!inputvalues.age) {

        seterrmsg("Enter Your Age ")
        seterrflag(true)



    } else if (!ageReg.test(inputvalues.age)) {


        seterrmsg("Enter Valid Age ")
        seterrflag(true)


    } else if (!inputvalues.email) {


        seterrmsg(" Enter Your Email Id ")
        seterrflag(true)


    } else if (!emailReg.test(inputvalues.email)) {


        seterrmsg(" Enter Valid Email Id ")
        seterrflag(true)

    } else if (!inputvalues.password) {

        seterrmsg(" Enter Your Password ")
        seterrflag(true)


    }else if(!passReg.test(inputvalues.password)){


        seterrmsg(" Enter Must 6 Dight Password ")
        seterrflag(true)


    }else{

         setmobnext(false)
    }


}



export const secondValidation=(inputvalues, seterrmsg, seterrflag,formSubmit)=>{

    if(!inputvalues.district){

         seterrmsg("Select Your District")
         seterrflag(true)
    
        }else if(!inputvalues.city){

            seterrmsg("Select Your City")
            seterrflag(true)
             
        }else if(!inputvalues.bloodgroup){

            seterrmsg("Select Your Blood Group")
            seterrflag(true)
        
        }else if(!inputvalues.type){

            seterrmsg("Select Your Category")
            seterrflag(true)
        
        }else{


               formSubmit()
        }

        

}