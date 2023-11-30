import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const ErrorPage = () => {
    const {user}= useAuth()
    return (
        <div>
              <img className="h-[700px] w-[700px] mx-auto" src="https://i.ibb.co/zsFyxgD/4660894-2456051.jpg" alt="" />
             <NavLink to='/'>{user.displayName}Home</NavLink>
        </div>
    );
};

export default ErrorPage;