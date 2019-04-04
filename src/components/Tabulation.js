import React, {Component} from 'react';
import './Tabulations.css';

export default class Tabulations extends Component {
  constructor(props){
      super(props)
      this.state = {
          tax : 0,
          deductions : 0
      }
  }
  getTotal(sub,tax,dedu){
    let t = sub;
    if (tax !== 0) t =  (t * tax) + t;
    if (dedu !== 0) t = t-dedu;
    return t.toFixed(2);
  }
  render() {
    let tax, deductions;
    const grandTotal = this.getTotal(this.props.total,
                                     this.state.tax,
                                     this.state.deductions);
    return (
      <div className="tabulations">
        <div>sub-total : ${this.props.total}</div>
          <div>
            tax add:          
            <select 
              onChange={() => this.setState({tax:tax.value})} 
              ref={node => tax = node} >
              <option value="0">none</option>
              <option value="0.01">1%</option>
              <option value="0.02">2%</option>
              <option value="0.03">3%</option>
              <option value="0.04">4%</option>
              <option value="0.05">5%</option>
            </select>
          </div>
          <div>
              deductions: $ 
              <input 
                type="number" 
                onChange={() => this.setState({deductions:deductions.value})} 
                className="deductionInput" 
                ref={node => deductions = node} />
          </div>
          <div>Grand Total : $ {grandTotal}</div>
      </div>
    )
  } 
}

