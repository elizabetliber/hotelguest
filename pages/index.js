import React from 'react'
import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import RoomList from "../components/rooms";

const Home = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                  crossOrigin="anonymous"/>
            <title>Guest House Coral</title>
            <link rel="icon" href="/favicon(1).ico"/>
        </Head>
        <br/>
        <RoomList/>
        <br/>
        <Footer/>
        <style jsx>{`
      .hero {
        width: 100%;
        color: white;
        
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.6;
        font-size: 75px;
      }
      .title,
      .description {
        text-align: center;
       
      }
      .row {
      text-align:center;}
    
      
    `}</style>
    </div>
)

export default Home
