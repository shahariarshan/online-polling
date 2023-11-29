
import Banner from "../Banner/Banner";
import ContactUs from "../Components/ContactUs/ContactUs";
import FAQs from "../Components/FAQs";
import Testimonial from "../Components/Testimonial/Testimonial";
import AboutUs from "../Dashboard/AboutUs/AboutUs";



const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div>
                <FAQs></FAQs>
            </div>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;