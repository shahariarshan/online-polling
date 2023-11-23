import Footer from "./Shared/Footer";
import Banner from "../Banner/Banner";
import FAQs from "../Components/FAQs";
import NavBar from "./Shared/NavBar";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
          <div>
          <FAQs></FAQs>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;