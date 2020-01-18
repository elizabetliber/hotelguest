import React from "react";
import Link from 'next/link'

const rooms = [
    {id: 1, name: "Большая комната", beds: 2, reviews: 3, price: "900",images:"/rooms/2f_1r.jpg"},
    {id: 2, name: "Маленькая комната", beds: 4, reviews: 3, price: "900",images:"/rooms/2f_3r.jpg"},
    {id: 3, name: "Маленькая комната", beds: 4, reviews: 3, price: "900",images:"/rooms/2f_4r.jpg"},
    {id: 4, name: "Маленькая комната", beds: 4, reviews: 3, price: "900",images:"/rooms/2f_6r.jpg"},
    {id: 5, name: "Маленькая комната", beds: 4, reviews: 3, price: "900",images:"/rooms/3f_9r.jpg"},
    {id: 6, name: "Маленькая комната", beds: 4, reviews: 3, price: "900",images:"/rooms/3f_10r.jpg"}
];


function RoomList() {
    return <div>
        <div className="container">
            <div className="row">

        {rooms.map((room) => (
            <div className="col-6">
                        <div key={room.id}>
                            <Link href="/rooms/[id]" as={'/rooms/${room.id}'}>
                                <a>

                                    <div className="card">
                                        <img src={room.images} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p>Номер целиком · кровать {room.beds}</p>
                                            <h3>Уютный семейный номер</h3>
                                            <p>{room.price} руб. за ночь</p>
                                            <p>
                                                <strong>{room.reviews} отзыва</strong>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
            </div>
        ))}
    </div>

            </div>
            </div>
}
<style jsx>{`
.row{
height: 100%;
  width: 73%;}
`}</style>
export default RoomList;