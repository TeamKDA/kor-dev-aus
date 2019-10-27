import React, { Fragment, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import './styles.scss'

const config = {
    apiKey: 'AIzaSyCeELCTWYtsCnW6obNjAN_mf6eXGOSjilM',
    authDomain: 'teamkda-2eb3b.firebaseapp.com',
}
firebase.initializeApp(config)
const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
    }
}
const status = {
    NOT_KNOWN: 'NOT_KNOWN',
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
}

const SubscribeForm = ({ className, titleInWhite }) => {
    const [signInStatus, setSignInStatus] = useState(status.Not_KNOWN)
    const classes = `subscribe-form ${className}`
    const titleClass = `subscribe-form__title ${titleInWhite ? 'subscribe-form__title--white' : ''}`
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setSignInStatus(user ? status.SIGN_IN : status.SIGN_OUT)
        })
        return () => {
            unregisterAuthObserver()
        }
    }, [signInStatus]);

    return (
        <Fragment>
            <div className={classes}>
                {signInStatus === status.SIGN_OUT && (
                    <>
                        <h5 className={titleClass}>
                            매달 열리는 개발자 모임과 소식들을 받아보세요
                        </h5>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
                    </>
                )}
            </div>
        </Fragment>
    )
}

export default SubscribeForm
