import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import '../styles/TimeStamp.css';

const TimeStamp = ({ dateTime }) => {
  return (
    <span className="Timestamp">
      {moment(dateTime).format("HH:mm")}
      &nbsp;eimaj:cli&nbsp;
    </span>
  )
};
TimeStamp.propTypes = {
  dateTime: PropTypes.instanceOf(Date).isRequired,
};

export default TimeStamp;
