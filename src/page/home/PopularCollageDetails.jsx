import { useLoaderData} from "react-router-dom";

const PopularCollageDetails = () => {

    const collageDetails = useLoaderData()

    console.log(collageDetails)
    const { "Coding Hackathon": codingHackathon , "Cultural Fest" : culturalFest, "Orientation Day" : orientationDay} = collageDetails.detail.event_details
    console.log(codingHackathon, culturalFest , orientationDay)

    return (
        <div className="min-h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl mt-20">
                <figure className="max-w-[600px]"><img src={collageDetails.college_img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{collageDetails.college_name}</h2>
                    <p><span className="font-semibold">Admission Date</span>: {collageDetails.admission_date}</p>
                    <p><span className="font-semibold">Admission process</span>: {collageDetails.detail.admission_process}</p>
                    <p><span className="font-semibold">Research Work</span>: {collageDetails.detail.research_work}</p>
                    <p><span className="font-semibold">Event</span>:</p>
                    <p><span className="font-semibold">1.Coding Hackathon</span>: {codingHackathon}</p>
                    <p><span className="font-semibold">2.Cultural Fest</span>: {culturalFest}</p>
                    <p><span className="font-semibold">3.Orientation Day</span>: {orientationDay}</p>
                    <p><span className="font-semibold">Sport Categories</span>: {collageDetails.detail.sports_categories.map((category, idx) => <span key={idx}>{category},</span>)}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCollageDetails;