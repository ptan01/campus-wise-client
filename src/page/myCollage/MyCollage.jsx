import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import SingleCollage from "./SingleCollage";

const MyCollage = () => {

    const {user} = useContext(AuthContext)

    const [myCollages, setMyCollages] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/submitApplication/${user?.email}`)
        .then(res=>{
            setMyCollages(res.data)
        })
        .catch(err =>{
            console.log(err.message)
        })
    },[user])

    console.log(myCollages)

    return (
        <div>
            <h1>thsi is my collage</h1> 

            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                {myCollages.map(collage=> <SingleCollage key={collage._id} collageData={collage}></SingleCollage>)}
            </div>           
        </div>
    );
};

export default MyCollage;