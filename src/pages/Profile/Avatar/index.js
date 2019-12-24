import React from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, AvatarImg, ChangeButton } from './styles';

export default function Avatar({ avatar, onChange }) {
  const options = {
    title: 'Selecionar Imagem',
    cancelButtonTitle: 'Cancelar',
    quality: 0.8,
    maxWidth: 800,
    maxHeight: 600,
    takePhotoButtonTitle: 'Tirar uma Foto',
    chooseFromLibraryButtonTitle: 'Escolher da Galeria',
    storageOptions: {
      skipBackup: true,
    },
  };

  function handleRequestImage() {
    ImagePicker.showImagePicker(options, async response => {
      if (response.uri) {
        onChange({ name: response.fileName, uri: response.uri });
      }
    });
  }

  return (
    <Container>
      <ChangeButton onPress={handleRequestImage}>
        {avatar?.url ? (
          <AvatarImg source={{ uri: avatar?.url }} />
        ) : (
          <Icon name="add-a-photo" size={70} color="#ccc" />
        )}
      </ChangeButton>
    </Container>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};
