import Navigation from "../Components/Navbar";
import Hero from "../Components/Hero";

const HomePage = () => {
    return(
    <div style={{width:'100%', height:'200vh'}} className="Home bg-slate-800">

        <Navigation/>
        <Hero/>

    </div>
    
    
    )
}

export default HomePage;