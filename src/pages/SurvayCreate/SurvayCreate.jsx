
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiSurveyFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import useAuth from "../../Hooks/useAuth";
import moment from "moment/moment";


const SurveyCreate = () => {
    
    const axiosSecure =useAxiosSecure()
    const {user} =useAuth()
    const [yesVoted]=useState(0)
    const [noVoted]=useState(0)
    const [liked]=useState(0)
    const [dislike]=useState(0)
    const { register, handleSubmit,
        reset,
    formState :{errors},
    } = useForm()
    const onSubmit = async(data) => {
        
        const formData={
            
            timestamp: moment().format(),
            ...data,
            yesVoted,
            noVoted,
            liked,
            dislike,
            status:'Unpublished',
            options:['Yes',"No"]
        }
        console.log(formData)
        

        const surveyItem = {
            email:user.email,
            title:data.title,
            category:data.category,
            date:data.expireDate,
            options:data.options,
            description:data.description,
            yesVoted:formData.yesVoted,
            liked:formData.liked,
            dislike:formData.dislike,
            timestamp:formData.timestamp
           



            
           
        }
        const menuRes = await axiosSecure.post('/survey', surveyItem );
        console.log(menuRes.data)
        if(menuRes.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Survey added .`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    
   
    return (
        <div>
            <h2 className="text-center mt-5 text-5xl font-serif text-amber-300">Create A Survey!</h2>
            <div className="mt-7">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Email*:</span>
                        </label>
                        <input type="text"
                            {...register("email", { required: true })}
                            value={user.email}
                            readOnly
                            placeholder="Type Survey Title here"
                            className="input input-bordered  " />

                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Survey Title*:</span>
                        </label>
                        <input type="text"
                            {...register("title", { required: true })}
                            placeholder="Type Survey Title here"
                            className="input input-bordered w-full " />

                    </div>

                    <div className="lg:flex gap-5">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*:</span>
                            </label>
                            <select {...register("category", { required: true })} className="select select-primary w-full ">
                                <option disabled selected>Select Items</option>
                                <option value="health and wellness">Health and Wellness</option>
                                <option value="Education">Education</option>
                                <option value="Technology">Technology</option>
                                <option value="Business and Marketing">Business and Marketing</option>
                                <option value="Social and Demographic">Social and Demographic</option>
                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Expire Date*:</span>
                            </label>
                            <input type="date"
                                {...register("expireDate", { required: true })}
                                placeholder="Type Survey Title here"
                                className="input input-bordered w-full " />
                        </div>


                    </div>



                   

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Options*:</span>
                        </label>
                        <select {...register("options", { required: true })} className="select select-primary w-full ">
                           
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                            
                        </select>
                    </div>







                    <label className="label">
                        <span className="label-text">Description*:</span>
                    </label>
                    <textarea
                        {...register("description", { required: true })}
                        placeholder="Survey Details" className="textarea textarea-bordered textarea-lg w-full" ></textarea>

                    <button className="btn  btn-warning lg:flex justify-center">
                        Add Survey <RiSurveyFill />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SurveyCreate;




