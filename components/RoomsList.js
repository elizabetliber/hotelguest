import React from "react";
import rooms from "../utils/rooms";
import Card from "./Card";

function RoomList() {
  return (
    <div className="container">
      <div className="row">
        {rooms.map(room => (
          <Card {...room} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
