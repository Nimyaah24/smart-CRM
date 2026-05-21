
// // axios import cheyunnu api call cheyan
// import axios from "axios"

// // common api create cheyunnu
// const API = axios.create({
//     // backend base url
//     baseURL: "http://localhost:5000/api/user",

//     // cookie frontendiln backendilek send cheyan
//     withCredentials: true
// })

// // login api
// // login data backendilek send cheyunnu
// // export const loginUser = (data) => {


// //     return API.post("/login", data)
// // }

// // register api
// // register data backendilek send cheyunnu
// export const registerUser = (data) => {
//     return API.post("/register", data)
// }

// const baseURL= "http://localhost:5000/api/user"


// export const loginUser= async(data)=>{
//     const res = await fetch(`${baseURL}/login`,{
//         method:"POST",
//         headers:{
//             "content-Type":"application/json"
//         },
//         credentials:"include",
//         body:JSON.stringify(data)
//     })
//     return res.json()
// }



// backend base url
const baseURL = "http://localhost:5000/api/user";

// register api
export const registerUser = async (data) => {
  const res = await fetch(`${baseURL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

// login api
export const loginUser = async (data) => {
  const res = await fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};
