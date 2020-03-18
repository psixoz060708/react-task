import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, getLocalStorage } from '../../../actions';

import './styles.css';

class CreateComment extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			message: '',
		};
		this.inInputChange = this.inInputChange.bind(this);
		this.cleanInput = this.cleanInput.bind(this);
		this.addComment = this.addComment.bind(this);
	}

	inInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value})
	}

	addComment(e) {
		e.preventDefault()
		const {name, message} = this.state
		const {addComment} = this.props
		addComment(name, message)
		this.cleanInput()
	}

	cleanInput() {
		this.setState({name: '', message: ''})
	}

	componentDidMount() {
		this.props.getLocalStorage()
	}
	render(){
		const {name, message} = this.state;
		const {inInputChange, addComment} = this;
		return (
			<div>
				<form className='comment-field' onSubmit={addComment}>
					<div className='create-comment'>
						<input  type='text' 
							name ='name' 
							className='name' 
							placeholder='Ваше имя' 
							required value={name} 
							onChange={inInputChange}
						/>
						<textarea name ='message'  
							className='message' 
							message='message' 
							placeholder='Сообщение' 
							required value={message} 
							onChange={inInputChange}
						/>
						<button type='submit' className='send-btn'> Отправить </	button>
					</div>			
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addComment: (name, message) => {
			dispatch(addComment(name, message))
		},
		getLocalStorage: () => dispatch(getLocalStorage())
	}
}

export default connect(
	null, 
	mapDispatchToProps
)(CreateComment); 