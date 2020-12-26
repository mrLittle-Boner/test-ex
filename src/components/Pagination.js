import React from 'react';

export default function Pagination(props) {
  let pagesCount = [];

  for (let i = 1; i <= props.pages; i++) {
    pagesCount.push(i);
  }

  return (
    <div className="pag">
      <ul className="pag__list">
        {
          pagesCount.map(page => {
            return (
              <li key={page.toString()} className="pag__item" onClick={() => props.handleClick(page)}>
                <a href="!#" className="pag__link">{page}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}