import React from 'react'
import { Link } from 'gatsby'
import priceFormat from '../utils/priceFormat'
import { StyledProducts } from '../styles/components'

export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section id="productos">
        {products.map(({ node }) => {
          const price = priceFormat(node.price)
          return (
            <article key={node.id}>
              <img src={node.product.metadata.img} alt={node.product.name} />
              <div>
                <p>{node.product.name}</p>
                <small>USD {price}</small>
                <Link to={`/${node.id}`}>
                  Comprar Ahora <span>👈</span>
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
