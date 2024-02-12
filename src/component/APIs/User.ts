import axios from "axios";
import { useContext } from "react";
import { userContext } from "../Main/Main";

export const callLogin = (loginObj: any) => {

    axios.post('http://localhost:3001/login',loginObj)
    .then( (response:any) =>  {
      console.log('response',response);
      if(response.data && response.data.status === 200){
      console.log("userData", response.data.userData);
          // contextData.setLoginUser(response.data.userData)
    }else {
      // contextData.setLoginUser({})
    }
    })
    .catch( (error:any) => {
      console.log('error',error);
    });
  }

export const getAllUsers = (token:string) => {
 return axios({
    method:"Get",
    url: "http://localhost:3001/alluser", 
    responseType: 'json',
    headers: {Authorization: `Bearer ${token}`}
   
})

 
}