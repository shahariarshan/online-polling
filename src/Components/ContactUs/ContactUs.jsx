import { RiContactsFill } from "react-icons/ri";
import { RiMessage2Line } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";



const ContactUs = () => {
    return (
       <div className="max-w-screen-2xl mt-12 lg:px-40 bg-emerald-200  p-10">
        <h2 className="text-center text-4xl font-mono font-semibold text-slate-600">Contact Us!</h2>
         <div className="lg:flex justify-between mt-6">
            <div className="space-y-2">
                <RiContactsFill className="mx-auto text-center text-2xl text-red-500"></RiContactsFill>
                <h2 className="uppercase text-xl text-center">By phone</h2>
                <p className="text-center">Bangladesh:1-2345-789</p>
                <p className="text-center">International:+091-563-30</p>
            </div>
            <div className="space-y-2">
                <RiWhatsappLine className="mx-auto text-center text-2xl text-green-500"></RiWhatsappLine>
                <h2 className="uppercase text-xl text-center">What's App</h2>
               <p className="text-center">+091-563-30</p>

            </div>
            
            <div className="space-y-2">
                <RiMessage2Line className="mx-auto text-center text-2xl text-green-500"></RiMessage2Line>
                <h2 className="uppercase text-xl text-center">live chat</h2>
                <button className="btn btn-outline mx-auto items-center ml-20">Live Chat</button>
            </div>
           
        </div>
       </div>
    );
};

export default ContactUs;