


import axios from "axios"

const baseurl="http://localhost:3001"



// "http://localhost:3001"




const instance=axios.create({

     baseURL:baseurl
})


export default instance