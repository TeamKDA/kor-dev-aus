import React from 'react'
import './styles.scss'

const RsvpButton = ({ userRegistered, register, cancel }) => {
    let question
    if (userRegistered == null) return null
    if (userRegistered) {
        question = (
            <>
                <h4 className="rsvp-button__label">참석 신청 되셨습니다. 밋업날 만나요 🙌</h4>
                <button type="button" className="btn btn-outline-primary" onClick={cancel}>신청 취소</button>
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