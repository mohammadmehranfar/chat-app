import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';

import './App.css'
const App = () => {
    return (
		<ChatEngine
			height='100vh'
			userName='Arsalan'
			userSecret='123123'
			projectID='4c11a051-8bee-4efa-819a-e95a6ef7eeae'
            renderChatFeed = {chatAppProps => <ChatFeed {...chatAppProps}/>}
		/>
	);
};

export default App;