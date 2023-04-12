import Header from "../component/Header";
import bannerImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Banner from "../component/Banner";
import "../styles/Body.css";
import "../styles/About.css"
import Collapse from "../component/Collapse";

function About() {
    return(
        <div>
            <Header />
            <Banner image={bannerImg} />
            <div className="collapse-content">
                <div className="collapse-unit">
                    <Collapse titre={"Fiabilité"} texte={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."} />
                </div>
                <div className="collapse-unit">
                    <Collapse titre={"Respect"} texte={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />
                </div>
                <div className="collapse-unit">
                    <Collapse titre={"Service"} texte={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
                </div>
                <div className="collapse-unit">
                    <Collapse titre={"Sécurité"} texte={" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />
                </div>
            </div>
        </div>
    )
}

export default About;