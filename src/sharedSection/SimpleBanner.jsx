
const SimpleBanner = ({heading , subHeading}) => {
    return (
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
            <p className="text-center font-bold text-2xl mb-2">{heading}</p>
            <p className="text-center text-lg">{subHeading}</p>
            <button className="mt-4 py-2 px-4 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-100">
                Admission
            </button>
        </div>
    );
};

export default SimpleBanner;