import { Rating } from '@smastrom/react-rating';
import { useState } from 'react';
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';
import axios from 'axios';


const SingleCollage = ({ collageData }) => {
    const { name, subject, email, number, address, photo, date, collage, collageLoaction } = collageData;


    const [rating, setRating] = useState(0);

    const ratingValue = (newValue) => {
        setRating(newValue);
        Swal.fire({
            title: 'Are you sure to rate this collage ?',
            text: "Your feedback is improve our collage!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Send Feedback!'
        }).then((result) => {
            if (result.isConfirmed) {
                const collageData = {
                    name,
                    subject,
                    collage,
                    collageLoaction,
                    address,
                    email,
                    rating: newValue
                }
                axios.post('http://localhost:5000/reviewCollage', collageData)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire(
                                'Success!',
                                'Your Feedback Send Successfully.',
                                'success'
                            )
                        }
                    })
                    .catch(err =>{
                        console.log(err.message)
                    })

            }
        })
        console.log(newValue);

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

