import React from 'react';
import ReactDOM from 'react-dom';
import TimeStamp from '../components/TimeStamp';

const fakeDateTime = new Date();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeStamp dateTime={fakeDateTime} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
