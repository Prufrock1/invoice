import React from 'react';
import ReactDOM from 'react-dom';
import Tabulation from './Tabulation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tabulation total={100}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
