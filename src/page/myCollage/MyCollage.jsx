import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import SingleCollage from "./SingleCollage";
import SimpleBanner from "../../sharedSection/SimpleBanner";

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
            <SimpleBanner heading="Your Selected Admission Collage" subHeading="you can send rating to improve our collage"></SimpleBanner>

            <div className="grid lg:grid-cols-2 gap-4">
                {myCollages.map(collage=> <SingleCollage key={collage._id} collageData={collage}></SingleCollage>)}
            </div>           
        </div>
    );
};

export default MyCollage;