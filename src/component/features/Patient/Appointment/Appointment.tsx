import { useContext, useEffect, useState } from "react";
import { getMethodFetch, postMethod } from "../../../APIs/LoginFetch";
import { getLS } from "../../../Utils/Utils";
import TableComp from "../../../module/TableComp/TableComp";
import { userContext } from "../../../../App";

const headers = [
  "id",
  "title",
  "startStr",
  "endStr",
  "start",
  "end",
  "allDay",
  "isDeleted",
  "isBooked",
  "healthuser",
  "actions",
];

const Appointment = () => {
  const [appointment, setAppointment] = useState<any>([]);
  const { loginUser } = useContext(userContext);

  const getAppointment = async () => {
    const token = getLS("token");
    if (token) {
      const resData = await getMethodFetch(
        "http://localhost:3001/appointment/nonbooked",
        token
      );
      console.log("resData", resData);
      setAppointment(resData);
    }
  };

  useEffect(() => {
    console.table(loginUser);
    getAppointment();
  }, []);



  const bookAction = async (appointment: any) => {
    console.log("appointment", appointment);

    const booked = await postMethod("http://localhost:3001/appointment/book", {
      id: appointment.id,
      patientId: loginUser.userId,
    });
    
    if(booked.data){
      alert('appointment is booked');
      getAppointment();
    }
    console.log('booked',booked)
  };
  return (
    <>
      <TableComp action={bookAction} headers={headers} rows={appointment} />
      {/* {
        appointment.length > 0 && appointment.map((ap:any) => {
            return(<p>{ap.id}</p>)
        })
      } */}
    </>
  );
};

export default Appointment;
