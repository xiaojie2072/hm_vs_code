// npm i axios                      源码中自带类型声明文件
import axios from "axios";
// npm i jquery                     源码中未带类型声明文件
// npm i --save-dev @types/jquery   需额外添加类型声明文件
import jquery from "jquery";
import {add,point} from './utils/add'
 const axiosInstance= axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
})
axiosInstance.get('/api/user').then(res=>{res.data})

jquery.fn.extend({
})

add(1,2)

point({x:1,y:2})