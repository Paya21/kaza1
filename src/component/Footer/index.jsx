import logo from "../../assets/LOGOFooter.png";
import "../../styles/Footer.css"

function Footer() {

    return(
        <div className="div-footer">
            <img src={logo} alt="footer" className="img-footer"/>
            <span>2020 Kasa. All rigth reserved</span>
        </div>
    )
}

export default Footer;