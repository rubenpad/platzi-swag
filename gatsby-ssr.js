const React = require('react')
const Layout = require('./src/components/layout').default
const { GlobalStyles } = require('./src/styles')
const { CartProvider } = require('./src/utils/context')

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
