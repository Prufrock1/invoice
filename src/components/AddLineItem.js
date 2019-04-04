import React from 'react';
import './AddLineItem.css';

const AddLineItem = (props) => {
  let description, 
      quantity, 
      rate
  ;
  const { addLine } = props;
  const handleSubmit = e => {
    e.preventDefault();
    // very simple validation
    if (!description.value.trim()) {
      return
    }
    // addLine method pushes up to <LineItems />
    // which keeps track of data 
    const newListItemData = {
      desc : description.value,
      quantity : quantity.value,
      rate : rate.value,
      total : rate.value * quantity.value 
    };
    addLine(newListItemData);
    // clear inputs
    description.value = null;
    quantity.value = 1;
    rate.value = null;
  }
  return (
    <div className="invoiceForm">
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            placeholder="description"
            ref={node => description = node} />
        </div>
        <div>
          <select ref={node => quantity = node} > 
              {/* a fun way to get a range in es6 */}
              {[...Array(5).keys()].map(v => 
                <option key={v} value={v+=1 }> {v++} Oz </option>
              )}
          </select>
        </div>
        <div>
            <input 
              placeholder="rate per ounce"  
              step="1" 
              ref={node => rate = node} 
              type='number' 
              defaultValue="rate per ounce" />
        </div>            
        <div className="total">
          <button type="submit">Create Line Item</button>
        </div>
      </form>
    </div>
  )
}
  
export default AddLineItem;
