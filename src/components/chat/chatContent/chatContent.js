import React from 'react';
import './chatContent.css';

const ChatContent =(props,index) => {
    return(
<div key={props.id} className="chat__item__content" >
    <div className="chat__msg">{props.msg}</div>
    <div className="chat__meta">
        <span> {props.time}</span>
    </div>

</div>

    )

}
export default ChatContent;
