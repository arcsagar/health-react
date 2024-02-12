import { Box, Card, TextField, Button } from "@mui/material";
import { useState } from "react";
import styless from "../Auth.module.scss";
import { allUsers } from "../../../DummyData/UserData/UserData";
const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [city, setCity] = useState("");


  const singUpFormSubmit = (e:any ) => {
    console.log('singUpFormSubmit e',e)

    allUsers.push({
      name: "doctor2",
      city: "city2",
      state: "MH",
      age: 31,
      password: "12345678",
      username: "doctor2",
      speciality: "Heart",
      mobilenumber: 123456783,
      email: "doctor2@gamil.com",
      userType: 'doctor'
    },)
    e.preventDefault();
    // setLoginUser({name: "arc"})
  }


  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form className={styless["singupForm"]}  onSubmit={(e) => singUpFormSubmit(e)}>
        <h1>Sing Up Form</h1>
        <TextField
          id="outlined-basic"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label="speciality"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          variant="outlined"
        />
        <Button variant="contained" type="submit" color="success">
          sign up
        </Button>

        <span>
          already have an account ?
          <Button onClick={() =>console.log('sign up')} variant="text">
            Sing In
          </Button>
        </span>
      </form>
    </Box>
  );
};

export default SingUp;
