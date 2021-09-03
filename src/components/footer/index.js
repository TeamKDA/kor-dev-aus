import React from 'react'
import './styles.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col">
                        <p className="footer__copyright">
                            © {new Date().getFullYear()}, 호주 한인 개발자 모임
                        </p>
                        <p className="footer__powered-by">
                            Powered by Gatsby
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
