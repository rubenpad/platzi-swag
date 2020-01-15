import React from 'react'
import { ProductDetail } from '../components'

export default function product({ pageContext }) {
  console.log(pageContext)
  return <ProductDetail {...pageContext} />
}
