import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/13295527_5153829.jpg'
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GooglePopUp from "../Shared/GooglepopUp";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";






const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const {createUser,profileUpdate}=useAuth()
    
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            profileUpdate(data.name, data.photo)
            .then(() => {
                // console.log('update success');
                const userInfo = {
                    name: data.name,
                    email: data.email,
                    photo: data.photo,
                    
                }
                axiosPublic.post('/users', userInfo)
                    .then(result => {
                        if (result.data.insertedId) {
                            console.log('user added on db');
                            reset();
                           
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Update Successful`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })

            })
                .catch(err => {
                    // console.log(err);
                    toast(err.message)
                })
        })
    }
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div  className="  hero-content flex-shrink-0 w-full max-w-sm shadow-2xl">
<div className="hero bg-base-200">


<div className="hero-content flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  
   <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Name</span>
               </label>
               <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
               {errors.name && <span className="text-red-500">Name is required</span>}

           </div>

           <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" {...register("photoUrl", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-red-500">Photo Url is required</span>}

                        </div>

          
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Email</span>
               </label>
               <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
               {errors.email && <span className="text-red-500">Email is required</span>}

           </div>
           <div className="form-control">
               <label className="label">
                   <span className="label-text">Password</span>
               </label>
               <input type="password" {...register("password", {
                   required: true,
                   minLength: 6,
                   maxLength: 20,
                   pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])/
               })}

                   placeholder="password" className="input input-bordered" />


               {errors.password?.type === "minLength" && (
                   <p className="text-red-500" role="alert">Password should me upper than 6 character</p>
               )}

               {errors.password?.type === "maxLength" && (
                   <p className="text-red-500" role="alert">Password should me lower than 20 character</p>
               )}
               {errors.password?.type === "pattern" && (
                   <p className="text-red-500" role="alert">Password should contain at  one lower case  one upper case </p>
               )}
               <label className="label">
                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
               </label>
           </div>
           <input type="Submit" value="Sign Up" className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" />
       </form>
       <GooglePopUp></GooglePopUp>
       <p className='text-center  mb-4'>Already have an account? <Link to='/login' className='text-[#BB8506]'>Please Log In</Link></p>
   </div>
</div>
</div>
</div> 
      </div>
    );
};

export default SignUp;




