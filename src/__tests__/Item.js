import React from 'react';
import ReactDOM from 'react-dom';
import Item from '../components/HistoryItem';

const fakeItem = {
  command: 'command',
  result: 'result',
  dateTime: new Date(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item item={fakeItem} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
