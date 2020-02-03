import React from "react";
import Footer from "../components/Footer";
import RoomList from "../components/RoomsList";
import Header from "../components/Header";
import Description from "../components/Description";

const Home = () => (
  <div>
    <Header />
    <Description />
    <RoomList />
    <Footer />
  </div>
);

export default Home;
