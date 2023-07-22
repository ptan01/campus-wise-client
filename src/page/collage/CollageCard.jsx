import { Link } from "react-router-dom";

const CollageCard = ({ collage }) => {
    const { collegeImage, collegeName, admissionDate, collegeRating, numberOfResearch ,_id} = collage
    return (
            <div className="card card-side p-3 bg-base-100 shadow-xl">
                <figure><img className="max-w-[300px] lg:w-[300px] h-[250px]" src={collegeImage} alt="Movie" /></figure>
                <div className="p-5 flex flex-col">
                    <h2 className="card-title">{collegeName}</h2>
                    <p className="">Admission Date:{admissionDate}</p>
                    <p className="">Rating:{collegeRating}</p>
                    <p>Number Of Research: {numberOfResearch}</p>
                </div>
                <div className="card-actions justify-end items-end">
                    <Link to={`/collage/${_id}`}><button className="btn bg-blue-500 text-white">Details</button></Link>
                </div>
            </div>
    );
};

export default CollageCard;