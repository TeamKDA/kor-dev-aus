import React from 'react'
import { graphql } from 'gatsby'
import Issue from '../components/issue'

const IndexPage = ({ data }) => {
    const { nodes } = data.allMdx
    const post = nodes && nodes[0]
    return <Issue post={post} />
}

export const pageQuery = graphql`
    query LastIssue {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY/MM/DD")
                    path
                    title
                }
                body
            }
        }
    }
`

export default IndexPage
