import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="more-info border border-white">
      <ul className='more-info__list p-3'>
        <li className='mb-2'>Выбран пользователь: <b>{props.firstName}</b></li>
        <li className='mb-2'>Описание:
          <textarea className='more-info__textarea' value={props.description} readOnly></textarea>
        </li>
        <li className='mb-2'>Адрес проживания: <b>{props.address.streetAddress}</b></li>
        <li className='mb-2'>Город: <b>{props.address.city}</b></li>
        <li className='mb-2'>Провинция/штат: <b>{props.address.state}</b></li>
        <li className=''>Индекс: <b>{props.address.zip}</b></li>
      </ul>
    </div>
  )
}
