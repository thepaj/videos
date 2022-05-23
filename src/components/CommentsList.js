import { useState } from 'react';
import Comment from './Comment';
import userComments from '../apis/commentsAPI';
import AddComment from './AddComment';

function CommentList(props) {
    // get props
    const toggleComments = props.toggleComments;

    const addComment = (newComment) => {
        console.log(newComment)
    }

    return(
        <div className='comments-list-container'>
            <div>
                <p onClick={toggleComments} className='comments-toggle'>Hide Comments</p>
            </div>
            <AddComment callback={addComment}/>
            <div>
                {userComments.map(({ email,name, body, id }) => {
                    return( <Comment name={name} email={email} text={body} key={id} /> )
                })}
            </div>
        </div>
    ) 
}

export default CommentList;