import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import SEO from '../seo'
import SubscribeForm from '../subscribe-form'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import bgImage1 from '../../images/bg/1.jpg'
import getUrlParams from '../../util/getUrlParams'
import { getRsvp, register, cancel } from '../../services/rsvp'
import RsvpButton from './rsvp-button'
import './styles.scss'

export default ({ post }) => {
    const { frontmatter, body } = post
    const [userRegistered, setUserRegistered] = useState(null)
    const [userParam, setUserParam] = useState()
    useEffect(() => {
        async function findUserRegistered() {
            const urlParams = getUrlParams()
            if (urlParams && urlParams.cid && urlParams.eid) {
                const { cid, eid } = urlParams;
                setUserParam({ cid, eid })
                const result = await getRsvp({ campaignId: cid, emailId: eid })
                setUserRegistered(result && result[0] && result[0].rsvpYn)
            }
        }
        findUserRegistered();
    }, [])
    const handleRegisterClick = async () => {
        try {
            setUserRegistered(true)
            await register({ campaignId: userParam.cid, emailId: userParam.eid })
        }catch{
            setUserRegistered(false)
            alert('죄송합니다. 등록중 에러가 발생했습니다.')
        }
    }
    const handleCancelClick = async () => {
        try{
            setUserRegistered(false)
            await cancel({ campaignId: userParam.cid, emailId: userParam.eid })
            alert('취소되었습니다')
        }catch{
            setUserRegistered(true)
            alert('죄송합니다. 취소중 에러가 발생했습니다.')
        }
    }
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
                            <p className="issue__subtitle">
                                {frontmatter.subTitle}
                            </p>
                            {userParam && (
                                <RsvpButton
                                    userRegistered={userRegistered}
                                    register={handleRegisterClick}
                                    cancel={handleCancelClick}
                                />
                            )}
                            {body && <MDXRenderer>{body}</MDXRenderer>}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
