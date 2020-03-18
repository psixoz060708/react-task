import {ADD_COMMENT, REMOVE_COMMENT, GET_LOCAL_STORAGE} from '../actionTypes'

const storage = (state = [], action) => {
	switch (action.type) {
		case ADD_COMMENT:
			return [...state, action.newComment]

		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id)

		case GET_LOCAL_STORAGE:
			return JSON.parse(action.localState) 			

		default: 
			return state;
	}

}
export default storage;