import React from 'react'
import { graphql } from 'gatsby'
import Meetup from '../components/meetup'

export const pageQuery = graphql`
    query LastMeetup {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY/MM/DD")
                    path
                    title
                    subTitle
                }
                body
            }
        }
    }
`

const IndexPage = ({ data }) => {
    const { nodes } = data.allMdx
    const post = nodes && nodes[0]
    return <Meetup post={post} />
}

export default IndexPage
