import React from "react";
import Link from "next/link";
import getNoun from "../utils/getNoun";

function ServiceCard({ images, description, title }) {
  return (
    <div className="col-md-6">
      <div>
        <div className="card mb-3">
          {images.length > 0 && (
            <img src={images[0].url} className="card-img-top" alt="..." />
          )}
          <div className="card-body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
