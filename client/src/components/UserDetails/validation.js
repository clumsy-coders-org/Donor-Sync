




export default function validation(values,dataSubmitFunc){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === "") {
        errors.name = "Name is required!";
        return errors;
    }

    if(values.age === ""){

        console.log("no age")
        errors.age = "Age is required!";
        return errors;
        
    }

    if(values.mobile === ""){
        errors.mobile = "Mobile No is required!";
        return errors;
    }

    if(values.bloodgroup === ""){
        errors.bloodgroup = "Enter the Blood Group"
        return errors;
    }

    if(values.district === ""){
        errors.district = "Enter a District"
        return errors;
    }

    if(values.city === ""){
        errors.city = " Please enter a City"
        return errors;
    }

    if(values.email === "") {
        errors.email = "Email is required";
        return errors;
    }
    
    else if(!email_pattern.test(values.email)) {
        
        errors.email = "Email did'nt match"
        return errors;
    
    } else{

        dataSubmitFunc(values)
    }

  return errors
     
    
}





