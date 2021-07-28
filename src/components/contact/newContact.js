import React from 'react';
import {Link} from 'react-router-dom';

import ProfileForm from '../profileForm/profileForm';
import './newContact.css';
// import '../message/message.css';


const CreateNewContact = () => {  
      return(
    <div className="main__chatcontent">
        <div className="content__header">
         <div className="blocks">
            <div className="current-chatting-user">
            <Link to="/"> <button className="btn-nobg editBack">
             <i className="fa fa-arrow-left"></i>
                </button></Link>
            <p>NEW CONTACT</p>
            </div>
         </div>
         
    </div>  
    <div className="contactInput">
    
        <div className="content__user">
        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=""/>
        <button className="btn-nobg" id="editUser">
                    {/* <a><i id="editProfile" className="fa fa-pencil"></i></a> */}
                </button>
                <div className="ChatDate"><h4>Profile</h4></div>

        </div>
        <div>
        <ProfileForm />
    </div>
    </div>
    </div>
    )

}

export default CreateNewContact;