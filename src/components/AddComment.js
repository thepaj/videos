import { useState } from "react";

function AddComment(props) {
    const [text, setText] = useState();

    // input changes function
    const OnTextChange = (event) => {
        setText(event.target.value)
    }

    // submit new comment function
    const onCommentSubmit = (event) => {
        event.preventDefault();

        // send props via callback to CommentsList
        props.callback(text)
    }

    return(
        <div className='add-comment-container'>
            <form onSubmit={onCommentSubmit} className="form">
                <div className="comment-field">
                    <label className='form-label'>Add comment</label>
                    <input
                        type="text"
                        placeholder='text'
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