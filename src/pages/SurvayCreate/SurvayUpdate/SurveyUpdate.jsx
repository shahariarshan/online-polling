import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RiSurveyFill } from "react-icons/ri";
import useAuth from "../../../Hooks/useAuth";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const UpdateItem = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosPublic()
    const updateItems = useLoaderData();
    console.log(updateItems);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)

const {id}=updateItems
        const updateItemsAll ={
            category :updateItems.category,
            title:updateItems.title,
            expireDate:updateItems.expireDate,
            options:updateItems.options,
            description:updateItems.description
        }
        const axios = await axiosSecure.patch(`http://localhost:5000/survey/${id}`,updateItemsAll)  
        console.log(axios.data);
    };


    return (
        <div>
        <h2 className="text-center mt-5 text-5xl font-serif text-amber-300">Update This Survey!</h2>
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
                    defaultValue={updateItems[0].title}
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
                        <select  defaultValue={updateItems[0].category} {...register("category", { required: true })} 
                       
                        className="select select-primary w-full ">
                            <option disabled value='default' selected>Select Items</option>
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
                        defaultValue={updateItems[0].date}
                            {...register("expireDate", { required: true })}
                            placeholder="Type Survey Title here"
                            className="input input-bordered w-full " />
                    </div>


                </div>



               

                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Options*:</span>
                    </label>
                    <select 
                    defaultValue={updateItems[0].options}
                    {...register("options", { required: true })} className="select select-primary w-full ">
                    <option disabled value='default' selected>Select Items</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                        
                    </select>
                </div>







                <label className="label">
                    <span className="label-text">Description*:</span>
                </label>
                <textarea
                defaultValue={updateItems[0].description}
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

export default UpdateItem;