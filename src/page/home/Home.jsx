import { useContext } from "react";
import Banner from "./Banner";
import { SearchContext } from "../../provider/searchDataProvider";
import CollageCard from "../collage/CollageCard";
import Reviews from "./Reviews";

const Home = () => {

    const { searchData } = useContext(SearchContext)

    console.log(searchData)

    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-4">
                {
                    searchData.map((searchCollage) => <CollageCard key={searchCollage._id} collage={searchCollage}></CollageCard>)
                }
            </div>
            <Banner></Banner>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;