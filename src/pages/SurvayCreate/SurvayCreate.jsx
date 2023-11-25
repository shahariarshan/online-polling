// import moment from "moment/moment";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiSurveyFill } from "react-icons/ri";

const SurveyCreate = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    // const [manufacturingDate, setManufacturingDate] = useState('');
    // const [shelfLife, setShelfLife] = useState('');
    // const [expiryDate, setExpiryDate] = useState('');
    // const [isExpired, setIsExpired] = useState(false);

    // const handleCalculate = () => {
    //     if (manufacturingDate && shelfLife) {
    //         const expiryDate = moment(manufacturingDate).add(shelfLife, 'days').format('YYYY-MM-DD');
    //         setExpiryDate(expiryDate);

    //         const today = moment().format('2023-12-05');
    //         setIsExpired(moment(expiryDate).isBefore(today));
    //     }
    // };
    return (
        <div>
            <h2 className="text-center mt-5 text-5xl font-serif text-amber-300">Create A Survey!</h2>
            <div className="mt-7">
                <form onSubmit={handleSubmit(onSubmit)}>

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
                    <label  className="label">
                        <span className="label-text">Feedback*:</span>
                    </label>


                    <label {...register("feedback", { required: true })} className=" flex mx-auto gap-10 px-10  my-6">
                        < >
                            <label >Yes</label>
                            <input className="ml-5" type="radio" id="yesOption" name="response" value="Yes"></input>
                        </>

                        <>
                            <label >No</label>
                            <input className="ml-5" type="radio" id="noOption" name="response" value="No"></input>
                        </>

                    </label>







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