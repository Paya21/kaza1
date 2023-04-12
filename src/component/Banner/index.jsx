
import "../../styles/Banner.css"

function Banner({image, texte}) {
    return(
        <div className="div-banner">
            <img src={image} alt="bannière" className="banner-img"/>
            <h2 className="banner-title">{texte}</h2>
        </div>
    )
}

export default Banner;