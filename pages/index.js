import React from "react";
import Footer from "../components/Footer";
import RoomList from "../components/RoomsList";
import Header from "../components/Header";
import Description from "../components/Description";
import { fetchRooms } from "../api/rooms";

const Home = ({ rooms }) => (
  <div>
    <Header />
    <Description />
    <RoomList rooms={rooms} />
    <Footer />
  </div>
);

Home.getInitialProps = async params => {
  let rooms = [];
  try {
    rooms = await fetchRooms();
  } catch (e) {
    console.log(e.response);
  }

  return { rooms };
};

export default Home;
