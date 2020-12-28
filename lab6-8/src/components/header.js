import {HeaderContainer, HeaderNavBar} from '../styles/header-styles.js'
import {Logo} from './utils'
import HeaderButton from '../components/header-button'

function Header() {
    return(
        <HeaderContainer className = 'header'>
                <HeaderNavBar>
                    <Logo height = '50px' width = '500px' />
                    <HeaderButton heading = 'Home' link = '/' />
                    <HeaderButton heading = 'Reserved' />
                    <HeaderButton heading = 'Habitations' link = '/catalog' />
                </HeaderNavBar>
        </HeaderContainer>
    );
}

export default Header;