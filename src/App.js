import React, { Component } from 'react';
import './App.css';
import LineItems from './components/LineItems/LineItems';
import Tabulation from './components/Tabulation';
import Address from './components/Address';

/// App acts as our statefull container for line items
// we send down updateLineItems() and removeLineItem() to child components
// and store line item day in an array here
class App extends Component {
  constructor(){
    super();
    this.state = {
      lineItems : [],
      total : 0
    }
    this.updateLineItems = this.updateLineItems.bind(this);
    this.removeLineItem = this.removeLineItem.bind(this);
  }
  calcTotal(list) {
    return list.reduce((accumulator, currentItem) =>  
      accumulator + currentItem.total 
    , 0);
  }
  updateLineItems(newLineItem) {
    this.setState(prevState => {
      let updatedLineItems =  [...prevState.lineItems, newLineItem];
      return  {
        lineItems: updatedLineItems,
        total : this.calcTotal(updatedLineItems)
      }
    })
  }
  removeLineItem(index) {
    this.setState(prevState => {
      const updatedLineItems = prevState.lineItems.filter((_, i) => i !== index)
      return {
        lineItems: updatedLineItems,
        total : this.calcTotal(updatedLineItems)
      }
    })
  }
  render() {
    return (
      <div className="App">
        <header>
          LeafLink
        </header>
        <Address />
        <div className="invoiceWrapper">
          <LineItems 
            lineItems={this.state.lineItems} 
            removeLineItem={this.removeLineItem} 
            addLine={this.updateLineItems}
          />
          <Tabulation total={this.state.total} />
        </div> 
      </div>
    );
  }
}

export default App;
