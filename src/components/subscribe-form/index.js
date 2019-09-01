import React, { Fragment } from 'react'
import './styles.scss'

const SubscribeForm = () => {
    return (
        <Fragment>
            <div className="subscribe-form">
                <h5 className="subscribe-form__title">
                    매달 열리는 개발자 모임과 소식들을 받아보세요
                </h5>
                <form
                    action="#"
                    method="post"
                    className="xform-inline"
                    target="_blank"
                >
                    <div className="form-row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <input
                                    type="email"
                                    required
                                    defaultValue=""
                                    name="EMAIL"
                                    className="form-control form-control-lg"
                                    placeholder="이메일 주소"
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <button
                                    readOnly
                                    type="submit"
                                    name="subscribe"
                                    className="btn btn-primary btn-block btn-lg"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}

export default SubscribeForm
