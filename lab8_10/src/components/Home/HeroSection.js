import React from 'react'
import {
    HeroVideo,
    GetStarted
} from './HeroSection.styled'
const HeroSection = () => {
    return (
        <HeroVideo>
            <img name = 'img' src = 'https://1.bp.blogspot.com/-lT_3QC9YSHQ/WB4estla-_I/AAAAAAAAAvE/_E9s9s-Qn84PgI25Yekt8AvsOFDJo-Y3wCLcB/s1600/skyscrapers-in-night-city-loveoboi.jpg' />
            <GetStarted>
                Get started!
            </GetStarted>
        </HeroVideo>
    )
}

export default HeroSection;
