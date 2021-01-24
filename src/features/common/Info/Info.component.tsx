import React from "react";
import "./Info.scss";

function Info() {
  return (
    <span className="info typography__secondary">
      Здравствуйте, Eсли вы сюда попали, значит это ваша родословная. Мы
      собираем информацию о нашем древо. Если вы хотите дополнить, прислать
      фотографии, написать пару строчек о себе или о близком человеке напишите
      нам в «обратную связь», мы с удвольствием ответим и дополним.
    </span>
  );
}

export default React.memo(Info);
