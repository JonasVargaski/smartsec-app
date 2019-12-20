import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TInput } from './styles';

function Input({ style, icon, disabled, ...rest }, ref) {
  return (
    <Container disabled={disabled} style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(0, 0, 0, 0.32)" />}
      <TInput editable={!disabled} {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  icon: null,
  style: {},
  disabled: false,
};

export default forwardRef(Input);
