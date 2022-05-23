import { useState } from "react";
import userComments from '../apis/commentsAPI';

function AddComment(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [text, setText] = useState();

    const onNameChange = (event) => {
        setName(event.target.value)
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const OnTextChange = (event) => {
        setText(event.target.value)
    }

    const onCommentSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className='add-comment-container'>
            <form onSubmit={onCommentSubmit} className="form">
                <div className="comment-field">
                    <label className='form-label'>Add comment</label>
                    <input
                        type="text"
                        value={name}
                        onChange={onNameChange}
                        className='comment-input'
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={onEmailChange}
                        className='comment-input'
                    />
                    <input
                        type="text"
                        value={text}
                        onChange={OnTextChange}
                        className='comment-input'
                    />
                </div>
                <button className='comment-btn' type='submit'>Add comment</button>
            </form>
        </div>
    ) 
}

export default AddComment;