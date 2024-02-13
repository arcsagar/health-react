import { useEffect, useState } from "react";
import { getAllUsers } from "../../../APIs/User";
import { getMethodFetch } from "../../../APIs/LoginFetch";
import { getLS } from "../../../Utils/Utils";

const Users = () => {
  const [users, setUsers] = useState<any>([]);

  const usersApi = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // const returnUsers = await getAllUsers(token);
        const token = getLS('token');
        if(token){
          const returnUsers = await getMethodFetch('http://localhost:3001/healthuser/allUser', token)
          console.log("returnUsers", returnUsers);
          setUsers(returnUsers);
        }
      } catch (error) {
        console.log("error", error);
        alert("no user found");
      }
    }
  };

  useEffect(() => {
    usersApi();
  }, []);

  return (
    <div>
      <h1>this is uusers component</h1>
      {users && users.length > 0 && users.map(() => (
        <p>users</p>
      ))}
    </div>
  );
};

export default Users;
