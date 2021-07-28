import React from 'react';
import './contactList.css';
import ContactListItem from '../contactListItem/conatctListItem';
import SerachPeople from '../../searchPeople/searchPeople';
import { useSelector } from 'react-redux';


const ContactList =() => {
    const allContacts =useSelector(state => state.contact);
    console.log('contacts added',allContacts)

    return(
    <div className="main__chatlist">
    <SerachPeople />
    
        <div className="chatlist__heading">
            <h4 > Contacts</h4>
            
        </div>
        
        <div className="chatlist__items">
            {allContacts.map( (item, index) => {
            return(
               <ContactListItem 
       fname={item.fname}
          id={item.id}
          lname={item.lname}
          phoneNo={item.phoneNo}
          Date={item.Date}
          image={item.image}
          alt={item.alt}
          ureadMsg={item.ureadMsg}
        //   imageAlt={item.imageAlt}
        //   latestMessageText={item.latestMessageText}
     />          
)
            })}
          
        </div>

    </div>
    )

};

export default ContactList;
