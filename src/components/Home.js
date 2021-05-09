import React from 'react'
import {FormattedMessage} from 'react-intl';

function Home() {
    return (

        <div>
            <div className="home-container">
            <div className="data-container">
            <h2 className="mt-2">Martín José Jaime</h2>
            <hr />
            <h3>
                <FormattedMessage
                id="home.js"
                defaultMessage= "Full Stack Javascript Developer"
                />
            </h3>
           
            <div className="d-flex justify-content-center">
            <a href="https://github.com/martinj-jaime" target="_blank" rel="noreferrer">
                <p className="d-inline-block my-3"> <i className="fab fa-github fa-2x mx-3"></i> </p>
            </a>
            <a href="https://www.linkedin.com/in/mart%C3%ADn-jos%C3%A9-jaime-9192871b0/" target="_blank" rel="noreferrer">
                <p className="d-inline-block my-3"> <i className="fab fa-linkedin fa-2x mx-3"></i> </p>
            </a>
            <a href="https://t.me/martinjjaime" target="_blank" rel="noreferrer">
                <p className="d-inline-block my-3"> <i className="fab fa-telegram-plane fa-2x mx-3"></i> </p>
            </a>
            </div>
            </div>
            </div>
            <div className="bg-info"> <br /> </div>
        </div>
        
    )
}

export default Home