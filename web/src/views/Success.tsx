import React from 'react';

import SuccessArea from '../components/SuccessView';
import SuccessImage from '../images/success-image.svg';

export default function Success() {
  return (
    <SuccessArea
      feedback={`O cadastro deu certo e foi enviado
    ao administrador para ser aprovado.
    Agora é só esperar :)`}
      link="/app"
      linkInfo="Voltar ao mapa"
      color="#37C77F"
      image={SuccessImage}
      btnClass="goto-app"
      title="Ebaaa!"
    />
  );
}
