import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Collapse from "../component/Collapse";
import Rating from "../component/Rating/Rating";
import Footer from "../component/Footer";
import { annonces } from "../data/annonces.js"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import '../styles/CardUnit.css';

function Card () {

    const {cardId} = useParams();
    const navigate = useNavigate();
    let logement = null;

    const [slide, setSlide] = useState(0);

    const search = annonces.filter(ann => ann.id === cardId);

    if(search.length > 0) {
        logement = search[0];
    }
    
    useEffect(() => {
        if(search.length === 0){
            navigate("/error");
        }
    })

    
    function next() {
        
        if(slide >= logement.pictures.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    function prev() {
        
        if (slide === 0){
            setSlide(logement.pictures.length - 1);
        } else {
            setSlide(slide - 1);
        }        
    }
    
    return(
        <div className="global">
            <Header/>
            <div className="carousel-cover">
                <FontAwesomeIcon icon={faChevronLeft} onClick={prev} className="carousel-prev" />
                <img src={logement.pictures[slide]} alt="logement" className="carousel-img"/>
                <div className="slide-number">{slide+1}/{logement.pictures.length}</div>
                <FontAwesomeIcon icon={faChevronRight} onClick={next} className="carousel-next"/>
            </div>
            <div className="global-name">
                <div className="logement-ti">
                    <h2 className="logement-title">{logement.title}</h2>
                    <div className="logement-location">{logement.location}</div>
                    <div className="logement-tags">{logement.tags.map((tag, index) => (
                            <span key={tag + index}>{tag}</span>)
                    )}</div>
                </div>
                <div className="logement-infos">
                    <div className="logement-host">
                        <div className="logement-host-name">{logement.host.name}</div>
                        <img src={logement.host.picture} alt="host" />
                    </div>
                    <div className="logement-rating">
                        <Rating review={logement.rating} />
                    </div>
                </div>
            </div>
            <div className="logement-collapse">
            <Collapse titre="Desccription" texte={logement.description} />
            <Collapse titre="Equipements" texte={logement.equipments.map((utilities, index) => (
                <div key={utilities + index}>
                    {utilities}
                </div>
            ))} />
            </div>
            <Footer />
        </div>
    )
}

export default Card;