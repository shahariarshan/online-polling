import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";
import { MdOutlineMapsHomeWork } from "react-icons/md";


import { FaMoneyBill, FaUsers } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
// import useSurveyor from "../Hooks/useSurveyor";
import { FaUserEdit } from "react-icons/fa";
import { PiSquareSplitHorizontalFill } from "react-icons/pi";


import { FaPollH } from "react-icons/fa";



const DashBoard = () => {
    const [isAdmin] = useAdmin();
    // const [isSurveyor] = useSurveyor()



    return (
        <div className="flex min-h-screen lg:min-h-screen bg-emerald-500">
            <div className="w-64 min-h-screen bg-slate-400">
                <ul className="menu text-xl p-4">


                    {isAdmin ?
                        <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">

                                    <FaUserEdit></FaUserEdit>Admin Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers></FaUsers>Manage Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/priceHistory">
                                    <FaMoneyBill></FaMoneyBill>Price History</NavLink>
                            </li>

                        </>
                        :

                        <>
                            <li>
                                <NavLink to="/dashboard/adminProfile">

                                    <FaUserEdit></FaUserEdit> User Profile</NavLink>
                            </li>


                            <li>
                                <NavLink to='/dashboard/surveyCreate'>
                                    <MdMovieCreation></MdMovieCreation>Survey Creation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageSurvey'>
                                    <FaPollH></FaPollH>Manage Survey </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/response'>
                                    <PiSquareSplitHorizontalFill></PiSquareSplitHorizontalFill>Survey responses</NavLink>
                            </li>
                        </>





                    }



                    {/* common for everyone  */}

                    <div className="divider"></div>
                    <li className="text-2xl   "><NavLink to='/'><MdOutlineMapsHomeWork></MdOutlineMapsHomeWork> Home</NavLink></li>


                </ul>
            </div>
            <div className="flex-1 ml-5">
                <NavBar></NavBar>
                <Outlet className=' min-h-screen bg-emerald-300'></Outlet>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://ibb.co/bRNnzqB)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default DashBoard;