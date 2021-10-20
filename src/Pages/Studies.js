import React from 'react'
import {FormattedMessage} from 'react-intl';

function Studies() {
    return (
        <div className="divStudies text-white">

            {/*  */}
            <h2 className="mt-4">
            <FormattedMessage
                id="studies.progress"
                defaultMessage="Diplomatura"
            />
            </h2>

            <div className="card p-5 my-3 bg-secondary cardStudies">
            <div className="row">

                <div className="col-md-4">
                    <img src="/img/utn.png" alt="..." className="imgStudies" />
                </div>

                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Professional Full-Stack Developer</h5>
                    <div className="card-text">
                        <img src="/img/reactjs.png" alt="" className="imgStudies2"/> <p>React - </p>
                        <img src="/img/angular.png" alt="" className="imgStudies2"/> <p>Angular - </p>
                        <img src="/img/nodejs.png" alt="" className="imgStudies2"/> <p>Node JS</p>
                    </div>
                    <br />
                    <a href="https://sceu.frba.utn.edu.ar/e-learning/detalle/diplomatura/1479/professional-full-stack-developer" className="btn btn-primary" 
                    target="_blank" rel="noreferrer">See</a>
                </div>
                </div>

            </div>
            </div>

            {/*  */}
            <h2 className="mt-4">
            <FormattedMessage
                id="studies.next"
                defaultMessage="Next Year"
            />
            </h2>

            <div className="card p-5 my-3 bg-secondary cardStudies">
            <div className="row">

                <div className="col-md-4">
                    <img src="/img/utn-mdp2.png" alt="..." className="imgStudies" />
                </div>

                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">University Technician In Programming</h5>
                    <p> UTN </p> <img src="/img/arg.png" alt="" className="imgStudies2"/>
                    <br />
                    <a href="http://mdp.utn.edu.ar/tecnicatura/tecnico_universitario_en_programacion/" className="btn btn-primary" 
                    target="_blank" rel="noreferrer">See</a>
                </div>
                </div>

            </div>
            </div>

        </div>
    )
}

export default Studies