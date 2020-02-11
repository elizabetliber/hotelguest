import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceList({ services }) {
  return (
    <div className="container">
      <div className="row">
        {services.map(room => (
          <ServiceCard key={room.id} {...room} />
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
