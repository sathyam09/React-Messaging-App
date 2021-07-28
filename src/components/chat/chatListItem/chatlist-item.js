import React from 'react';
import './Chatlist-item.css'

const ChatListItem = (props,isActive) => {
    const chatSelected =(e) => {
        
    }
   
    return (
        <div className="conversation" key={props.id} onClick={chatSelected}>
            <img src={props.image} alt={props.imageAlt}/>
            <div className="user-name" >{props.name}
            </div>
            <div className="created-date">{props.time}</div>
            <div className="title-text">{props.latestMessageText}</div>
    
            
        </div>
    )
}

export default ChatListItem;
