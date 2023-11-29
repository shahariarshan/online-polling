import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const PriceHistory = () => {
    const {user }=useAuth()
    const axiosSecure =useAxiosSecure()
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user.email],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })
    return (
        <div>
             <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-3xl text-black">
                            <th></th>
                            

                        </tr>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                            <th>Amount</th>
                            <th >Status</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((item, index) => <tr key={item._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.date}</td>
                                <td>{item.transactionId}</td>
                                <td>{item.price}</td>
                                <td className="btn">{item.status}</td>
                                
                              
                                
                               
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PriceHistory;