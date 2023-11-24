import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
// import useAdmin from "../Hooks/useAdmin";




const DashBoard = () => {
    // const [isAdmin] = useAdmin();
    const isAdmin = true
    
    return (
        <div className="flex min-h-screen lg:min-h-screen bg-emerald-500">
            <div className="w-64 min-h-screen bg-slate-400">
                <ul className="menu text-xl p-4">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to="/dashboard/adminHome">

                                    <FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            
                            
                            <li>
                                <NavLink to="/dashboard/allUsers">

                                    <FaUsers></FaUsers>Manage Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">

                                        <FaUsers></FaUsers>Manage users</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/surveyCreate'>

                                        <MdMovieCreation></MdMovieCreation>Survey Creation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">

                                        <FaUsers></FaUsers>All Users</NavLink>
                                </li>

                            </>
                    }
                    <div className="divider"></div>
                    <li className="text-2xl   "><NavLink to='/'><MdOutlineMapsHomeWork></MdOutlineMapsHomeWork> Home</NavLink></li>
                    <li className="text-2xl   "><NavLink to='/contact'><FcCellPhone></FcCellPhone> Contact</NavLink></li>
                    <li className="text-2xl   "><NavLink to='/aboutUs'><FcAbout></FcAbout> About us</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 ml-5">
                <NavBar></NavBar>
                <Outlet className=' min-h-screen bg-emerald-300'></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;