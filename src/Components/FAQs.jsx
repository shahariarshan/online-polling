

const FAQs = () => {
    return (
        <div>
            <div className="text-center mt-96 space-y-4">
                <h1 className="font-normal text-base">EVERYTHING YOU NEED TO KNOW</h1>
                <h2 className="font-semibold font-serif text-5xl">Frequently Asked Questions</h2>
            </div>
            <div className="lg:flex gap-5 justify-evenly ">
                <div className="lg:w-[50%]">
                    <div className="collapse collapse-arrow mt-5 bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What are profile questions?
                        </div>
                        <div className="collapse-content">
                            <p>When you sign up with Poll Pay, you are asked to answer some profile questions. These questions are about your lifestyle choices and preferences. The answers to these questions help us match you with the most relevant and interesting surveys.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Why was I disqualified / screened out from the survey?
                        </div>
                        <div className="collapse-content">
                            <p>You may be screened out from a survey if you do not meet the target demographic that our survey partner is looking for to qualify for completing a survey successfully. In this case, we offer you 1 cent as compensation.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Do you collect any data from the user?
                        </div>
                        <div className="collapse-content">
                            <p>In the Poll Pay app, you can find the information we have about you. Go into settings and click “Account Information”. All the data collected via the profile questions is only stored locally on your device. Information that you have provided in surveys by our survey partners is not stored by us.

                                If you have a question regarding completed surveys, please contact the survey partner who was displayed to you before the survey. Please note that once you delete your account, all your data will also be removed.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I access my balance while using Poll Pay on the web?
                        </div>
                        <div className="collapse-content">
                            <p>Yes. You can access your balance on the web as well as on your phone app, as long as you are logged in using the same email address.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[50%]">
                    <div className="collapse collapse-arrow mt-5 bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How does the referral bonus work?
                        </div>
                        <div className="collapse-content">
                            <p>In your Poll Pay account, you will find a referral code. You can use this code to invite friends and family to join Poll Pay and do surveys. Whenever someone you have invited finishes a survey successfully, you will receive a certain percentage of your invitee’s earned money.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I use different email addresses to access one Poll Pay account?
                        </div>
                        <div className="collapse-content">
                            <p>No. Each email address will create a unique account that can only be accessed using that specific email address. You can not link different emails to one account.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            I don’t have a phone. Can I still use Poll Pay?
                        </div>
                        <div className="collapse-content">
                            <p>Yes. You can use Poll Pay via the website as well. Click here to be redirected to the Poll Pay web.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;