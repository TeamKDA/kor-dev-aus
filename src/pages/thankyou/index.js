import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import './styles.scss'

const ThankYou = () => (
    <Layout>
        <SEO title="구독해 주셔서 감사합니다" />
        <div className="thankyou">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h3>구독해 주셔서 감사합니다.</h3>
                        <Link to="/meetups/" className="thankyou__link-issues">지난 모임들을 확인해 보세요</Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ThankYou
