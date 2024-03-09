import Navbar from "./Navbar"
import "../styles/HomePage.css"
import Logo from "../imgs/383AnimationLogoVideo.mp4"
import React, { useState, useEffect } from 'react';
import HomeContainer from "./HomeContainer"
const HomePage = () =>{

    // State to manage loading status
    const [isLoading, setIsLoading] = useState(true);

    // Simulating loading effect with setTimeout
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false); // Set loading to false after a certain time
        }, 4000); // Simulated loading time: 2 seconds
        
        // Clear the timer when the component unmounts or when loading state changes
        return () => clearTimeout(timer);
    }, []);
    return(
        <div className="fullscreen-video">
            {isLoading && (
                    <video autoPlay loop muted playsInline >
                        <source src={Logo} type="video/mp4"/>
                    </video>

            )}
            {/* Render your main content when isLoading is false */}
            {!isLoading && (
                <div>
                    <Navbar/>
                    <HomeContainer/>                
                </div>
            )}

        </div>
    );

};
export default HomePage;