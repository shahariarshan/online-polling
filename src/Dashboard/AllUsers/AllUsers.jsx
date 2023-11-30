
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdOutlineDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import { RiAdminLine } from "react-icons/ri";
import { SiSurveymonkey } from "react-icons/si";
import { Helmet } from "react-helmet-async";
const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data;
        }
    })
    const handelCartDelete = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.delete(`/users/${user._id}`)
                        .then(result => {
                            // console.log(result);
                            if (result.data.deletedCount > 0) {
                                refetch()
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }

                        })
                }
            });
    }
    const handelMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }
    const handelMakeSurveyor = user => {
        axiosSecure.patch(`/users/surveyor/${user._id}`)
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is Now Surveyor`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }


    return (
        <div>
               <Helmet>
                <title>
                    Pooling & Survey | All User
                </title>
            </Helmet>
            <h2 className="text-center mt-5 text-5xl font-serif text-amber-300">All Users!</h2>
            <h2 className="text-center text-2xl mt-10">Total Users:{users.length}</h2>
            <div>
            <div className="divider divider-neutral"></div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="space-x-2">
                                        {
                                            user.role === 'admin' ? "Admin" 
                                                :

                                                <abbr title="Make user Admin?" onClick={() => handelMakeAdmin(user)} className="btn btn-ghost  bg-orange-300 btn-md"><RiAdminLine className="text-xl"></RiAdminLine></abbr>
                                        }
                                        {
                                            user.role === 'surveyor' ? "Surveyor" 
                                                :

                                                <abbr title="Make user Surveyor?" onClick={() => handelMakeSurveyor(user)} className="btn  btn-ghost btn-md bg-orange-300 "><SiSurveymonkey className="text-xl"></SiSurveymonkey></abbr>
                                        }
                                        
                                    </td>
                                    <td><button onClick={() => handelCartDelete(user)} className="btn btn-ghost btn-md"><MdOutlineDeleteSweep className="text-2xl"></MdOutlineDeleteSweep></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;