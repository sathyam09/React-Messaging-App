import React from 'react';
import './chatlist-item.css'

const ChatListItem = (props,isActive) => {
    const chatSelected =(e) => {
        console.log(e,"KKKKKKKK")
        
    }
   
    return (
        <div className="conversation" key={props.id} onClick={chatSelected}>
            <img src={props.image} alt={props.imageAlt}/>
            <div className="title-text">{props.name}
            <p>{props.latestMessageText}</p></div>
            <div className="created-date">{props.time}</div>
            <div className="conversation-message">
                
            </div>
        </div>
    )
}

export default ChatListItem;
