import { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://online-polling-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews])
    return (
        <section className="mt-10 px-6">

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="lg:mx-40 mt-10 space-y-4">
                           
                           


                                
                                <div className="mx-auto flex justify-center avatar">
                                <div className="w-24 rounded-full">
                                    <img src={review.image} />
                                </div>
                                </div>

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