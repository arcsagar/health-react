import { Box, Button, Card, TextField } from "@mui/material";
import { useContext, useState } from "react";

import { getMethodFetch, loginFetch } from "../../APIs/LoginFetch";
import { useNavigate } from "react-router-dom";
import { setLS } from "../../Utils/Utils";
import { userContext } from "../../../App";

const SignIn = () => {
  const contextData = useContext(userContext);
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const loginObj = {
      email,
      password,
    };
    // console.log("loginObj", loginObj);

    const resData: any = await loginFetch(
      "http://localhost:3001/auth/login",
      loginObj
    );

    // console.log("loginFetch", resData);
    if (resData && (resData.status === 200 || resData.status === 201)) {
      localStorage.setItem("token", resData.token);
      // console.log("userData", resData.access_token);
      setLS("token", resData.data.access_token);

      const userProfile: any = await getMethodFetch(
        "http://localhost:3001/auth/profile",
        resData.data.access_token
      );
      // console.log("userProfile", userProfile);
      // console.log("contextData", contextData);
      contextData.setLoginUser(userProfile);

      navigate("/doctor");
    }
  };

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
        <Button variant="contained" onClick={login} color="success">
          Sing In
        </Button>

        <span>
          do not not Account ?{" "}
          <Button onClick={() =>  console.log("sing in")} variant="text">
            SingUp
          </Button>
        </span>
      </Card>
    </Box>
  );
};

export default SignIn;
