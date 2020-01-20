import React from "react";

function Card(props) {
    const { room: {  beds ,price, reviews, images } } = props;
    return (

        <div className="card_">
            <div className="nav-link text-dark"to={`/rooms/${id}`}>
                <img
                    src={images[0]}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <div className="card-text">
                        <p>Номер целиком · кровать {beds}</p>
                        <h3>Уютный семейный номер</h3>
                        <p>{price} руб. за ночь</p>
                        <p>
                            <strong>{reviews} отзыва</strong>
                        </p>
                    </div>
                </div>
            </div>
         </div>
    );
}
<style jsx>{`
h3{
 font-size: 19px;}
.card {
 text-align: left;
  font-size: 18px;
  line-height: 0.5;
}
 `}</style>
export default Card;