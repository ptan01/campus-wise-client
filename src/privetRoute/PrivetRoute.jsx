import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(!user){
        <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivetRoute;