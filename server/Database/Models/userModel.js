const mongoose=require("mongoose");
const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Create schema for Users
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required:true },
    mobile: { type: Number, unique: true, required: true },
    password: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    bloodgroup: { type: String,  required: true },
    age: { type: Number, required: true },
    type: {type: String, required: true, }
   
});

// Create model for Users
const Users = mongoose.model('Users', userSchema);

module.exports = Users
