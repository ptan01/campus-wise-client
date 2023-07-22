
const CollageCard = ({collage}) => {
    const {collegeImage,collegeName} = collage
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[300px] h-[250px]" src={collegeImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{collegeName}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>

    );
};

export default CollageCard;