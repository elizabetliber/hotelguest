import React from "react";
const About = () => (
   <div>
                   <div className="MainImageContainer">
                       <img
                           src="https://rosting.by/upload/iblock/b8d/109518088.jpg"
                       />
                       <div className="TitleContainer">

                           <div className="title m-0">Guests house coral
                               <link href="https://fonts.googleapis.com/css?family=Black+Ops+One&display=swap"
                                     rel="stylesheet">
                           </link>
                           </div>

                       </div>
                   </div>

       <style jsx>{` 

img{
  filter: brightness(75%) saturate(200%);
  height: 100%;
  width: 73%;}
  .MainImageContainer{
   position: relative;
  height: 300px;}
  .TitleContainer{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;}
  .title{
 font-family: 'Black Ops One', cursive; }
`}</style>
   </div>)

export default About;