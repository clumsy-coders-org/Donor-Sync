




export default function validation(values){
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name === "") {
        errors.name = "Name is required!";
    }

    if(values.age === ""){
        errors.age = "Age is required!";
    }

    if(values.mobile === ""){
        errors.mobile = "Mobile No is required!";
    }

    if(values.bloodgroup === ""){
        errors.bloodgroup = "Enter the Blood Group"
    }

    if(values.district === ""){
        errors.district = "Enter a District"
    }

    if(values.city === ""){
        errors.city = " Please enter a City"
    }

    if(values.email === "") {
        errors.email = "Email is required";
    }
    else if(!email_pattern.test(values.email)) {
        errors.email = "Email did'nt match"
    } 

  
     return errors;
    
}





