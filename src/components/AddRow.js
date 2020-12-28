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
    <div className='dropdown'>
      <button onClick={showHideForm}>Add a new Row to the table(Show/Hide Form)</button>

      {showForm && <form className='dropdown__form' onSubmit={(e) => props.showMeMagick(e)}>
        <div className='dropdown__inuts'>
          <label>
            <div>id</div>
            <input type='number' value={props.idValue} onChange={e => props.changeId(e.target.value)} />
          </label>
          <label>
            <div>firstName</div>
            <input type='text' value={props.firsNameValue} onChange={e => props.changeFName(e.target.value)} />
          </label>
          <label>
            <div>lastName</div>
            <input type='text' value={props.lastNameValue} onChange={e => props.changeLName(e.target.value)} />
          </label>
          <label>
            <div>email</div>
            <input type='email' value={props.emailValue} onChange={e => props.changeEmail(e.target.value)} />
          </label>
          <label>
            <div>phone</div>
            <input type='tel' value={props.phoneValue} onChange={e => props.changePhone(e.target.value)} />
          </label>
        </div>
        <button type='submit' className='dropdown__button--add' disabled={isDisabled}>Add row</button>
      </form>}
    </div>
  )
}