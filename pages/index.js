import React from "react";
import Footer from "../components/Footer";
import RoomList from "../components/RoomsList";
import Header from "../components/Header";
import Description from "../components/Description";
import ServiceList from "../components/ServiceList";

import { fetchRooms } from "../api/rooms";
import { fetchServices } from "../api/services";
const Home = ({ rooms, services }) => (
  <div>
    <Header />
    <Description />
    <RoomList rooms={rooms} />
    <br />
    <h1 align="center">Услуги</h1>
    <br />
    <ServiceList services={services} />
    <Footer />
  </div>
);

Home.getInitialProps = async params => {
  let rooms = [];
  let services = [];
  try {
    rooms = await fetchRooms();
    services = await fetchServices();
  } catch (e) {
    console.log(e.response);
  }
  return { rooms, services };
};

export default Home;
