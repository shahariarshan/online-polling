import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FaHome, FaMoneyBill, FaUsers } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
import useSurveyor from "../Hooks/useSurveyor";





const DashBoard = () => {
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor()
    


    return (
        <div className="flex min-h-screen lg:min-h-screen bg-emerald-500">
            <div className="w-64 min-h-screen bg-slate-400">
                <ul className="menu text-xl p-4">


                   {isAdmin ?
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">

                                    <FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers></FaUsers>Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment">
                                    <FaMoneyBill></FaMoneyBill>Payment</NavLink>
                            </li>
                        </>
                       :

                        <>


                            <li>
                                <NavLink to='/dashboard/surveyCreate'>
                                    <MdMovieCreation></MdMovieCreation>Survey Creation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/surveyUpdate'>
                                    <MdMovieCreation></MdMovieCreation>Survey Update</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/response'>
                                    <MdMovieCreation></MdMovieCreation>Survey responses</NavLink>
                            </li>
                        </>
                        




                    } 



                    {/* common for everyone  */}

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