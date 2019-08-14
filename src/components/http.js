import axios from "axios";
//http request 拦截器
axios.interceptors.request.use(request => {
  return request;
});

//http response 拦截器
axios.interceptors.response.use(
  response => {

  }
);
export default {
  post:(url,data = {})=> {
    return new Promise((resolve,reject) => {
       axios.post(url,data)
        .then(response => {
          resolve(response.data);
        },err => {
          //reject(err)
        })
     })
  },
  get:()=> {

  }
}
