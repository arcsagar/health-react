import { Box } from "@mui/material";

import SignIn from "./SignIn/SignIn";
import { useState } from "react";
import SingUp from "./SingUp/SingUp";

const Auth = () => {
  const [isSingUp, setIsSignUp] = useState(false);

  return (
    <div>
      {/* <Box>
        {isSingUp ? (
          <SingUp setIsSignUp={setIsSignUp}  />
        ) : (
          <SignIn setIsSignUp={setIsSignUp}  />
        )}
      </Box> */}
    </div>
  );
};

export default Auth;
