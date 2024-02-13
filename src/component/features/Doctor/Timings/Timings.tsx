import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { getLS } from "../../../Utils/Utils";
import { getMethodFetch } from "../../../APIs/LoginFetch";
import { useEffect, useState } from "react";
import DialogMain from "../../../module/DialogMain/DialogMain";
const Timings = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>();
    const [appointment,setAppointment] = useState<any>([])
    const appointmentApi = async () => {
        const token = localStorage.getItem("token");
        if (token) {
          try {
            // const returnAppointment = await getAllUsers(token);
            const token = getLS('token');
            if(token){
              const returnAppointment = await getMethodFetch('http://localhost:3001/appointment', token)
              console.log("returnAppointment", returnAppointment);
              setAppointment(returnAppointment);
            }
          } catch (error) {
            console.log("error", error);
            alert("no user found");
          }
        }
      };
    
      useEffect(() => {
        appointmentApi();
      }, []);
      

    // https://github.com/fullcalendar/fullcalendar-examples/blob/main/react-typescript/src/DemoApp.tsx

  const handleDateSelect = (e: any) => {
    console.log("handleDateSelect e", JSON.stringify(e));
    setSelectedEvent(e)
    setOpen(true);
  };

  const handleEventClick = (e: any) => {
    console.log('handleEventClick e' ,e)
  }
  return (
    <div>
      <h1>timing page</h1>
      <DialogMain  setOpen={setOpen} open={open} apEvent={selectedEvent} appointmentApi={appointmentApi}/>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        selectable={true}
        initialEvents={appointment}
        select={handleDateSelect}
        eventClick={handleEventClick}
        initialView="dayGridMonth"
        events={appointment}
      />
    </div>
  );
};

export default Timings;
