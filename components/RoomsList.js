import React from "react";
import Card from "./Card";

function RoomList({ rooms }) {
  return (
    <div className="container">
      <div className="row">
        {rooms.map(room => (
          <Card key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
