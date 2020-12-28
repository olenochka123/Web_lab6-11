import {HeroContainer, HeroHeader, HeroInfo, HeroText, HeroButtonText, HeroButton} from '../styles/hero-section-styles'

function HeroSection() {
    return(
        <HeroContainer>
            <HeroInfo>
                <HeroHeader>We will find your perfect habitation!</HeroHeader>
                <HeroButtonText>
                    <a href = '/catalog'>
                        <HeroButton>Reserve</HeroButton>
                    </a>
                    <HeroText>Online & In Live</HeroText>
                </HeroButtonText>       
            </HeroInfo>
        </HeroContainer>

    );
}

export default HeroSection;