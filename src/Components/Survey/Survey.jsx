import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useSurvey from "../../Hooks/useSurvey";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";



const Survey = () => {
    const { user } = useAuth()
    console.log(user);
    const [survey] = useSurvey()
    const axiosPublic = useAxiosPublic()
    const [likeCount, setLikeCount] = useState(0);
    // const allSurvey = survey.filter(data => data.category === 'category')
    // console.log(allSurvey);
    const fetchLikeCount = async () => {
        try {
          const response = await axiosPublic.get('/api/like/count'); // Replace with your backend endpoint to fetch the count
          setLikeCount(response.data.likeCount); // Assuming the API returns like count in the response
        } catch (error) {
          console.error('Error fetching like count:', error);
        }
      };

      useEffect(() => {
        fetchLikeCount(); 
      }, []);


    const handleLike = async () => {
       
          const response = await axiosPublic.post('/api/like');
          console.log('Like incremented:', response.data);
      };
    
      const handleDislike = async () => {
        
          const response = await axiosPublic.post('/api/dislike');
          console.log('Dislike incremented:', response.data);
          
        
      };
      



    return (
        <div className="">
               <h2 className="text-center mt-5 text-5xl font-serif text-amber-300">All Survey!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {
                    survey.map(data => 
                        <div key={data._id} className=" card bg-orange-300 space-y-3 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-center font-mono text-green-600">{data.title}</h2>
                                <p className="text-2xl text-blue-500 text-center"><span >{data.category}</span></p>
                                <p>{data.description}</p>
                                
                                    <div className="flex justify-evenly">
                                    <button  onClick={handleLike} className="btn"><AiFillLike></AiFillLike>{data.liked}</button>
                                    
                                    <button onClick={handleDislike} className="btn"><AiFillDislike></AiFillDislike>{data.dislike}</button>
                                    </div>

                                    <NavLink to={`/surveyDetails/${data._id}`} className="btn  mt-3 border-0 border-b-4 btn-outline">Details</NavLink>
                                    
                            </div>
                        </div>
                    )

                }

            </div>
        </div>
    );
};

export default Survey;