
// import useAuth from "../../Hooks/useAuth";

import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { GoReport } from "react-icons/go";







const DetailsSurvey = () => {
  const axiosPublic = useAxiosPublic()
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [disLiked, setDisLiked] = useState(false);
  const [disLikeCount, setDisLikeCount] = useState(0);

  const surveyData = useLoaderData()
  console.log(surveyData);
  const fetchLikeCount = async () => {
    try {
      const response = await axiosPublic.get('/api/like/count');
      setLikeCount(response.data.likeCount);
    } catch (error) {
      console.error('Error fetching like count:', error);
    }
  };

  useEffect(() => {
    fetchLikeCount();
  }, []);

  const handleLike = async () => {
    if (!liked) {
      try {
       
        await axiosPublic.post('/api/like');
        
        setLikeCount((prevCount) => prevCount + 1);
        setLiked(true);
      } catch (error) {
        console.error('Error liking:', error);
      }
    } else {
      console.log('You have already liked this.');
    }
  };




  // disLike   

  const fetchDisLikeCount = async () => {
    try {
      const response = await axiosPublic.get('/api/disLike/count');
      setDisLikeCount(response.data.disLikeCount);
    } catch (error) {
      console.error('Error fetching dislike count:', error);
    }
  };

  useEffect(() => {
    fetchDisLikeCount();
  }, []);


   


  const handleDislike = async () => {
    if (!disLiked) {
      try {
       
        await axiosPublic.post('/api/like');
        
        setDisLikeCount((prevCount) => prevCount + 1);
        setDisLiked(true);
      } catch (error) {
        console.error('Error liking:', error);
      }
    } else {
      console.log('You have already Disliked this.');
    }
  };




  return (
    <div className="mt-10">
      {
        surveyData.map(data =>
          <div key={data._id} className=" card bg-orange-300 space-y-3 shadow-xl">





            <div className="card  ">

              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                {/* <p>Like Count: {likeCount}</p> */}
                <div className="flex justify-evenly">
                  <button onClick={handleLike} className="btn"><AiFillLike ></AiFillLike>{data.liked+likeCount}</button>

                  <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}><GoReport className="text-red-800"></GoReport></button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <textarea className="textarea textarea-primary w-full" placeholder="comment..."></textarea>
                      <input className="btn btn-success btn-sm " type="button" value="Submit" />
                     
                      <div className="modal-action">
                        <form method="dialog justify-between">
                      
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

                  <button onClick={handleDislike} className="btn"><AiFillDislike></AiFillDislike>{data.dislike}</button>
                </div>




              </div>
            </div>
          </div>
        )

      }
    </div>

  );
};

export default DetailsSurvey;