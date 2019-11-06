import React from 'react'
import './styles.scss'

const RsvpButton = ({ userRegistered, register, cancel }) => {
    let question
    if (userRegistered) {
        question = (
            <>
                <span className="rsvp-button__label">이미 등록하셨습니다. 취소하시겠습니까?</span>
                <button type="button" className="btn btn-primary" onClick={cancel}>이번엔 참석이 어렵습니다 😭</button>
            </>
        )
    }else{
        question = (
            <>
                <span className="rsvp-button__label">참석하시겠습니까?</span>
                <button type="button" className="btn btn-success" onClick={register}>네, 참석합니다 👌</button>
            </>
        )
    }
    return (
        <div className="rsvp-button">
            {question}
        </div>
    )
}

export default RsvpButton