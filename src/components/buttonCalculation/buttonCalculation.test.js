import React from 'react';
import ReactDOM from 'react-dom';
import ButtonCalculation from './buttonCalculation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonCalculation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
