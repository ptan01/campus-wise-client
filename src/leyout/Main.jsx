import { Outlet } from "react-router-dom";
import Navbar from "../sharedSection/Navbar";
import Footer from "../sharedSection/Footer";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;