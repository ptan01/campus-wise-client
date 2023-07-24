import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import '@smastrom/react-rating/style.css'


const SingleCollage = ({ collageData }) => {
    const { name, subject, email, number, address, photo, date, collage, collageLoaction } = collageData;


    const [rating, setRating] = useState(0);

    const ratingValue = (newValue) => {
        console.log(newValue);
        setRating(newValue);
    }


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{collage}</h2>
                <p>Location:{collageLoaction}</p>
                <p>Name:{name}</p>
                <p>Subject:{subject}</p>
                <p>Email:{email}</p>
                <p>Address:{address}</p>
                <p>Phone:{number}</p>
                <p>Admission Date:{date}</p>
                <div className="card-actions justify-end">

                    <Rating
                        style={{ maxWidth: 140, color: "orange" }}
                        value={rating}
                        onChange={ratingValue}
                        transition="zoom"
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleCollage;

