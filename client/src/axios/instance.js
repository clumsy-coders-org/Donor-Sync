


import axios from "axios"

const baseurl="https://donor-sync-backend.onrender.com"



// "http://localhost:3001"




const instance=axios.create({

     baseURL:baseurl
})


export default instance