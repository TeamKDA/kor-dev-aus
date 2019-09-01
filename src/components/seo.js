/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon16 from '../images/favicon/favicon-16x16.png'
import favicon32 from '../images/favicon/favicon-32x32.png'
import favicon96 from '../images/favicon/favicon-96x96.png'
import faviconApple180 from '../images/favicon/apple-icon-180x180.png'

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const siteTitle = `${site.siteMetadata.title} ${title ? ` - ${title}` : ''}`

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={siteTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:url`,
                    content: `https://koreandevelopersaustralia.org`,
                },
                {
                    property: `og:title`,
                    content: siteTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: siteTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
            link={[
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: `${faviconApple180}`,
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: `${favicon16}`,
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: `${favicon32}`,
                },
                {
                    rel: 'shortcut icon',
                    type: 'image/png',
                    href: `${favicon96}`,
                },
            ]}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
}

export default SEO
