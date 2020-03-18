import React from 'react';
import './styles.css';

function ChatComment({commentObj, removeComment}) {
	const {id, autor, date, message} = commentObj
	return (
		<div id={id} className='comment'>
			<div className='comment__left-container'>
				<div className='user-info'>
					<div className='autor'> {autor} </div>
					<div className='date'> {date} </div>
				</div>
				<div className='comment-text'> {message} </div>
			</div>
			<button className='remove-comment' 
				onClick={(e) => removeComment(id, e)}> 
				Удалить 
			</button>
		</div>
	)
}

export default ChatComment