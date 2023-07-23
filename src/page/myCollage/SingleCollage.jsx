
const SingleCollage = ({ collageData }) => {
    const { name, subject, email, number, address, photo, date, collage, collageLoaction } = collageData;

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={photo} alt="Shoes" /></figure>
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
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCollage;