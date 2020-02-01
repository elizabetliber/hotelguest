import React from "react";
import Link from 'next/link'
import rooms from '../utils/rooms'

function RoomList() {
    return <div>
        <div className="container">
            <div className="row">

                {rooms.map((room) => (
                    <div className="col-md-6">
                        <div key={room.id}>
                            <Link href="/rooms/[id]" as={`/rooms/${room.id}`}>
                                <a>

                                    <div className="card">
                                        <img src={room.images[0]} className="card-img-top" alt="..."/>
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

        <style jsx>{`
.container{ 
height: 100%;
  width: 80%;}
 
`}</style>
    </div>
}

export default RoomList;