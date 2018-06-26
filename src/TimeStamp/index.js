import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import './styles.css';

const TimeStamp = ({ dateTime }) => (
  <div className="Timestamp">
    <Moment dateTime={dateTime} format="HH:mm" />
    &nbsp;eimaj:cli&nbsp;
  </div>
);

TimeStamp.propTypes = {
  dateTime: PropTypes.instanceOf(Date),
};

export default TimeStamp;
