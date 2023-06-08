import React from "react";

const Pagination = ({ onPageNextChange, onPagePreChange, currentpage }) => {
  return (
    <div>
      <nav className='d-flex justify-content-center'>
        <ul className='pagination '>
          <li className='page-item cursor '>
            <button
              onClick={onPagePreChange}
              href=''
              className='page-link pointer  text-black'
              aria-label='Previous'
            >
              <span aria-hidden='true'>&laquo;</span>
            </button>
          </li>
          <li className='page-item'>
            <button href='' className='page-link text-black'>
              {currentpage}
            </button>
          </li>

          <li className='page-item'>
            <button
              onClick={onPageNextChange}
              href=''
              className='page-link text-black'
              aria-label='Next'
            >
              <span aria-hidden='true'>&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
