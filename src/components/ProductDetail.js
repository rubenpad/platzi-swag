import React, { useState } from 'react'
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
  sku: id,
  product: { name, metadata },
}) {
  const formattedPrice = priceFormat(price)

  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)

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
          <QtyButton onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</QtyButton>
          <input type="text" disabled value={qty} />
          <QtyButton onClick={() => setQty(qty + 1)}>+</QtyButton>
        </QtySelect>
        <Button>Agregar</Button>
      </div>
    </StyledProductDetail>
  )
}
