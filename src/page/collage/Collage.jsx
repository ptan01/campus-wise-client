import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CollageCard from "./CollageCard";

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
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                <p className="text-center font-bold text-2xl mb-2">Choice your Best Collage</p>
                <p className="text-center text-lg">Explore, Compare, and Reserve Your Ideal College</p>
                <button className="mt-4 py-2 px-4 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100">
                    Admission
                </button>
            </div>

            <div>
                {collages.map(collage => <CollageCard key={collage._id} collage={collage}></CollageCard>)}
            </div>
        </div>
    );
};

export default Collage;