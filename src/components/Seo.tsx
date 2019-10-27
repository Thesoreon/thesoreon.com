import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet as Head } from "react-helmet"

import { SiteMetaDataQuery } from "~/graphqlTypes"

interface Props {
  title: string
  customMetadata: CustomMetaData
}

export interface CustomMetaData {
  pathname: string
  image?: string
  customDescription?: string
  customType?: "website" | "article"
}

const Seo: React.FC<Props> = ({
  title,
  customMetadata: { pathname, customDescription, image = "default.png", customType = "website" },
}) => {
  const {
    site: {
      siteMetadata: { description, twitter },
    },
  } = useStaticQuery<SiteMetaDataQuery>(graphql`
    query siteMetaData {
      site {
        siteMetadata {
          description
          twitter
        }
      }
    }
  `)

  const composedTitle = `${title} | Pavel Susicky`

  return (
    <Head titleTemplate="%s | Pavel Susicky" htmlAttributes={{ lang: "en" }}>
      <title>{title}</title>
      <meta name="description" content={customDescription || description} />

      <meta property="og:url" content={`https://thesoreon.com${pathname}`} />
      <meta property="og:type" content={customType} />
      <meta property="og:title" content={composedTitle} />
      <meta property="og:description" content={customDescription || description} />
      <meta property="og:image" content={`https://thesoreon.com/${image}`} />

      <meta name="twitter:image" content={`https://thesoreon.com/${image}`} />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={composedTitle} />
      <meta name="twitter:description" content={customDescription || description} />
    </Head>
  )
}

export default Seo
