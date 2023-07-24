import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';


const Reviews = () => {

    const [reviewsCollages, setReviewsCollage] = useState([])

    useEffect(() => {
        axios('http://localhost:5000/reviewCollage')
            .then(res => {
                console.log(res.data)
                setReviewsCollage(res.data)
            })
    }, [])


    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-center text-blue-500'>Our Student Reviews</h1>
            <div className='lg:w-1/2 md:w-3/5 mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviewsCollages.map(collage => <SwiperSlide key={collage._id}>
                            <div className="card w-full h-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                   <h2 className='text-3xl font-semibold'>{collage.collage}</h2>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Student Name{collage.name}</h2>
                                    <p>Student Email:{collage.email}</p>
                                    <p>Subject:{collage.subject}</p>
                                    <p>Collage Location:{collage.collageLocation}</p>
                                    <div className="card-actions">
                                        <span className='text-2xl'>Rating:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;