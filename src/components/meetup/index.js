import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import SEO from '../seo'
import SubscribeForm from '../subscribe-form'
import './styles.scss'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import bgImage1 from '../../images/bg/1.jpg'
import bgImage2 from '../../images/bg/2.jpg'
import bgImage3 from '../../images/bg/3.jpg'
import bgImage4 from '../../images/bg/4.jpg'
import bgImage5 from '../../images/bg/5.jpg'
import getUrlParams from '../../util/getUrlParams'

const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5]

export default ({ post }) => {
    const { cid, eid } = getUrlParams()
    console.log(cid, eid);
    const [img, setImg] = useState(bgImage1)
    useEffect(() => {
        setTimeout(() => {
            const currentIndex = bgImages.findIndex(bgImage => bgImage === img)
            const nextIndex = currentIndex + 1 < bgImages.length ? currentIndex + 1 : 0
            setImg(bgImages[nextIndex])
        }, 10000)
    }, [img])
    const { frontmatter, body } = post
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <div className="issue">
                <img src={img} className="issue__bg" alt="melbourne" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="issue__hero row justify-content-center">
                                <div className="col-lg-8">
                                    <SubscribeForm className="issue__subscribe-form" titleInWhite />
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
