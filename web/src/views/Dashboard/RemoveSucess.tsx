import React from 'react';

import SuccessArea from '../../components/SuccessView';
import RemoveImage from '../../images/remove-image.svg';

export default function UpdateSuccess() {
  return (
    <SuccessArea
      feedback={`O orfanato foi removido :(`}
      link="/dashboard/registred"
      linkInfo="Voltar aos orfanatos cadastrados"
      color="#FF669D"
      image={RemoveImage}
      btnClass='goto-app-red'
      title='Excluir!'
    />
  );
}
