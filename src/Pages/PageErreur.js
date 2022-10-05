import { Link } from "react-router-dom";
import '../Styles/PageErreur.css';


export default function PageErreur () {
    return (
        <div className="nomatch">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}