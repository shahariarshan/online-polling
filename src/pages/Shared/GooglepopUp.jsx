import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";


const GooglePopUp = () => {
    const {googleSignIn}=useAuth()
    const usePublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGooglePopUp=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo={
                email:result.user.email,
                name:result.user.displayName
            }
            usePublic.post('/users',userInfo)
            .then(result =>{
                console.log(result.data );
                navigate('/')
            })
        })
    }
    return (

        <div
            className="card-actions">
            <button onClick={handleGooglePopUp} className="btn  text-[#BB8506]  w-full mb-2 border-0 border-b-4 btn-md btn-outline">Login with<FcGoogle></FcGoogle></button>
        </div>

    );
};

export default GooglePopUp;