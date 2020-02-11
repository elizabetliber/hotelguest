import React from "react";
import Header from "../../components/Header";
import { fetchRooms } from "../../api/rooms";
import getNoun from "../../utils/getNoun";
import Footer from "../../components/Footer";
const Room = props => {
  const { room } = props;
  if (!room) {
    return <div>Страница не найдена</div>;
  }

  const { beds, price, images } = room;

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>
              <br />
              <div>
                <h2>Уютный семейный номер</h2>
                <strong>Номер целиком</strong>
                <p>
                  {beds} {getNoun(beds, "кровать", "кровати", "кроватей")}
                </p>
                <hr />
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
                <hr />
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
            <br />
            <a href="tel:+79963761978" className="btn btn-outline-success ">
              Позвонить для бронирования
            </a>
            {images.map(image => (
              <img
                src={`https://imgproxy.casply.com/unsafe/s:700:700/plain/${image.url}`}
                className="img-thumbnail mt-3 mb-4"
                alt="..."
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Room.getInitialProps = async params => {
  const {
    query: { pid }
  } = params;
  let room = null;
  const rooms = await fetchRooms({ id: parseInt(pid) });
  if (rooms.length === 1) {
    room = rooms[0];
  }
  return { room };
};

export default Room;
