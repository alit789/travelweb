import "../index.css"
import desktopImage from "../Image/Desktop.svg"


const Hero = () => {
    return(

        <div style={{height:'100vh'}} className="desktopImg fContainer w-100 d-flex justify-center align-items-center">
            <div className="text-center">
                <h2 style={{color:'white', fontSize:'64px' , fontWeight:'700'}}>Discover Your Life, Travel <br /> Where You Want</h2>
                <p className="mt-3" style={{color:'white', fontSize:'24px' , fontWeight:'300'}}>Would you explore natur paradise in the world, let’s find the best <br /> destination in world with us.</p>

                

                {/* Buttons */}
                <div className="d-flex justify-center mt-4">
                    <button className="HeroButton"> Lets Get Started
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                        </div>
                    </button>                                                                                                                                                                 
                </div>


            </div>
        </div>

    )
}

export default Hero;
