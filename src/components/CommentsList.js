import { useState } from 'react';
import Comment from './Comment';
import userComments from '../apis/commentsAPI';
import AddComment from './AddComment';

function CommentList(props) {
    const [comments, setComments] = useState(userComments);

    // get props
    const toggleComments = props.toggleComments;
    const authedUser = props.authedUser;

    // add new coming
    const addComment = (text) => {

        // create new comment object
        let newComment = {
            "postId": 1,
            "id": Math.random(5, 100),
            "name": authedUser.name,
            "email": authedUser.email,
            "body": text
        }

        // add comment to the state
        setComments([...comments, newComment]);
    }

    return(
        <div className='comments-list-container'>
            <div>
                <p onClick={toggleComments} className='comments-toggle'>Hide Comments</p>
            </div>
            <AddComment callback={addComment}/>
            <div>
                {comments.map(({ email,name, body, id }) => {
                    return( <Comment name={name} email={email} text={body} key={id} /> )
                })}
            </div>
        </div>
    ) 
}

export default CommentList;