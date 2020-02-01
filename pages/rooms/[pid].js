import rooms from '../../utils/rooms'
import React from "react";
import About1 from "../../components/About1";
import Head from "next/head";

const Room = (props) => {
    const {room} = props;
    if (!room) {
        return <div>Страница не найдена</div>

    }

    return (<div>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                  crossOrigin="anonymous"/>
        </Head>
        <div key={room.id}>
            <div className="text">
                <About1/>
                <br/>
                <div className="card-1">
                    <h2>Уютный семейный номер</h2>
                    <strong>номер целиком</strong>
                    <p>1 спальня {room.beds} кровати 1 душевая</p>
                    <hr/>
                    <strong>Удобства в номере</strong>
                    <ul>
                        <li>Wi Fi</li>
                        <li>Шампунь</li>
                        <li>Гель для душа</li>
                        <li>Фен</li>
                        <li>Кондиционер</li>
                    </ul>
                    <strong>Общие удобства</strong>
                    <ul>
                        <li>Кухня</li>
                        <li>Стиральная машина</li>
                        <li>Сушильная машина</li>
                    </ul>
                    <hr/>
                    <h3>Правила</h3>
                    <strong>Заезда</strong>
                    <ul>
                        <li>После 14 часов</li>
                        <li>Необходим паспорт</li>
                    </ul>
                    <strong>Проживания</strong>
                    <ul>
                        <li>Тишина в номере после 21 часа</li>
                    </ul>
                    <strong>Выезда</strong>
                    <ul>
                        <li>До 12 часов</li>
                    </ul>
                    <br/>
                </div>
            </div>
        </div>

        <center>
            <em><strong>{room.price} руб.</strong> за сутки</em>
            <em className="m-4">
                <button type="button" className="btn btn-outline-success">
                    <a href="tel:+79963761978">
                        <em>Позвонить для бронирования</em>
                    </a>
                </button>
            </em>
        </center>
        <style jsx>{`
        .text{
        text-align:center;
        }
       .price{
        text-align: center;}
        .card-1{
         margin-left: auto;
         margin-right: auto;
         width: 430px;
         text-align: left;
        }
   `}</style>
    </div>)

}

Room.getInitialProps = async params => {
    const {
        query: {pid}
    } = params;
    const room = rooms.find(el => el.id === pid);
    return {room};
};

export default Room