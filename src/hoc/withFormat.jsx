import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const withFormat = WrappedComponent => {
  const WithFormat = (props, ref) => {
    return (
      // eslint-disable-next-line
      <NumberFormat customInput={WrappedComponent} inputRef={ref} {...props} />
    );
  };

  return React.forwardRef(WithFormat);
};

withFormat.propTypes = {
  WrappedComponent: PropTypes.node,
};

export { withFormat as default };
