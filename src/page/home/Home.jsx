import { useContext } from "react";
import Banner from "./Banner";
import { SearchContext } from "../../provider/searchDataProvider";

const Home = () => {

    const {searchData} = useContext(SearchContext)

    console.log(searchData)


    return (
        <div>
            <Banner></Banner>         
        </div>
    );
};

export default Home;