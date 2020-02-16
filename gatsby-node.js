/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const meetupTemplate = path.resolve(`src/templates/meetup/index.js`)
    return graphql(` {
        allMdx {
            edges {
                node {
                    id
                    frontmatter {
                        path
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }
        result.data.allMdx.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: meetupTemplate,
                slug: node.fields.slug,
                context: { id: node.id },
            })
        })
    })
}