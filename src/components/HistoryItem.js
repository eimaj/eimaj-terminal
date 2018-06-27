import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

import '../styles/HistoryItem.css';

const Item = ({ item }) => {
  return (
    <li className="Item">
      <p className="Item__command-wrap">
        <TimeStamp dateTime={item.dateTime}/>
        <span className="Item__command">{item.command}</span>
      </p>
      <p className="Item__result">
        {item.result}
      </p>
    </li>
  )
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
