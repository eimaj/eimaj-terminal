import React from 'react';
import PropTypes from 'prop-types';
import TimeStamp from '../TimeStamp/index';

import './Item.css';

const Item = ({ item }) => {
  console.warn('Item');
  console.log(item);

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
