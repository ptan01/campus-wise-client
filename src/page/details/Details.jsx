import { useLoaderData } from "react-router-dom";

const Details = () => {

    const details = useLoaderData()

    console.log(details)


    return (
        <div className="shadow-xl rounded-lg p-4">
            <h2 className="text-3xl font-bold my-2">{details.collegeName}</h2>
            <div className="lg:flex gap-5">
                <div className="lg:w-1/2">
                    <img className="" src={details.collegeImage} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <p>{details.details.about}</p>
                    <br />
                    <div className="space-y-2">
                        <p>Collage Rating: {details.collegeRating}</p>
                        <p>Number Of Research: {details.numberOfResearch}</p>
                        <p>Admission Date: {details.admissionDate}</p>
                        <h2 className="text-2xl">Collage Facilities</h2>
                        <p> <span className="font-semibold">Event</span>: {details.details.events.map((event, idx) => <span key={idx}>{event} ,</span>)}</p>
                        <p> <span className="font-semibold">Sports Facilities</span>: {details.details.sportsFacilities.map((sport, idx) => <span key={idx}>{sport} ,</span>)}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;