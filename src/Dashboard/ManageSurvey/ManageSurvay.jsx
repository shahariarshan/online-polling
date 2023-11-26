import { Link } from "react-router-dom";
import useSurvey from "../../Hooks/useSurvey";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageSurvay = () => {
    const [survey, refetch] = useSurvey()
    const axiosSecure = useAxiosSecure()
    const handelUpdateItem = (item) => {

    }
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


                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Survey is deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            }
            refetch();
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
                                   <Link>
                                   <button onClick={() => handelUpdateItem(item)} className="btn btn-warning btn-md"><FaEdit className=" text-red-700 text-xl"></FaEdit></button>
                                   </Link>
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