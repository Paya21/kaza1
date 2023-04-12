import '../../styles/Header.css'
import logo from '../../assets/LOGO.png';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 86%;
margin: auto;
margin-top: 50px;
margin-bottom: 60px;
`

function Header() {
    return(
        <StyledHeader>
            <img src={logo} alt='logo kasa'/>
            <nav className='nav-header'>
                <a href="/" className='a-header'>Accueil</a>
                <a href={"/about"} className='a-header'>A propos</a>
            </nav>
        </StyledHeader>
    )
}

export default Header;