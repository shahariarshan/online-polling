import { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Rating } from '@smastrom/react-rating'
import { VscPreview } from 'react-icons/vsc';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews])
    return (
        <section className="mt-10">

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:mx-40 mt-10 space-y-4">
                        <img src={review.image} />
                                
                            
                            <VscPreview className="mx-auto text-6xl" ></VscPreview>
                            
                                  
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                                <h2 className="text-2xl text-[#CD9003]  text-center">{review.name}</h2>
                            <p className="">{review.details}</p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;