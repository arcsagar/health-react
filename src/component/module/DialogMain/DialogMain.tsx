import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { postMethod } from "../../APIs/LoginFetch";

const DialogMain = ({
  open,
  setOpen,
  apEvent,
  appointmentApi
}: {
  open: any;
  setOpen: any;
  apEvent: any;
  appointmentApi: any
}) => {
  const [title, setTitle] = React.useState("");
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          console.log("apEvent", typeof apEvent.start);

          const newEvent = {
            start: apEvent.start,
            end: apEvent.end,
            startStr: apEvent.startStr,
            endStr: apEvent.endStr,
            allDay: apEvent.allDay,
            title,
            isDeleted: false,
          };
          const newAppointmentApi = await postMethod(
            "http://localhost:3001/appointment/create",
            newEvent
          );
          console.log('newAppointmentApi',newAppointmentApi)
          appointmentApi();
          handleClose();
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Add New Appointment schedule</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          name="title"
          label="appointment title"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">add event</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogMain;
