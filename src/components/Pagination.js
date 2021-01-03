import React from 'react';

export default function Pagination(props) {
  let pagesCount = [];

  for (let i = 1; i <= props.pages; i++) {
    pagesCount.push(i);
  }

  return (
    <div className="pag mb-3">
      <ul className="pag__list">
        {
          pagesCount.map(page => {
            return (
              <li key={page.toString()}
                onClick={(e) => props.handleClick(e, page)}>
                <a
                  href="!#"
                  className={props.currentPage === page ? 'pag__link pag__link--active' : 'pag__link'}
                >
                  {page}
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}