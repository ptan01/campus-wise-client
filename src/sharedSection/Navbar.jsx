import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../provider/searchDataProvider";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const {user} = useContext(AuthContext)

    const { setSearchData } = useContext(SearchContext)


    const handleChange = (event) => {
        const text = event.target.value;
        
        if(text.length === 0){
            setSearchData([])
        }else {
            fetch(`http://localhost:5000/collage/search/${text}`)
                .then(res => res.json())
                .then(data => {
                    setSearchData(data)
                    
                })
        }
       
        console.log(event.target.value);
    };


    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/collage'>Collage</Link></li>
        <li><Link to='/admission'>Admission</Link></li>
        <li><a>My Collage</a></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case hidden lg:block text-xl">Campus Wise</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="">
                    <input type="text" onBlur={handleChange} placeholder="Search Collage" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="navbar-end">
                    {user ? <Link to="/userProfile">{user?.email}</Link> : <Link to='/login' className="btn">Login</Link>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;