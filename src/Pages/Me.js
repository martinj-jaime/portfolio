import React from 'react'
import {FormattedMessage} from 'react-intl';

function Me() {
    return (
        <div className="contenedorMe">
            {/*  */}
            <h3 className="d-flex justify-content-center"> 
                <u>
                <FormattedMessage
                id="me.whoami"
                defaultMessage="Who am I?"
                />    
                </u> 
            </h3>
            <br />

            {/*  */}
            <div className="aboutMe row">

            <div className="divImgBtn col-md-3">
            <div className="divImgMe">
            <img src="/img/me.jpg" alt="" className="imgMe" />
            </div>
            
            <a className="btn btn-outline-primary downloadMe" href="/CV.pdf" target="_blank" rel="noreferrer">
                <i className="fas fa-cloud-download-alt"></i> 
                <FormattedMessage
                id="me.download"
                defaultMessage="Download my CV"
                />
            </a>
            </div>

            <div className="col-md-9 pl-2">
            <p className="h5 mb-2">
            <FormattedMessage
                id="me.me"
                defaultMessage="I am a developer, a 17 year old young man from Argentina, with current knowledge in the stack mern but who keeps learning new technologies and languages ​​every day. 
                When learning react native I was also interested in mobile development so I also want to point my learning towards that side."
            />   
            </p>
            
            <h4 className="d-flex justify-content-start mt-4"> 
            <FormattedMessage
                id="me.interest"
                defaultMessage="Interest"
            />
            </h4>
            <br />
            <p className="h5">
            <FormattedMessage
                id="me.myinterest"
                defaultMessage="Besides writing and studying code, I like to read books on personal development, finance, and physics, at the same time I go swimming. 
                The mind follows the body and the body follows the mind."
            />   
            </p>

            </div>
            </div>
            {/*  */}

            <br />
            <br />

            {/*  */}
            <h3 className="d-flex justify-content-center mb-4"> 
            <u>
                <FormattedMessage
                id="me.skills"
                defaultMessage="Skills"
                />   
            </u> 
            </h3>
            
            <div className="contenedorSkills">
            
            <h4> 
            <FormattedMessage
                id="me.lenguages"
                defaultMessage="Lenguages and Frameworks"
            />   
            </h4>

            <div className="contenedorImgSkills">
                
                <div>
                <img src="/img/html5.png" className="imgSkills" alt=""/>
                <p>Html5</p>
                </div>

                <div className="d-inline-block">
                <img src="/img/css.png" className="imgSkills" alt=""/>
                <p>Css</p>
                </div>

                <div>
                <img src="/img/js.png" className="imgSkills" alt=""/>
                <p>JavaScript</p>
                </div>

                <div>
                <img src="/img/c.png" className="imgSkills" alt=""/>
                <p>C</p>
                </div>

                <div>
                <img src="/img/nodejs.png" className="imgSkills" alt=""/>
                <p>Node JS</p>
                </div>

                <div>
                <img src="/img/mongodb.png" className="imgSkills" alt=""/>
                <p>MongoDB</p>
                </div>

                <div>
                <img src="/logo192.png" className="imgSkills" alt=""/>
                <p>React</p>
                </div>

                <div>
                <img src="/img/bootstrap.png" className="imgSkills" alt=""/>
                <p>Bootstrap</p>
                </div>

            </div>

            <h4 className="text-white">
            <FormattedMessage
                id="me.tools"
                defaultMessage="Tools"
            />   
            </h4>
            {/*  */}
            <div className="contenedorImgSkills">
                
                <div>
                <img src="/img/sublime.png" className="imgSkills" alt=""/>
                <p>Sublime Text</p>
                </div>

                <div>
                <img src="/img/npm.png" className="imgSkills" alt=""/>
                <p>NPM</p>
                </div>

                <div>
                <img src="/img/vsc.png" className="imgSkills" alt=""/>
                <p>VS Code</p>
                </div>

                <div className="d-inline-block">
                <img src="/img/wordpress.png" className="imgSkills" alt=""/>
                <p>Wordpress</p>
                </div>

                <div>
                <img src="/img/git.png" className="imgSkills" alt=""/>
                <p>Git</p>
                </div>

                <div className="d-inline-block">
                <img src="/img/github.png" className="imgSkills" alt=""/>
                <p>Git Hub</p>
                </div>

                <div className="d-inline-block">
                <img src="/img/terminal.png" className="imgSkills" alt=""/>
                <p>Terminal</p>
                </div>

            </div>
            
            </div>

        </div>
    )
}

export default Me