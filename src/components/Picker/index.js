import React from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function StyledPicker({ style, items, ...rest }) {
  return (
    <Container style={style}>
      <Picker {...rest}>
        {items.map(item => (
          <Picker.Item
            key={String(item.value)}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </Container>
  );
}

StyledPicker.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

StyledPicker.defaultProps = {
  style: {},
};
