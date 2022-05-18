import { useState } from 'react';
import Comment from './Comment';
import userComments from '../apis/commentsAPI';

function CommentList() {
    const [commentText, setCommentText] = useState('');

    const onInputChange = (event) => {
        setCommentText(event.target.value)
    }

    const onCommentSubmit = (event) => {
        event.preventDefault();
        console.log(commentText)
    }

    return(
        <div className='comments-list-container'>
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
                {userComments.map(({ email, body, postId }) => {
                    return( <Comment user={email} text={body} key={postId} /> )
                })}
            </div>
        </div>
    ) 
}

export default CommentList;