import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { RiSurveyFill } from "react-icons/ri";
import useAuth from "../../../Hooks/useAuth";


const SurveyUpdate = () => {
    const { register, handleSubmit } = useForm()
    const {user} =useAuth()
    const axiosSecure =useAxiosSecure()
    const {_id} =useLoaderData()
    const onSubmit = async(data) => {
        // console.log(data)

      
           
            const surveyItem = {
                title: data.title,
                category: data.category,
                options: data.options,
                description: data.description,
                expireDate: data.expireDate,
                
            }
             
            const survey = await axiosSecure.patch(`/survey/${_id}`,surveyItem);
            console.log(survey.data)
            if(survey.data.modifiedCount > 0){
                // show success popup
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated from the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        
       
    
    return (
        <div className="lg:px-12 ">
            
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
                       Update Survey <RiSurveyFill />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SurveyUpdate;