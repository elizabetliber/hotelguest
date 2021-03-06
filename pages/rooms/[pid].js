import React from "react";
import Header from "../../components/Header";
import {fetchRooms} from "../../api/rooms";
import getNoun from "../../utils/getNoun";
import Footer from "../../components/Footer";
import ModalExample from "../rooms/modal";


const Room = props => {
  const {room} = props;
  if (!room) {
    return <div>Страница не найдена</div>;
  }
  const {number, beds, price, images} = room;
  
  return (
    <>
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>
              <br/>
              <div>
                <h2>Уютный семейный номер</h2>
                <strong>Номер целиком</strong>
                <p>
                  {beds} {getNoun(beds, "кровать", "кровати", "кроватей")}
                </p>
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
                  <li>Тихий час после 22:00</li>
                </ul>
                <strong>Выезда</strong>
                <ul>
                  <li>До 12 часов</li>
                </ul>
              </div>
            </div>
            <strong>{price} руб.</strong> за сутки
            <br/>
            <a href="tel:+79963761978" className="btn btn-outline-dark ">
              Позвонить для бронирования
            </a>
            <br/>
            <a
              href={`https://wa.me/79963761978/?text=Я%20хочу%20забронировать%20номер%20${number}%20с%20число.месяц%20по%20число.месяц`}
              className="btn btn-outline-success mt-2"
            >
              Написать в WhatsApp
            </a>
            <br/>
            <a
              href="viber://add?number=79963761978"
              className="btn btn-outline-primary mt-2"
            >
              Написать в Viber
            </a>
            <div>
              {images.map(image => (
                <img
                  src={`https://imgproxy.casply.com/unsafe/s:700:700/plain/${image.url}`}
                  className="img-thumbnail mt-3 mb-4"
                  alt="..."
                />
              ))}
              <ModalExample/>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </>
  );
};

Room.getInitialProps = async params => {
  const {
    query: {pid}
  } = params;
  let room = null;
  const rooms = await fetchRooms({id: parseInt(pid)});
  if (rooms.length === 1) {
    room = rooms[0];
  }
  return {room};
};

export default Room;
