import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="more-info">
      <ul>
        <li>Выбран пользователь <b>{props.firstName}</b></li>
        <li>Описание:
          <textarea value={props.description} readOnly></textarea>
        </li>
        <li>Адрес проживания: <b>{props.address.streetAddress}</b></li>
        <li>Город: <b>{props.address.city}</b></li>
        <li>Провинция/штат: <b>{props.address.state}</b></li>
        <li>Индекс: <b>{props.address.zip}</b></li>
      </ul>
    </div>
  )
}
