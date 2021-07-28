import React from 'react';
import './ContactListItem.css';
import { useHistory } from 'react-router-dom';


const ContactListItem = (props,isActive) => {
    const history = useHistory();

    const contactSelected =(id) => {
        console.log(id,"*******")
        history.push('/')
    }

   
    return (
        <div className="conversationContact editBack" key={props.id} onClick={() => contactSelected(props.fname)}>
            <img src={props.image} alt={props.alt}/>
            {props.ureadMsg ? <span className="unreadMsg">{props.ureadMsg}</span>:'' }
            

            <div className="title-name">{props.fname}
            <div className="contact-no">
                +{props.phoneNo}
            </div>
            <div className="contact-date">
            <span>{props.Date}</span>

            </div>
            </div>
            <div className="contact-change">
            <i className="fa fa-phone"></i>

            <i className="fa fa-envelope"></i>
            </div>


        </div>
    )
}

export default ContactListItem;