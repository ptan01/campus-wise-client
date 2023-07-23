import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Application = () => {

    const {user} = useContext(AuthContext)
    const appliedCollage = useLoaderData()

    console.log(appliedCollage)

    console.log(user)


    return (
        <div>
            <h1>this is application pag</h1>
        </div>
    );
};

export default Application;