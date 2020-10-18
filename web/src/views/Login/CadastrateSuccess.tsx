import React from 'react';

import SuccessArea from '../../components/SuccessView';
import SuccessImage from '../../images/success-image.svg';

export default function Success() {
  return (
    <SuccessArea
      feedback={`Usuário cadastrado com sucesso :)`}
      link="/login"
      linkInfo="Voltar ao login"
      color="#37C77F"
      image={SuccessImage}
      btnClass='goto-app'
      title='Ebaaa!'
    />
  );
}
