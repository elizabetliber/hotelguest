import React from "react";
import Link from "next/link";

function Card({ id, images, price, beds }) {
  return (
    <div className="col-md-6">
      <div key={id}>
        <a>
          <div className="card mb-3">
            <img src={images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <p>Номер целиком · кровать {beds}</p>
              <h3>Уютный семейный номер</h3>
              <p>{price} руб. за ночь</p>
              <Link href="/rooms/[id]" as={`/rooms/${id}`}>
                <a className="btn btn-primary stretched-link">Подробнее</a>
              </Link>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card;
