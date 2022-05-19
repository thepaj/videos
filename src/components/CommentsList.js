import { useState } from 'react';
import Comment from './Comment';
import userComments from '../apis/commentsAPI';

function CommentList(props) {
    const [commentText, setCommentText] = useState('');

    // get props
    const toggleComments = props.toggleComments;

    const onInputChange = (event) => {
        setCommentText(event.target.value)
    }

    const onCommentSubmit = (event) => {
        event.preventDefault();
        console.log(commentText)
    }

    return(
        <div className='comments-list-container'>
            <div>
                <p onClick={toggleComments} className='comments-toggle'>Hide Comments</p>
            </div>
            <form onSubmit={onCommentSubmit} className="form">
                <div className="comment-field">
                    <label className='form-label'>Add comment</label>
                    <input
                        type="text"
                        value={commentText}
                        onChange={onInputChange}
                        className='comment-input'
                    />
                </div>
                <button className='comment-btn' type='submit'>Add comment</button>
            </form>
            <div>
                {userComments.map(({ email,name, body, id }) => {
                    return( <Comment name={name} email={email} text={body} key={id} /> )
                })}
            </div>
        </div>
    ) 
}

export default CommentList;