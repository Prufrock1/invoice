import React from 'react';

const Item = ({ onClick, desc , quantity, rate, total, showRemoveBtn }) => (
  <div className="item">
    <div>{desc}</div>
    <div>{quantity}oz</div>
    <div>${rate} per oz</div>
    <div className="total">
      ${total}
      &nbsp;&nbsp;
      {showRemoveBtn && (
        <span>
            <button 
              className="danger" 
              onClick={onClick}>
                delete ( X )
            </button> 
        </span>
      )}
    </div>
  </div>
);
export default Item;

