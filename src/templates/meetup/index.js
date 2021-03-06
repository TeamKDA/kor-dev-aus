import React from 'react'
import { graphql } from 'gatsby'
import Meetup from '../../components/meetup'

export const pageQuery = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                date
                path
                title
                subTitle
            }
            body
        }
    }
`

export default ({ data }) => {
    const post = data.mdx
    return <Meetup post={post} />
}