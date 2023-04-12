import { useState } from "react";
import "../../styles/Collapse.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({titre, texte}) {

    function toggle() {
        setOpen(!open);
    }

    const [open, setOpen] =  useState(false)
    return(
        <div className="div-collapse">
            <div className="bandeau-collapse">
            <button onClick={toggle} className="collapse-button">{titre}</button>
            {open === true ? <FontAwesomeIcon icon={faChevronUp} className="svg-icon" /> : <FontAwesomeIcon icon={faChevronDown} className="svg-icon"/> }    
            </div>
            {open && <div className="div-text-collapse">
                <div className="texte-collapse">{texte}</div>
                </div>}
        </div>
        
    )
}

export default Collapse;