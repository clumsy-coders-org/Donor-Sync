

const mongoose=require("mongoose");



const user=new mongoose.Schema({           // users schema creation 

       
       username:{
          type:String,
          require:true
       },

       email:{
         
           type:String,
           unique:true,
           require:true
       },

       password:{

            type:String,
            require:true
       },

       mobile:{

           type:String,
           require:true,
           unique:true
       },

       age:{

        type:String,
        require:true

       },

       bloodgroup:{

          type:String,
          require:true
       },
       district:{

         type:String,
         require:true
       },

       city:{
          
           type:String,
           require:true
       },
       usertype:{
 
          type:String,
          require:true
           
       }
});


const userSchema=mongoose.model("user",user);   

module.exports=userSchema ;

