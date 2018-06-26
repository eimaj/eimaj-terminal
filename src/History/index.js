import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import './styles.css';

const History = ({ history }) => (
  <ul className="History">
    {history.map((item, i) => {
      return (<Item item={item} key={i} />);
    })}
  </ul>
);

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default History;
