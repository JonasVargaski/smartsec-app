import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDeviceRequest } from '~/store/modules/monitoring/actions';

import { Container, PickerLabel, Picker } from './styles';

export default function DevicePicker() {
  const dispatch = useDispatch();
  const devices = useSelector(state => state.device.devices);
  const device = useSelector(state => state.monitoring.device);

  function handleDevice(serial) {
    dispatch(setSelectedDeviceRequest(serial));
  }

  return (
    <Container>
      <PickerLabel>Controlador</PickerLabel>
      <Picker
        items={devices}
        selectedValue={device}
        onValueChange={handleDevice}
        mode="dropdown"
        itemText="description"
        itemValue="serial"
      />
    </Container>
  );
}
