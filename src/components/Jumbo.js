import React from 'react'
import { StyledJumbo } from '../styles/components'

import Image from './image'

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>
          Consigue el mejor swag. Exclusivo para los estudiantes de Platzi!
        </h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}
