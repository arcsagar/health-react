import { getMethodFetch, loginFetch } from "../../component/APIs/LoginFetch";
import { setLS } from "../../component/Utils/Utils";
import { setUserData } from "./user.reducer";

export const login = async (loginObj: any,dispatch: any, navigate:any) => {

    // console.log("loginObj", loginObj);

    const resData: any = await loginFetch(
      "http://localhost:3001/auth/login",
      loginObj
    );

    // console.log("loginFetch", resData);
    if (resData && (resData.status === 200 || resData.status === 201)) {
      localStorage.setItem("token", resData.token);
      // console.log("userData", resData.access_token);
      setLS("token", resData.data.access_token);

      const userProfile: any = await getMethodFetch(
        "http://localhost:3001/auth/profile",
        resData.data.access_token
      );
        dispatch(setUserData({userdata: userProfile}))

      if(userProfile.type === 'patient') {
        navigate("/patient/home");
      }else if (userProfile.type === 'doctor'){
        navigate("/doctor/home");
      }else if (userProfile.type === 'admin') {
        navigate("/admin/home");
      }
 
    }
  };
