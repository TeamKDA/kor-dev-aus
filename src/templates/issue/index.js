import React from 'react'
import { graphql } from 'gatsby'
import Issue from '../../components/issue'

export const pageQuery = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                date(formatString: "YYYY년 M월 DD일")
                path
                title
            }
            body
        }
    }
`

export default ({ data }) => {
    const post = data.mdx
    return <Issue post={post} />
}