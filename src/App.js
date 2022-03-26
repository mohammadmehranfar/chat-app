import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';

import './App.css'
import LoginForm from './Components/LoginForm';
const App = () => {
	if(!localStorage.getItem('username'))return <LoginForm/>
    return (
		<ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='4c11a051-8bee-4efa-819a-e95a6ef7eeae'
            renderChatFeed = {chatAppProps => <ChatFeed {...chatAppProps}/>}
		/>
	);
};

export default App;