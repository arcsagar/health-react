import { useContext, useEffect, useRef, useState } from "react";
import { userContext } from "../../Main/Main";
import Header from "../../module/Header/Header";
import CardComp from "../../module/CardComp/CardComp";
import { Button } from "@mui/material";
import Users from "./Users/Users";
import { Outlet } from "react-router-dom";

const Doctor = () => {
  const [whichPage, setWhichPage] = useState("users");





  
  const DoctorPage = [
   { name: "Home", path: 'home'},
   { name: "users", path: 'users'},
   { name: "Schedule Timing", path: 'timing'},
   { name: "Booked appointment", path: 'bappointment'},
   { name: "Setting", path: 'setting'}
  ]

  const changePage = (page: string) => {
    console.log('page',page)
    setWhichPage(page);
  }

  return (
    <>
      <Header pages={DoctorPage}  changePage={changePage} />
      {/* {whichPage !== 'users' && (
        <>
          <div id="main-div">
            <h1>This is dummy elem</h1>
          </div>
          <div
            style={{
              padding: "50px",
              width: "60%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <CardComp title="title" count="45" />
            <CardComp title="title" count="45" />
            <CardComp title="title" count="45" />
          </div>
        </>
      )}
      {whichPage === 'users' && <Users />
      } */}

      <Outlet />
    </>
  );
};

export default Doctor;
