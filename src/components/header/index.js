import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './styles.scss'

const Header = ({ siteTitle }) => (
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light xbg-light">
            <div className="container">
                <Link className="navbar-brand header__title" to="/">
                    <span className="header__title-frontned">호주 한인</span>
                    {` `}
                    <span className="header__title-newsletter">
                        개발자 모임
                    </span>
                </Link>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/meetups/">
                                지난 모임
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/subscribe/" className="nav-link">
                                구독신청
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
