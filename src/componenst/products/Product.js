
import React from 'react';

const Product = (props) => {

  const handleUpVote = () => props.handleProductUpVote(props.id);

  return (
    <div className='item mp-3 mb-3'>
      <div className='image'>
        <img src={props.productImageUrl} alt="" />
      </div>
      <div>
        <div className='vote'>
          <button className="btn btn-success btn-sm shadow-none" onClick={handleUpVote}>
            <span className="d-flex justify-content-center">
              <svg className="bi bi-caret-up-fill link-style" width="1em" height="1em" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z" />
              </svg>
            </span>
          </button>
          <span className="ml-2">{props.votes}</span>
        </div>
        <div className='description mt-2 mb-2'>
          <h5>
            {props.title}
          </h5>
          <div>
            {props.description}
          </div>
        </div>
        <div className='extra'>
          <span className="mr-2">Submitted by:</span>
          <img
            className='avatar'
            src={props.submitterAvatarUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Product;