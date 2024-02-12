import { useState } from "react";
import Auth from "../Auth/Auth";
import React from "react";
import Admin from "../features/Admin/Admin";
import Doctor from "../features/Doctor/Doctor";
import Patient from "../features/Patient/Patient";
import ReactDom from "react-dom";
import AlertComp from "../module/Alert/AlertComp";

export const userContext = React.createContext<any>({});

const mainAlert = document.getElementById("main-alert");

const Main = () => {
  const [loginUser, setLoginUser] = useState<any>({});
  const [userData, setUserData] = useState<any>("user");
  const [openStatus, setOpenStatus] = useState(false);

  console.log('loginUser',loginUser)
  const providerObj = {
    loginUser,
    setLoginUser,
    userData,
    setUserData,
    openStatus,
    setOpenStatus,
  };
  return (
    <userContext.Provider value={providerObj}>
      {mainAlert &&
        ReactDom.createPortal(
          <AlertComp
            openStatus={openStatus}
            setOpenStatus={setOpenStatus}
            msg={"from login"}
          />,
          mainAlert
        )}
      {Object.keys(loginUser).length === 0 && <Auth />}
      {loginUser.type == "admin" && <Admin />}
      {loginUser.type == "patient" && <Patient />}
      {loginUser.type == "doctor" && <Doctor />}
    </userContext.Provider>
  );
};

export default Main;
