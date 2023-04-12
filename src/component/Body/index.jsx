import Card from "../Card";
import Banner from "../Banner";
import "../../styles/Body.css";
import bannerImg from "../../assets/IMG.png";

function Body() {
    return(
        <div className="body">
            <Banner image={bannerImg} texte={"Chez vous, partout et ailleurs"} />
            <Card />
        </div>
    )
}

export default Body;