import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 60px;
padding-top: 40px;
align-items: center;
width: 86%;
`
const StyledLink =styled(Link)`
background: none;
border-style: none;
color: #FF6060;
font-size: 15px;
padding: 0px;
padding-bottom: 0px;
&:hover {
    border-bottom: 1px solid #FF6060
}
`

const StyledNav = styled.nav`
width: 15%;
display: flex;
justify-content: space-between;
`

function Header() {
    return(
        <StyledHeader>
            <img src={logo} alt='logo kasa'/>
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to={"/about"}>A propos</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;