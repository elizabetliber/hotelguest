import React from "react";

const About = () => (
    <div>
        <div className="card">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">Гостевой дом "Коралл"</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>

        <style jsx>{` 
 a{
 margin-left: 128px;
 }
 
  
`}</style>
    </div>)

export default About;