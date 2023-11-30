import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
import useSurvey from "../../Hooks/useSurvey";
import { Helmet } from "react-helmet-async";



const Survey = () => {
    // const { user } = useAuth()
    // console.log(user);
    const [survey] = useSurvey()
    
  
    
      



    return (
        <div className="">
               <Helmet>
                <title>
                    Pooling & Survey | Survey
                </title>
            </Helmet>
               <h2 className="text-center mt-5 text-5xl font-serif text-amber-300">All Survey!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                    survey.map(data => 
                        <div key={data._id} className=" card bg-orange-300 space-y-3 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-center font-mono text-green-600">{data.title}</h2>
                                <p className="text-2xl text-blue-500 text-center"><span >{data.category}</span></p>
                                <p>{data.description}</p>
                                
                                   

                                    <Link to={`/surveyDetails/${data._id}`} className="btn  mt-3 border-0 border-b-4 btn-outline">Details</Link>
                                    
                            </div>
                        </div>
                    )

                }

            </div>
        </div>
    );
};

export default Survey;