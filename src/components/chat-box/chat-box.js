import './chat-box.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ChatList from '../chat/chatList/chatList';
import ContactList from '../contact/contactList/contactList';
import Message from '../message/message';
import ChatContent from '../chat/chatContent/chatContent';
import CreateNewContact from '../contact/newContact';
import { ToastContainer, toast } from 'react-toastify';


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
