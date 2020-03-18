import React from 'react';
import ChatComment from '../chat-comment/chat-comment';
import { connect } from 'react-redux';
import { removeComment } from '../../../actions'

import './styles.css';

function ChatBody({ commentObj, removeComment }) {
	const comments = commentObj.length ? 
		(
			commentObj.map(item => {
				return <ChatComment 
						commentObj={item} 
						key={item.id}
						removeComment={removeComment} 
				/>;
		})
		) : (
			<p className='clean-chat'> Чат пуст </p>
		);
	return (
		<div className='chat'> {comments} </div>
	)
}

const mapStateToProps = (state) => {
	return {
		commentObj: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeComment: (id) => {
			dispatch(removeComment(id))
		}	
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatBody); 