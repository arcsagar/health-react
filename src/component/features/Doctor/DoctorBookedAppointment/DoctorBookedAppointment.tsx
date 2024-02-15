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

const DoctorBookedAppointment = () => {
  const [appointment, setAppointment] = useState<any>([]);
  const { loginUser } = useContext(userContext);

  const getAppointment = async () => {
    const token = getLS("token");
    if (token) {
      const resData = await getMethodFetch(
        "http://localhost:3001/appointment/doctorBookedAppointment",
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

  return (
    <>
      <TableComp headers={headers} rows={appointment} />
      {/* {
        appointment.length > 0 && appointment.map((ap:any) => {
            return(<p>{ap.id}</p>)
        })
      } */}
    </>
  );
};

export default DoctorBookedAppointment;
