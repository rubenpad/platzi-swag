import React from 'react'
import { ProductDetail } from '../components'

export default function product({ pageContext }) {
  return <ProductDetail {...pageContext} />
}
