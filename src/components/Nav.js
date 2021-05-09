import { BrowserRouter as Router, Route, Switch ,Link, Redirect } from 'react-router-dom'

// Lenguages
import React, {useContext} from 'react';
import {langContext} from '../context/langContext'
import {FormattedMessage} from 'react-intl';

// Pages - Components
import Home from './Home'
import Me from '../Pages/Me'
import Proyects from '../Pages/Proyects'
import Studies from '../Pages/Studies'

function Nav() {

    // SideBar NAV
    let openSlideMenu = () => {
        document.getElementById('menu').style.width = '250px';
        document.getElementById('content').style.marginLeft = '250px';
    }
    let closeSlideMenu = () => {
        document.getElementById('menu').style.width = '0px';
        document.getElementById('content').style.marginLeft = '0px';
    }

    // Lenguages
    const idioma = useContext(langContext);

    return (
        <Router>
        <div id="content">

            <div className="contenedorBTN row mx-0">

            <span className="slide col">
                <button className="btn btn-primary mt-2" onClick={openSlideMenu}> 
                <i className="fas fa-bars"></i>
                </button>
            </span>

            
            <div className="divBtnIdioma col">
            <button onClick={() => idioma.establecerLenguaje('us')} className="btnIdioma">
                <img src="/img/eeuu.png" alt="us" className="imgIdioma"/>
                <hr />
            </button>
            <button onClick={() => idioma.establecerLenguaje('es')} className="btnIdioma">
                <img src="/img/españa.png" alt="es" className="imgIdioma"/>
                <hr />
            </button>
            </div>

            </div>

            {/* NAV */}
            <div className="sidebar-container" id="menu">

                    {/* List */}
                    <ul className="sidebar-navigation">

                    <button className="close btn text-white" onClick={closeSlideMenu}>
                    <i className="fas fa-times"></i>
                    </button>

                    <p className="sidebar-logo">
                    {/* My Portafolio */}
                    <FormattedMessage
                        id="sidebar.title"
                        defaultMessage="My Portfolio"
                    />
                    </p>

                    <li className="header">
                        <FormattedMessage
                        id="sidebar.aboutme"
                        defaultMessage="About Me"
                        />
                    </li>
                    <li>
                        <Link to="/about-me">
                        <i className="fas fa-user-circle" aria-hidden="true"></i> 
                        <FormattedMessage
                        id="sidebar.me"
                        defaultMessage="Me"
                        />
                        </Link>
                    </li>
                    <li className="header">
                    <FormattedMessage
                        id="sidebar.knowledge"
                        defaultMessage="Knowledge"
                    />
                    </li>
                    <li>
                        <Link to="/proyects">
                        <i className="fas fa-code" aria-hidden="true"></i> 
                        <FormattedMessage
                        id="sidebar.proyects"
                        defaultMessage="Proyects"
                        />
                        </Link>
                    </li>
                    <li>
                        <Link to="/studies">
                        <i className="fas fa-book-reader" aria-hidden="true"></i> 
                        <FormattedMessage
                        id="sidebar.studying"
                        defaultMessage="Studying"
                        />
                        </Link>
                    </li>

                    </ul>

            </div>
            
            <Home/>

            <div className="contenido">
            <Switch>

            <Route path="/proyects" component={ Proyects }  />
            <Route path="/about-me" component={ Me }  />
            <Route path="/studies" component={ Studies }  />
            <Redirect from="/" to="/proyects" />

            </Switch>
            </div>    


        </div> 
        </Router>
    )
}

export default Nav