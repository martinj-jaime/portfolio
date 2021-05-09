import React from 'react'
import {FormattedMessage} from 'react-intl';

function Proyects() {
    return (
        <div className="contentPortafolio">
            <div className="text-white">
                <h3 className="container pt-5 mb-4 d-flex justify-content-center">
                    <FormattedMessage
                    id="proyects.titleG"
                    defaultMessage="Portfolio"
                    />
                </h3>
                <h4 className="container pt-3 mb-4 d-flex justify-content-center">
                    <FormattedMessage
                    id="proyects.descriptionG"
                    defaultMessage="I love programming. I program every day, and a way to justify it is through building personal projects"
                    />
                </h4>
                
                <div className="row mx-5">

                    {/* MERN */}
                    <div className="col-md-4 my-4 ">
                    <div className="card bg-secondary text-align-items mx-4">
                        <div className="card-header">
                            <img src="/img/img2/tasks-mern.png" className="imgProyects" alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title h5">Tasks App / MERN Stack</div>

                            <div className="d-flex justify-content-center">
                                {/* <a href="/#" className="btn btn-primary mx-5"> Demo </a> */}
                                <a href="https://github.com/martinj-jaime/todos-mern/tree/master" 
                                target="_blank" rel="noreferrer" className="btn btn-dark mx-5"> Code </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* MEN + Login with Passport */}
                    <div className="col-md-4 my-4">
                    <div className="card bg-secondary text-align-items mx-4">
                        <div className="card-header">
                            <img src="/img/img2/tasks-men.png" className="imgProyects" alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title h5">Tasks App whit Login / MEN + passport</div>

                            <div className="d-flex justify-content-center">
                                {/* <a href="/#" className="btn btn-primary mx-5"> Demo </a> */}
                                <a href="/https://github.com/martinj-jaime/tasks-men-passport/tree/master" className="btn btn-dark mx-5"> Code </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* SORTABLE JS */}
                    <div className="col-md-4 my-4 ">
                    <div className="card bg-secondary text-align-items mx-4">
                        <div className="card-header">
                            <img src="/img/img2/sortablejs.png" className="imgProyects" alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title h5">Drag and Drop / SortableJS</div>

                            <div className="d-flex justify-content-center">
                                <a href="https://martinj-jaime.github.io/SortableJs/" 
                                target="_blank" rel="noreferrer" className="btn btn-primary mx-5"> Demo </a>
                                <a href="https://github.com/martinj-jaime/SortableJs" 
                                target="_blank" rel="noreferrer" className="btn btn-dark mx-5"> Code </a>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* SEE MORE */}
                    <div className="col-md-4 my-4">
                    <div className="card bg-secondary text-align-items mx-4">
                        <div className="card-header divImgProyectosGit">
                            <img src="/img/github.png" className="imgProyectsGit" alt="see more git"/>
                            <a href="https://github.com/martinj-jaime" target="_blank" rel="noreferrer"
                            className="ml-5 btn text-white">
                            <FormattedMessage
                            id="proyects.git"
                            defaultMessage="Click to see more"
                            />
                            </a>
                        </div>
                    </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Proyects