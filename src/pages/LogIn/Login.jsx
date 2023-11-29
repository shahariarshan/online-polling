
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import backgroundImage from '../../assets/13295527_5153829.jpg'

import GooglePopUp from '../Shared/GooglepopUp';
import Swal from 'sweetalert2';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const {signIn} = useAuth()
    const navigate =useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname|| '/'
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handelLoginForm = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
      

        event.target.reset();


        signIn(email,password)
        .then(result => {
            const user =result.user
            console.log(user);
            // toast('User logged in')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `User logged in`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        navigate (from,{replace:true})
    }
    const handelCaptcha = (e) => {
        const captchaValue = e.target.value
        // console.log(captchaValue);
        if (validateCaptcha(captchaValue)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
   
    return (
        <div className="hero min-h-screen bg-slate-600" style={{backgroundImage: `url(${backgroundImage})`}}>
            
            <Helmet>
                <title>
                    Pooling & Survey | Login
                </title>
            </Helmet>

            <div className="hero-content flex-shrink-0 w-full max-w-sm shadow-2xl ">
           
                <div className="card bg-gray-200  shadow-2xl ">
                <h2 className="text-center text-4xl font-mono text-emerald-600">LogIn Here!</h2>
                    <form onSubmit={handelLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {/* captcha  */}

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handelCaptcha} type="text" name="captcha" placeholder="Type the Captcha  " className="input input-bordered" required />
                      
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disabled} className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" type="submit" value="Login" />
                        </div>
                    </form>
                    <GooglePopUp></GooglePopUp>
                    <p className='text-center mb-4'>New Here? Please <Link to='/signUp' className='text-[#BB8506]'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
}


export default Login;