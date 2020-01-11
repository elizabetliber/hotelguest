import React from "react";
const Footer = () => (
    <div>
        <div className="card">

                <h3>GUEST HOUSE CORAL</h3>
              <p>г.Анапа, Коралловый проезд, д.19</p>
                <p>+ 7(996)376-19-78</p>
                <div className="card-body">
                    <a href="https://goo.gl/maps/3oANPpeMFu8qa7ja9">КАРТА</a>
            </div>
        </div>

        <style jsx>{` 
        h3,p{
        text-align:center;
        }
        body {background: #1b2631;}
a {
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #f1c40f;
  color: #f1c40f;
  font-family: 'Montserrat', sans-serif; 
  transition: .4s;
 
}
a:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  border: 2px solid rgba(0,0,0,0);
  transition: .4s;
}
.button-container a:hover:after {
  border-color: #f1c40f;
  width: calc(100% - 10px);
  height: calc(100% + 10px);
}
.card-body{ 
text-align:center;
}
  `}</style>
    </div>)

export default Footer;