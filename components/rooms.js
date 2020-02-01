import React from "react";
import Link from 'next/link'
import rooms from '../utils/rooms'

function RoomList() {
    return <div>

            <div className="container">
                <p><h3><strong>Отдых у моря Анапа. Гостевой дом «Коралл».</strong></h3><br/>

                    Гостевой дом «Коралл» расположен в 20 минутах ходьбы от берега Черного моря. <br/>
                    Расстояние до моря составляет 1,5 км. В шаговой доступности находятся: рынок, фитнес зал, ТЦ "Красная площадь", пятерочка,<br/> магнит, столовая "Вкус HOUSE", клиники "Альфа" и "Best Clinic", парикмахерская, аптека, прокат велосипедов и многое другое.<br/>

                    На прилегающей территории к услугам наших гостей предоставляется общая кухня, обеденная зона на балконе,<br/> зона барбекю на заднем дворе, стиральная машина.<br/>

                    Гостевой дом «Коралл» предлагает размещение в комфортабельных номерах.<br/>
                    Каждый номер оснащен: кондиционером, WIFI, холодильником, санузлом с бесплатными туалетными принадлежностями.</p>

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
.col-md-6{
margin-top: 20px;
}
.container{ 
height: 100%;
  width: 80%;}
 p{
 color: black;
 font-size: 15px;
 text-align: left;
 }
 h3{
 color: black;
 }
 .card{
 border-color: dark;
 }
`}</style>
    </div>
}

export default RoomList;