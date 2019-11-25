import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql } from 'gatsby'
import MeetupListItem from '../../components/meetup-list-item'
import './styles.scss'

export const pageQuery = graphql`
    query IssueList {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            nodes {
                frontmatter {
                    date(formatString: "YYYY년 M월 DD일")
                    path
                    title
                    subTitle
                    excerpt
                }
            }
        }
    }
`

const Issues = ({ data }) => {
    const { nodes } = data.allMarkdownRemark
    return (
        <Layout>
            <SEO title="지난 뉴스레터" />
            <div className="issues">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <h3 className="issues__title">지난 모임들</h3>
                            <ol className="issues__list">
                                {nodes.map(({ frontmatter }, index) => (
                                    <li key={frontmatter.date} className="issues__list-item">
                                        <MeetupListItem {...frontmatter} index={++index} />
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Issues
