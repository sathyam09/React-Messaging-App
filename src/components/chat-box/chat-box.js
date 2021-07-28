import './Chat-box.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ChatList from '../Chat/ChatList/ChatList';
import ContactList from '../Contact/ContactList/ContactList';
import Message from '../Message/Message';
import CreateNewContact from '../Contact/NewContact';
import { ToastContainer } from 'react-toastify';


const ChatBox = () => {
    
return(
    <div className="main_chatBody">
        <ToastContainer />
        <Router>

        <Switch>
            <Route exact path='/contact'>
                <ContactList />
                <CreateNewContact />
            </Route>
            <Route exact path='/'>
                <ChatList />
                <Message />
            </Route>
        </Switch>
        </Router>
       
    </div>
)

};

export default ChatBox;
