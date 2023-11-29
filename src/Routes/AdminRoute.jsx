import { Navigate, useLocation } from "react-router-dom";


import { ClimbingBoxLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";



// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
 
    const [isAdmin,isAdminLoading]=useAdmin()
    const {user,loading} = useAuth()
    const location =useLocation()
    if(loading || isAdminLoading){
        return <ClimbingBoxLoader className="text-5xl mx-auto lg:mt-36" color="#36d7b7" />
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;