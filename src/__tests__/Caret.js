import React from 'react';
import ReactDOM from 'react-dom';
import Caret from '../components/Caret';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Caret />, div);
  ReactDOM.unmountComponentAtNode(div);
});
