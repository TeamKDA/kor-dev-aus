import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import SEO from '../seo'
import SubscribeForm from '../subscribe-form'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import bgImage1 from '../../images/bg/1.jpg'
import getUrlParams from '../../util/getUrlParams'
import './styles.scss'

export default ({ post }) => {
    const { frontmatter, body } = post
    const { cid, eid } = getUrlParams()
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="issue">
                <div className="issue__hero" style={{backgroundImage: `url(${bgImage1})`}}>
                    <SubscribeForm className="issue__subscribe-form" titleInWhite />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-8 issue__content ">
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
        </Layout>
    )
}
