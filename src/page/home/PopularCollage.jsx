import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularCollage = () => {

    const [popularCollages, setPopularCollages] = useState([])

    useEffect(() => {
        axios('https://campus-wise-server-ptan01.vercel.app/popularCollage')
            .then(res => {
                console.log(res.data)
                setPopularCollages(res.data)
            })
    }, [])


    return (
        <div className='my-20'>
            <h1 className='text-4xl font-bold text-center text-blue-500 my-10'>Popular Collages</h1>
            <div style={{display: 'grid'}} className='lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    popularCollages.map(collage => <div key={collage._id} className="card card-compact max-w-96 bg-base-100 shadow-xl">
                        <figure><img className='max-w-[400px]' src={collage.college_img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{collage.college_name}</h2>
                            <p><span className='font-semibold'>Admission Date</span>: {collage.admission_date}</p>
                            <p><span className='font-semibold'>Research History</span>: {collage.research_history}</p>
                            <p><span className='font-semibold'>Sport</span>: {collage.sport}</p>
                            <p><span className='font-semibold'>Events</span>: {collage.events.map((event, idx) => <span key={idx}>{event} ,</span>)}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/popularCollageDetails/${collage._id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularCollage;