import React from 'react'
import { graphql } from 'gatsby'
import { Jumbo } from '../components'

import { SEO } from '../components'

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
  </>
)

export default IndexPage
