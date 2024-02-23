import { Box, Card, TextField } from "@mui/material";
import {useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../MainStore/userStore/user.login";

const SignIn = () => {
  const {userdata} = useSelector((state:any) => state.user);
  console.log('userData',userdata);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
    <Card
      sx={{
        width: "400px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      variant="outlined"
    >
      <h1>Sign In Form</h1>
      <TextField
        id="outlined-basic"
        label="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
      />
      <button onClick={() => login({email,password}, dispatch , navigate)} color="success">
        Sing In
      </button>

      <span>
        do not not Account ?{" "}
        <button onClick={() =>  console.log("sing in")} >
          SingUp
        </button>
      </span>
    </Card>
  </Box>
  );
};

export default SignIn;
