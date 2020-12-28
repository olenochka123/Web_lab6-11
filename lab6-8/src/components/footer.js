import {FooterContainer, FooterContent, FooterText, FooterMedia, FooterCopyright} from '../styles/footer-styles'
import {Logo, Links} from './utils'

function Footer() {
    return(
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h2>Not Important Text:)</h2>
                    <p>Want to say thank you to my parents, to Vita, Olya, Arthur for the fact that I'm still alive, also that I have hair and it has not yet fallen out, and of course thank to my toes just for the fact that they are</p>
                </FooterText>
                <Logo height = '50px' width = '500px' />
                <FooterMedia>
                    <Links />
                </FooterMedia>
            </FooterContent>
            <FooterCopyright>
            Powered by Alyona, Inc. | ©2020 Vooty Corporation. All Rights Reserved.
            </FooterCopyright>
        </FooterContainer>
    );
}

export default Footer;