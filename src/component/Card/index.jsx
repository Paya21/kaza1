import { annonces } from "../../data/annonces.js"
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDivG = styled.div`
display: grid;
grid-template-columns: repeat(3, 30%);
background-color: #F7F7F7
`

const StyledImg = styled.img`
width: 75%;
`

const StyledDivU = styled.div`
display: flex;
flex-direction: column;
`
function Card(){
    
    return(
        <StyledDivG>
            {/* {annonces[0].title} */}
            {annonces.map((ann, index) => (
                <StyledDivU key={ann.id + index}>
                    <Link to={"/card/{ann.id}"}>
                    <StyledImg src={ann.cover} alt={ann.title}/>
                    </Link>
                    {ann.title}
                </StyledDivU>
            ))}
        </StyledDivG>
    )
}

export default Card