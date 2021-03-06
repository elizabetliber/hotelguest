import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Link from "next/link";
import getNoun from "../utils/getNoun";

function Card({ id, images, price, beds, number, floor }) {
  return (
    <div className="col-md-6">
      <div>
        <div className="card mb-3">
          <UncontrolledCarousel
            interval={false}
            autoPlay={false}
            items={images.map(image => ({
              src: `https://imgproxy.casply.com/unsafe/s:700:700/plain/${image.url}`,
              caption: "",
              header: "",
              key: image.id
            }))}
          />
          <div className="card-body" style={{ transform: " rotate(0)" }}>
            <p>
              Номер целиком · {beds}{" "}
              {getNoun(beds, "кровать", "кровати", "кроватей")}
            </p>
            <p>
              <span className="badge badge-success ">Номер №{number}</span>
              <span className="badge badge-success ml-2">{floor} этаж</span>
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
