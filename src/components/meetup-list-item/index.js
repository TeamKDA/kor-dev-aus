import React from 'react'
import { Link } from 'gatsby'
import './styles.scss'

const IssueListItem = ({ path, date, title }) => {
    return (
        <div className="issue-list-item">
            <Link to={path} className="issue-list-item__link">
                <div className="issue-list-item__heading">
                    <span className="issue-list-item__index">{title}</span>
                </div>
                <div className="issue-list-item__date">{date}</div>
            </Link>
        </div>
    )
}

export default IssueListItem
