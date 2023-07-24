import { useEffect, useState } from "react";
import SimpleBanner from "../../sharedSection/SimpleBanner";
import { Link } from "react-router-dom";

const Admission = () => {


    const [admissions, setAdmissions] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/admissions')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmissions(data)
            })
    }, [])

    return (
        <div className="min-h-screen">
            <SimpleBanner heading="Available Admission Collage" subHeading="Your Journey to Higher Education Starts Here"></SimpleBanner>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-20">
                {
                    admissions.map((admission) => <div key={admission._id} className="card max-w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <Link to={`/admission/${admission._id}`}><h2 className="card-title">{admission.name}</h2></Link>
                            <p>{admission.location}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Admission;