import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import '../../styles/Rating.css'


function Rating({review}) {
    

     let switchRate;
     
    switch(review){
        case '1':
            switchRate = <div>
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                        </div>
        break;

        case '2':
            switchRate = <div>
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                         </div>
        break;

        case '3':
            switchRate = <div>
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                        </div>
        break;

        case '4':
            switchRate = <div>
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={farFaStar} />
                        </div>
        break

        case '5':
            switchRate = <div>
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                            <FontAwesomeIcon icon={fasFaStar} />
                        </div>
        break
        default:
            ///defaut par defaut

    }

    return(
        <div>
            {switchRate}
        </div>
    )
}

export default Rating;