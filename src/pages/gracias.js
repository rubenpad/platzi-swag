import React from 'react'
import { SEO } from '../components'
import { Purchase, Button } from '../styles/components'
import { Link } from 'gatsby'

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>¡Compra Exitosa!</h2>
        <p>Disfruta tu swag y lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta, nunca pares de aprender!</p>
        <span rol="img" aria-label="emoji">
          💚
        </span>

        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
