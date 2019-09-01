import React from 'react'
import Layout from '../layout'
import SEO from '../seo'
import SubscribeForm from '../subscribe-form'
import './styles.scss'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default ({ post }) => {
    if (post) {
        const { frontmatter, body } = post
        return (
            <Layout>
                <SEO title={frontmatter.title} />
                <div className="issue">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="issue__hero row justify-content-center">
                                    <div className="col-lg-8">
                                        <SubscribeForm />
                                    </div>
                                </div>
                                <div className="issue__content">
                                    <h3 className="issue__title">
                                        {frontmatter.title}
                                    </h3>
                                    <p className="issue__date">
                                        {frontmatter.date}
                                    </p>
                                    {body && <MDXRenderer>{body}</MDXRenderer>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
    return null
}
