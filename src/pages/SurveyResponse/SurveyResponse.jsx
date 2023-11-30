import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useSurvey from "../../Hooks/useSurvey";


const SurveyResponse = () => {
    const {user} =useAuth()
    const [survey] =useSurvey()
    

    return (
        <div>
               <Helmet>
                <title>
                    Pooling & Survey | Survey Response
                </title>
            </Helmet>
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
                            <th>Voted</th>
                            <th>Like/Dislike</th>
                            <th>Added Time</th>
                            <th>Expire Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            survey.map((item, index) => <tr key={item._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.yesVoted}</td>
                                <td>{item.liked}/{item.dislike}</td>
                                <td>{item.timestamp}</td>
                                <td>{item.date}</td>
                              
                                
                               
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
       
    );
};

export default SurveyResponse;