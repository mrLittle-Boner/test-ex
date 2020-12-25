import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="more-info">
      <ul>
        <li>Выбран пользователь <b>{props.name}</b></li>
        <li>Описание:
          <textarea value={props.catchPhrase} readOnly></textarea>
        </li>
        <li>Адрес проживания: <b>{props.address.suite}</b></li>
        <li>Город: <b>{props.address.city}</b></li>
        <li>Провинция/штат: <b>{props.address.street}</b></li>
        <li>Индекс: <b>{props.address.zipcode}</b></li>
      </ul>
    </div>
  )
}
