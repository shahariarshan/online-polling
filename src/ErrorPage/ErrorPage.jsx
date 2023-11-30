import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const ErrorPage = () => {
    const {user}= useAuth()
    return (
        <div>
              <img className="h-[700px] w-[700px] mx-auto rounded-xl" src="https://i.imgur.com/W3lM7CY.jpg" alt="" />
             <NavLink to='/'>{user.displayName}Home</NavLink>
        </div>
    );
};

export default ErrorPage;