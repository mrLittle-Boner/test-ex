import React, { useState } from 'react';

export default function AddRow(props) {
  const [showForm, setShowForm] = useState(false);

  let isDisabled = true;
  if (props.idValue && props.firsNameValue && props.lastNameValue && props.emailValue && props.phoneValue) {
    isDisabled = false;
  }

  function showHideForm() {
    setShowForm(!showForm);
  }

  return (
    <div className='dropdown mb-3'>
      <button onClick={showHideForm} className='px-3 py-2 w-100'>Add a new Row to the table(Show/Hide Form)</button>

      {showForm && <form className='text-center dropdown__form mt-3 p-1 border border-dark' onSubmit={(e) => props.showMeMagick(e)}>
        <div className='dropdown__inputs mb-3'>
          <label>
            <div className=''>id</div>
            <input className='w-100' type='number' value={props.idValue} onChange={e => props.changeId(e.target.value)} />
          </label>
          <label>
            <div className=''>firstName</div>
            <input className='w-100' type='text' value={props.firsNameValue} onChange={e => props.changeFName(e.target.value)} />
          </label>
          <label>
            <div className=''>lastName</div>
            <input className='w-100' type='text' value={props.lastNameValue} onChange={e => props.changeLName(e.target.value)} />
          </label>
          <label>
            <div className=''>email</div>
            <input className='w-100' type='email' value={props.emailValue} onChange={e => props.changeEmail(e.target.value)} />
          </label>
          <label>
            <div className=''>phone</div>
            <input className='w-100' type='tel' value={props.phoneValue} onChange={e => props.changePhone(e.target.value)} />
          </label>
        </div>
        <button type='submit' className='dropdown__button--add py-2 w-25' disabled={isDisabled}>Add row</button>
      </form>}
    </div>
  )
}