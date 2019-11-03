import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import SubscribeForm from '../../components/subscribe-form'
import getUrlParams from '../../util/getUrlParams'
import axios from 'axios'
import './styles.scss'

const BASE_URL = 'https://kdapi.cfapps.io'
const AUTH_KEY = 'dGVhbWtkYTpBTWFKOXhwUUM5cUQ2c2NS'//btoa('teamkda:AMaJ9xpQC9qD6scR')
const headers = new Headers()
headers.set('Authorization', `Basic ${AUTH_KEY}`)

const SubscribePage = () => {
    useEffect(() => {
        const { cid, eid } = getUrlParams()
        const url = `${BASE_URL}/api/v1/rsvps/${cid}/${eid}`
        fetch(url, { method: 'GET', headers }).then(result => {
            console.log(result);
        })
    }, [])
    return (
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
}

export default SubscribePage
