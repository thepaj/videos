function Comment(props) {
    return(
        <div className='comment'>
            <div className='comment-content'>
                <div>{props.user}</div>
                <p>{props.text}</p>
            </div>
        </div>
    ) 
}

export default Comment;