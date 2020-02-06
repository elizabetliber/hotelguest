import React from "react";
import Link from "next/link";
import getNoun from "../utils/getNoun";

function Card({ id, images, price, beds, number }) {
  return (
    <div className="col-md-6">
      <div>
        <div className="card mb-3">
          {images.length > 0 && (
            <img
              src={`https://imgproxy.casply.com/unsafe/s:700:700/plain/${images[0].url}`}
              className="card-img-top"
              alt="..."
            />
          )}
          <div className="card-body">
            <p>
              Номер целиком · {beds}{" "}
              {getNoun(beds, "кровать", "кровати", "кроватей")}
              <span className="badge badge-success">Номер {number}</span>
            </p>
            <h3>Уютный семейный номер</h3>
            <p>{price} руб. за ночь</p>
            <Link href="/rooms/[id]" as={`/rooms/${id}`}>
              <a className="btn btn-primary stretched-link">Подробнее</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
