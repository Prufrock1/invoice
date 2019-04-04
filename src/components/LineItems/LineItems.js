import React, {useState} from 'react';
import './LineItems.css';
import AddLineItem from '../AddLineItem';
import Item from './Item';

const LineItems = ( props ) => {
  const [showForm, toggleForm] = useState(false);
  const hasLineItems = props.lineItems.length !== 0;
  return (
    <div className="lineItems">
      <div className="item itemHeader">
        <div>Description</div>
        <div>Quantity </div>
        <div>Rate </div>
        <div className='total'>Total ($) </div>
      </div>
      { hasLineItems && props.lineItems.map((item, i) => 
        <Item
          key={i}
          {...item}
          showRemoveBtn={showForm}
          onClick={ () => props.removeLineItem(i)}
        />
      )}
      { showForm ? (
        <React.Fragment>
          <AddLineItem addLine={props.addLine}/>
          <button 
            className="doneBtn" 
            onClick={()=>toggleForm(false)}>
              Done Editing
          </button>
        </React.Fragment>
      ) : (
        <button className="addLineItemBtn" 
          onClick={()=>toggleForm(true) }>
            Add Line Item
        </button>
      )}
    </div>
  )
}
export default LineItems;

