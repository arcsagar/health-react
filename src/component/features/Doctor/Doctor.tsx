import Header from "../../module/Header/Header";

import { Outlet } from "react-router-dom";

const Doctor = () => {
  const DoctorPage = [
    { name: "Home", path: "home" },
    { name: "users", path: "users" },
    { name: "Schedule Timing", path: "timing" },
    { name: "Booked appointment", path: "bappointment" },
    { name: "Setting", path: "setting" },
  ];

  return (
    <>
      <Header pages={DoctorPage} />

      <Outlet />
    </>
  );
};

export default Doctor;
