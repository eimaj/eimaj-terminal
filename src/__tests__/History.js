import React from 'react';
import ReactDOM from 'react-dom';
import History from '../components/History';

const fakeHistory = [
  {
    command: 'command',
    result: 'result',
    dateTime: new Date(),
  },
  {
    command: 'command',
    result: 'result',
    dateTime: new Date(),
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<History history={fakeHistory} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
