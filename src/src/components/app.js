import React from 'react'; 
import CreateComment from './create-comment/create-comment';
import ChatBody from './chat-body/chat-body';

let App = () => {
	return (
			<div className='container'>
				<h1> Модуль 15 </h1>
				<ChatBody />
				<CreateComment 	/>
			</div>
		)
}

export default App