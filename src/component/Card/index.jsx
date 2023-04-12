import { annonces } from "../../data/annonces.js"
import { Link } from "react-router-dom";
import "../../styles/Card.css"


function Card(){
    
    return(
        
            <div className="div-g">
                {annonces.map((ann) => (
                    <article key={ann.id}>
                        <Link to={"/card/" + ann.id}>
                            <div className="div-u">
                                <img src={ann.cover} alt={ann.title} className="img-card"/>
                                <span className="card-title">{ann.title}</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        
    )
}

export default Card