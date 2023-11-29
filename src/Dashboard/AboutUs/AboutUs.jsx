

const AboutUs = () => {
    return (
        <div className="max-w-screen-2xl mt-12 lg:px-20 space-y-2 bg-cyan-200 p-10">
            <h2 className="text-center text-4xl font-mono font-semibold text-slate-600">About Us</h2>
            <div className="divider"></div>
            <p className="text-center text-xl mb-10">Welcome to  <span className="text-2xl text-blue-300 font-serif">Polling and Survey Platform</span>, where opinions matter and voices are heard!</p>
            
            
                    <li>Our Mission: <br />  At <span className="text-2xl text-blue-300 font-serif">Polling and Survey Platform</span>, we are dedicated to providing a reliable, user-friendly platform for individuals and organizations to gather valuable insights through polls and surveys. Our mission is to empower everyone, from businesses to community leaders, educators, and individuals, to make informed decisions through data-driven results</li>
                   <div className="mt-3 space-y-3">
                   <span className="text-xl pt-3"> What We Offer:</span> <br /> 
                    <li >
                    Engagement: <br /> We offer a platform that fosters meaningful engagement by allowing individuals to share their opinions on various topics.
                    </li>
                    <li>
                    Insights: <br />  Our surveys and polls provide valuable insights that aid businesses, organizations, and individuals in understanding trends, preferences, and public opinions..
                    </li>
                    
                    <p className="text-xl">How We Make a Difference:</p>
                    <li>
                    Community Impact: <br />  By participating in surveys and polls, users contribute to community discussions and help shape decisions that affect society.
                    </li>
                    <li>
                    Decision-making: <br />  Businesses and organizations leverage our platform to gather insights crucial for strategic decision-making
                    </li>
                
                   </div>

            
        </div>
    );
};

export default AboutUs;