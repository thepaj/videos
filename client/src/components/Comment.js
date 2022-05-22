import avatar from '../images/woman.png'

function Comment(props) {
    return(
        <div className='comment'>
            <div className='comment-content'>
                <div className='comment-header'>
                    <img src={avatar} className='avatar' />
                    <div className='user-info'>
                    <p>{props.name}</p>
                    <p>{props.email}</p>
                </div>
                </div>
            </div>
            <div className='comment-text'>
                <p>{props.text}</p>
            </div>
        </div>
    ) 
}

export default Comment;