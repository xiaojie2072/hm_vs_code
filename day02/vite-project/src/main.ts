import axios from "axios";
import jquery from "jquery";
 const axiosInstance= axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
})
axiosInstance.get('/api/user').then(res=>{res.data})

jquery.fn.extend({
})