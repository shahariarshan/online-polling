import { NavLink } from "react-router-dom";
import logo from '../../assets/R-removebg-preview (1).png'
import useAuth from "../../Hooks/useAuth";


const NavBar = () => {
    const { user, logOut } = useAuth();

    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const NavItems =
        <>
            <li className="mr-3"><NavLink to='/'>Home</NavLink></li>
            <li className="mr-3"><NavLink to='/survey'>Survey</NavLink></li>

            {
                user ? <>
                   
                   
                    <li className="mr-3"><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li className="mr-3"><NavLink to='/payment' >Pro User</NavLink></li>
                    <details className="dropdown items-end">
                        <summary className="m-1 btn">user</summary>
                        <ul className="p-2 shadow menu dropdown-content bg-emerald-400 overflow-hidden rounded-box w-52">
                            <img className="w-24  rounded-full  " src={user?.photo} />
                            <li>Name: {user?.displayName}</li>
                            <li>Email: {user?.email}</li>

                        </ul>
                    </details>
                    <li><NavLink onClick={handelLogOut}>LogOut</NavLink></li>
                </> :
                    <>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </>
            }
            <li><NavLink to='/signUp'>Register</NavLink></li>
        </>
    return (
        <div>

            <div className="navbar  z-10 text-white max-w-screen-xl bg-black bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-400 rounded-box w-52">
                            {NavItems}
                        </ul>
                    </div>

                    <div className="avatar">
                        <div className="w-20 rounded">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className=" uppercase text-lg font-serif">Polling <span className="text-4xl text-red-600 text-center"> &</span> Survey</h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;