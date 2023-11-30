import { Link } from "react-router-dom";
import useSurvey from "../../Hooks/useSurvey";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const ManageSurvay = () => {
    const [survey, refetch] = useSurvey()
    const axiosSecure = useAxiosSecure()
   const {user}=useAuth()

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data)








    };


    const handelDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/survey/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {

                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Survey is deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                  

                }
            }

        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-3xl text-black">
                            <th></th>
                            <th className="text-center">Total Survey:{survey.length}</th>

                        </tr>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            survey.map((item, index) => <tr key={item._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.category}</td>

                                <td>

                                    {/* <button onClick={() => handelUpdateItem(item)} className="btn btn-warning btn-md"><FaEdit className=" text-red-700 text-xl"></FaEdit>
                                        
                                        
                                        </button> */}
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}><FaEdit className=" text-red-700 text-xl"></FaEdit></button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <div>
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

                                                   
                                                </form>
                                            </div>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </td>
                                {item.status}
                                <td>
                                    <button onClick={() => handelDeleteItem(item)} className="btn btn-warning btn-md"><MdOutlineDeleteSweep className=" text-red-700 text-xl"></MdOutlineDeleteSweep></button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSurvay;