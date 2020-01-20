import rooms from '../../utils/rooms'
import React from "react";
const Room = (props) => {
    const { room } = props;

    if (!room) {
        return <div>Страница не найдена</div>
    }

    return (<div>
        <div key={room.id}>
            <div className="row">
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
                <hr/>
            </div>
        </div>
        )
        <style jsx>{`
        .row,li{
        text-align:center;
        }
        ul{
        text-align:left;}
   `}</style></div>)

}

Room.getInitialProps = async params => {
    const {
        query: { pid }
    } = params;
    const room = rooms.find(el => el.id === pid);
    return { room };
};

export default Room