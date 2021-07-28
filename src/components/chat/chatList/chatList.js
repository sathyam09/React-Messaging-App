import React from 'react';
import './ChatList.css';
import ChatListItem from '../ChatListItem/Chatlist-item';
import SerachPeople from '../../SearchPeople/SearchPeople';
import { useSelector } from 'react-redux';


const ChatList = () => {
    const allchatsItems =useSelector(state => state.message);
    console.log(allchatsItems,"allchatsItems");

    return(
        <div className="main__chatlist">
        <SerachPeople />
        
            <div className="chatlist__heading">
                <h4 >All Messages</h4>
                
            </div>
            
            <div className="chatlist__items">
                {allchatsItems.map( (item, index) => {
                return(
                   <ChatListItem 
           name={item.name}
              id={item.id}
              time={item.time}
              imageAlt={item.imageAlt}
              latestMessageText={item.latestMessageText}
              image={item.image}
         />          
)
                })}
              
            </div>
         

        </div>
    )
};

export default ChatList;

