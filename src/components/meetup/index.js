import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import SEO from '../seo'
import SubscribeForm from '../subscribe-form'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import bgImage1 from '../../images/bg/1.jpg'
import getUrlParams from '../../util/getUrlParams'
// import { getRsvp } from '../../services/rsvp'
import './styles.scss'

const BASE_URL = 'https://kdapi.cfapps.io'
const AUTH_KEY = btoa('teamkda:AMaJ9xpQC9qD6scR')
const headers = new Headers()
headers.set('Authorization', `Basic ${AUTH_KEY}`)

export default ({ post }) => {
    const { frontmatter, body } = post
    const [rsvp, setRsvp] = useState()
    useEffect(() => {
        // async function getRsvpByEmail() {
        //     const { cid, eid } = getUrlParams()
        //     if (cid && eid) {
        //         debugger
        //         const result = await getRsvp({ campaignId: cid, emailId: eid })
        //         console.log(result)
        //         setRsvp(result)
        //     }
        // }
        // getRsvpByEmail();
        const { cid, eid } = getUrlParams()
        debugger
        // const url = `${BASE_URL}/api/v1/rsvps/${cid}/${eid}`
        // fetch(url, { method: 'GET', headers }).then(result => {
        //     console.log(result);
        // })
    }, [])
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
