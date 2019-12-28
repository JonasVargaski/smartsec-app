import React from 'react';
import { Picker } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function StyledPicker({
  style,
  items,
  itemText,
  itemValue,
  ...rest
}) {
  return (
    <Container style={style}>
      <Picker {...rest}>
        {items.map(item => (
          <Picker.Item
            key={String(item[itemValue])}
            label={item[itemText]}
            value={item[itemValue]}
          />
        ))}
      </Picker>
    </Container>
  );
}

StyledPicker.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  itemText: PropTypes.string.isRequired,
  itemValue: PropTypes.string.isRequired,
};

StyledPicker.defaultProps = {
  style: {},
};
