



import axios from "axios"

const baseurl="https://credot-test-backend.onrender.com"

// "https://credot-test-backend.onrender.com"


// "http://localhost:3001"




const instanse=axios.create({

     baseURL:baseurl
})


export default instanse