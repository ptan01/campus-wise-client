import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CollageCard from "./CollageCard";
import SimpleBanner from "../../sharedSection/SimpleBanner";

const Collage = () => {

    const [collages, setCollages] = useState([])

    useEffect(() => {
        axios('http://localhost:5000/collage')
            .then(res => {
                setCollages(res.data)
            })
    }, [])

    console.log(collages)

    return (
        <div>
            <SimpleBanner heading="Choice your Best Collage" subHeading="Explore, Compare, and Reserve Your Ideal College"></SimpleBanner>
            
            

            <div className="grid lg:grid-cols-2 gap-5">
                {collages.map(collage => <CollageCard key={collage._id} collage={collage}></CollageCard>)}
            </div>
        </div>
    );
};

export default Collage;