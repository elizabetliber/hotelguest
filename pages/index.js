import React from 'react'
import Head from 'next/head'
import About from './About'
import Footer from './Footer'
const Home = () => (
  <div>
    <Head>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootst.."
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
        <title>Guest House Coral</title>
      <link rel="icon" href="/favicon(1).ico" />
    </Head>

      <div className="hero">
        <h1 className="title">{About()} </h1>

      <div className="row">

      </div>
    </div>
      <div className="oreo">{Footer()}</div>
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
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      
    `}</style>
  </div>
)

export default Home
