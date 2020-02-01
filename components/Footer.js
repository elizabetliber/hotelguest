import React from "react";

const Footer = () => (
    <div>

        <div className="card p-3 bg-dark">
            <div className="card-body">
                <h3 className="card-title">GUEST HOUSE CORAL</h3>
                <p className="card-text">г.Анапа, Коралловый проезд, д.19</p>
                <p className="card-text">+ 7(996)376-19-78</p>
                <a href="https://goo.gl/maps/3oANPpeMFu8qa7ja9" target="_blank">
                    <button type="button" className="btn btn-outline-success" >КАРТА</button>
                </a>
            </div>
        </div>

        <style jsx>{` 
      .card{
      color: white;
      text-align: center;
      
      }
  
`}</style>
    </div>)

export default Footer;