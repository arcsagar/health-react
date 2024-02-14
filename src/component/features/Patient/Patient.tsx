import Header from "../../module/Header/Header";
import { Outlet } from "react-router-dom";

const Patient = () => {
  const PatientPage = [
    { name: "Home", path: "home" },
    { name: "appointment", path: "appointment" },
    { name: "Booked appointment", path: "bookedappointment" },
    { name: "Setting", path: "setting" },
  ];

  return (
    <div>
      <Header pages={PatientPage} />
      <Outlet />
    </div>
  );
};

export default Patient;
