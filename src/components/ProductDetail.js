import React, { useState, useContext } from 'react'

import { CartContext } from '../utils/context'
import priceFormat from '../utils/priceFormat'
import { SEO, Starts } from './'
import {
  Tag,
  SizeButton,
  QtyButton,
  QtySelect,
  Button,
  SizeSelect,
  StyledProductDetail,
} from '../styles/components'

export default function ProductDetail({
  price,
  id,
  product: { name, metadata },
}) {
  const formattedPrice = priceFormat(price)

  const [size, setSize] = useState(2)
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ name, price, sku: id, metadata, quantity })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formattedPrice}</b>
        <Starts />
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <QtyButton
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </QtyButton>
          <input type="text" disabled value={quantity} />
          <QtyButton onClick={() => setQuantity(quantity + 1)}>+</QtyButton>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar</Button>
      </div>
    </StyledProductDetail>
  )
}
