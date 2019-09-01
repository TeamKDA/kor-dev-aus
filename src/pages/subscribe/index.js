import React from 'react'
import Layout from '../../components/layout'
import SubscribeForm from '../../components/subscribe-form'
import './styles.scss'

const SubscribePage = () => (
    <Layout>
        <div className="subscribe">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default SubscribePage
