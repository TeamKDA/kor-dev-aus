import React from 'react'
import { Link } from 'gatsby'
import './styles.scss'

const IssueListItem = ({ index, path, date, title, excerpt }) => {
    return (
        <div className="issue-list-item">
            <div className="issue-list-item__heading">
                <span className="issue-list-item__index">{title}</span>
            </div>
            <div className="issue-list-item__date">{date}</div>
        </div>
    )
}

export default IssueListItem
