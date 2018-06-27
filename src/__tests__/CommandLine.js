import React from 'react';
import ReactDOM from 'react-dom';
import CommandLine from '../components/CommandLine';

const fakeRecordHistory = () => false;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommandLine recordHistory={fakeRecordHistory} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
