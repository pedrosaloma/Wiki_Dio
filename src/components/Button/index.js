import React from 'react'

import { ButtonContainer } from './styles';

function Button({onClick}) {
  return (
    <div class="col-6">
      <ButtonContainer onClick={onClick}>
        Buscar
      </ButtonContainer>
    </div>
  )
}

export default Button
