import { useContext } from "react";
import { userContext } from "../../Main/Main";

const Admin = () => {

    const contextData = useContext(userContext)
    console.log('contextData ADmin',contextData)
    return (
        <div>
            Admin
        </div>
    )
};

export default Admin;