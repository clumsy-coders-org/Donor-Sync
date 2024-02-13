import { Schema, model } from "mongoose";

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Create schema for Users
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required:true },
    mobile: { type: Number, unique: true, required: true },
    password: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
    bloodGroup: { type: String, enum: bloodGroups, required: true },
    age: { type: Number, required: true },
   
});

// Create model for Users
const Users = model('Users', userSchema);

export default Users
