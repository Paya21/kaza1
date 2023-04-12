import Header from "../component/Header";
import "../styles/Error.css"

function ErrorPage() {

    return(
        <div>
            <Header />
            <div className="div-error">
                <h1 className="error-title">404</h1>
                <span className="error-desc">Oups! la page que vous demandez n'existe pas.</span>
                <a href="/" className="return-home">Retourner sur la page d'accueil</a>
            </div>
        </div>
    )
}

export default ErrorPage;