import React, { createRef, useState } from 'react';
import {Link} from 'react-router-dom';

import './message.css';
import { toast } from 'react-toastify';
import ChatContent from '../chat/chatContent/chatContent'; 
import { useDispatch, useSelector } from 'react-redux';
// import MessageReducer from '../../redux/reducers/messageReducer';
const MessageBody = () => {
    const messageEndRef =createRef(null);
    const[msg,setMsg] = useState('');
    const messageData = useSelector((state) => state.message);
    const dispatch =useDispatch();
    console.log(messageData,"messageData")



    const onKeyUp =(e) => {
        if (e.charCode === 13) {
            setMsg(e.target.value );
            handleSendMsg();
        }
      }

 const handleSendMsg = () => {
    if(!msg){
        return toast.error('Please add message');
    }

    const msgData = {
        latestMessageText:msg,
        id: messageData[messageData.length -1].id+1,
        time:new Date().toLocaleTimeString(),
        image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        imageAlt:"man",
        name:"Sathya"
    }

    dispatch({type:"ADD_MESSAGE", payload:msgData});
        toast.success('Message sent successfully!!');
        setMsg('')

        console.log(msgData)
 }

//  scrollToBottom()
return (
    <div className="main__chatcontent">
    <div className="content__header">
         <div className="blocks">
         
             <div className="current-chatting-user">
             <button className="btn-nobg">
             <Link to="/contact"> <i className="fa fa-arrow-left"></i></Link>
                </button>
                 <p>SATHYA</p>
            </div>
         </div>
         <div className="blocks">
        <div className="settings">
        <button className="btn-nobg">
                    <i className="fa fa-ellipsis-h"></i>
                </button>
            
        </div>
    </div>
    </div>
    <div className="content__body">
        <div className="ChatDate"><h4>Today</h4></div>
        <div className="chat__items">
           
            <img className="msgUser" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Man"/>
            {messageData.map( (item,index) => {
                return(
                    <ChatContent
                    id={item.index}
                    user={item.name} 
                    msg={item.latestMessageText}
                    image={item.image}
                    time={item.time}
                    imageAlt={item.imageAlt}/>

                )

            })}
            <div ref={messageEndRef}></div>
        </div>

    </div>
     <div className="content__footer">
            <div className="sendNewMessage" onKeyPress={onKeyUp}>
                <button className="btn-nobg">
                    <i className="fa fa-paperclip"></i>
                </button>
                <input type="text" placeholder="Type a message here.." value={msg} onChange={e => setMsg(e.target.value)}/>
                <button className="btn-nobg" id="sendMsgBtn" onClick={handleSendMsg}>
                    <i className="fa fa-paper-plane"></i>
                </button>
            </div>

    </div>
</div>
)

}

export default MessageBody;