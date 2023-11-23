
import pic1 from '../assets/best-quality-guarantee-assurance-concept.jpg'
import pic2 from '../assets/collage-customer-experience-concept.jpg'
import pic3 from '../assets/hand-puts-pink-envelope-into-vote-box.jpg'
import pic4 from '../assets/high-angle-person-checking-box-close-up.jpg'
import pic5 from '../assets/high-angle-uncompleted-checking-boxes.jpg'
import pic6 from '../assets/man-holding-ballot-pointing-camera.jpg'
import pic7 from '../assets/man-holding-ballot-pointing-camera.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './style.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div >
            <Swiper
            
            
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper bg-cover h-[60%] "
      >
        <SwiperSlide>
          <img src={pic1}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic7} />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Banner;



// https://ibb.co/yF55T9y
// https://ibb.co/Kzd4LPR
// https://ibb.co/dgnjLTz
// https://ibb.co/HhxnSKg
// https://ibb.co/Trw8wP3
// https://ibb.co/cJ88Ng5
// https://ibb.co/VL8QyvP
// https://ibb.co/dJCMBbv