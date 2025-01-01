import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import useAuth from "../utils/useAuth";

const Navbar = () => {
    const { user, signOutUser, setUser } = useAuth();
    console.log(user);

    // Handle user sign out
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("user signed Out");
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="navbar bg-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                    <img className="w-28" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <a onClick={handleSignOut} className="btn btn-warning">Sign Out</a>
                        :
                        <Link to="/login" className="btn btn-warning">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;