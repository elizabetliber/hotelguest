import rooms from "../../utils/rooms";
import React from "react";
import Header from "../../components/Header";

const Room = props => {
  const { room } = props;
  if (!room) {
    return <div>Страница не найдена</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <br />
              <div>
                <h2>Уютный семейный номер</h2>
                <strong>номер целиком</strong>
                <p>1 спальня {room.beds} кровати 1 душевая</p>
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
            <strong>{room.price} руб.</strong> за сутки
            <a href="tel:+79963761978" className="btn btn-outline-success ml-3">
              Позвонить для бронирования
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Room.getInitialProps = async params => {
  const {
    query: { pid }
  } = params;
  const room = rooms.find(el => el.id === pid);
  return { room };
};

export default Room;
