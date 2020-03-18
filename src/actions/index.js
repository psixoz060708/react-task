import {ADD_COMMENT, REMOVE_COMMENT, GET_LOCAL_STORAGE} from '../actionTypes'

let nextCommentId = Date.now();

export const addComment = (name, message) => {
	const newComment = {
		id: nextCommentId++,
		autor: name,
		message: message,
		date: new Date().toString().slice(3,25)
	}
	return (dispatch) => {
		dispatch({
			type: ADD_COMMENT,
			newComment
		})	
	}
}

export const removeComment = (id) => {
	return {
		type: REMOVE_COMMENT,
		id 
	}
}

export const getLocalStorage = () => {
	const localState = localStorage.getItem('state')

	return (dispatch) => {
		dispatch({ 
			type: GET_LOCAL_STORAGE, 
			localState 
		});
	  };
}