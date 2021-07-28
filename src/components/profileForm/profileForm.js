import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator'

import {Form, Row, Button, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import contactReducer from '../../redux/reducers/contactReducer';

import './profileForm.css';

const ProfileForm = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [addPhoneNo, setAddPhoneNo] = useState([]);

    const contacts = useSelector((state) => state.contact);
    console.log(contacts,"contacts")
    const dispatch =useDispatch();

    const history = useHistory();
    const addMultiplePhoneNo = () =>{
        setAddPhoneNo([...addPhoneNo,""]);
    }
    // const removeMultiplePhoneNo = (index) =>{
    //     addPhoneNo.splice(index,1)

    //     setAddPhoneNo([...addPhoneNo,""]);
    // }

    const handleChange = (e, index) => {
            addPhoneNo[index] = parseInt(e.target.value);
            setAddPhoneNo([...addPhoneNo]);
            console.log(addPhoneNo,":::::::::::")
    }

    const handleRemove =(index) => {
        addPhoneNo.splice(index,1);
        setAddPhoneNo([...addPhoneNo]);

    }

    const cancelHandler =()=>{
      history.push('/')
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email,fname,phoneNo,"email")

        const checkEmail = contacts.find((contact) => contact.email === email && contact);
        const fnameCheck = contacts.find((contact) => contact.fname ===  fname && contact);
        const phoneNoCheck = contacts.find((contact) => contact.phoneNo === parseInt(phoneNo));


        if(!fname || !lname|| !email || !phoneNo){
            return toast.warning("Please fill in all Fields!")
        }

        if(fnameCheck){
            return toast.error('The Name already exist');
        }
        if(phoneNoCheck){
            return toast.error('The Phone Number already exist');
        }
        if (!validator.isEmail(email)) {
          return toast.error('Invalid Email ID');
        }
        
        if(checkEmail){
            return toast.error('This Email already exist');

        }
       

        const data ={
            id: contacts[contacts.length -1].id+1,
            fname,
            lname,
            email,
            phoneNo,
            addPhoneNo,
            Date:new Date().toLocaleTimeString(),
            image:"https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
            alt:"man",
            ureadMsg:""
        }

        dispatch({type:"ADD_CONTACT", payload:data});
        toast.success('Contact added successfully!!');
        console.log(data)
        setFname('');
        setLname('');
        setEmail('');
        setPhoneNo('');
        setAddPhoneNo([]);

    }



    return(
        <Form id="userForm" >
          
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
             <span><i className="fa fa-user-plus formIcon"></i></span> 
             <input type="text" placeholder="First Name" className="form-Control"
             value={fname} onChange={e => setFname(e.target.value)}></input>

          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
          <input type="text" placeholder="Last Name" className="form-Control"
           value={lname} onChange={e => setLname(e.target.value)}></input>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPhone">
          <i className="fa fa-phone formIcon"></i>
            <input type="number" placeholder="Phone Number" className="form-Control"
             value={phoneNo} onChange={e => setPhoneNo(parseInt(e.target.value))}/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
          <Button onClick={addMultiplePhoneNo} id="addPhoneNo" variant="secondary">
          <i className="fa fa-plus "></i>  Add Number

    </Button>
    
    </Form.Group>
        </Row>

        {addPhoneNo.map((phone,index) => {
            return(
                <Row className="mb-3" key={index}>
        <Form.Group as={Col}  controlId="formGridAddPhone">
        <i className="fa fa-phone formIcon"></i>
          <input type="number" placeholder="Phone Number" value={phone} onChange={e => handleChange(e,index)}/>
          <i className="fa fa-close" onClick={(e) => handleRemove(e)}></i>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">  
          </Form.Group>
        </Row>
            )
        })}
      
        <Row className="mb-3">
        <Form.Group as={Col}  controlId="formGridEmail">
        <i className="fa fa-at formIcon"></i>
          <input type="email" placeholder="E-Mail"  value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          </Form.Group>
        </Row>
      
        <Row className="mb-3" >
    <Button as={Col} id="profileButton" onClick={handleSubmit} variant="secondary">
          Save
    </Button>
    <Button type="text" onClick={cancelHandler} as={Col} id="profileDiscard" variant="secondary">
          Discard
    </Button>
    </Row>
      </Form>
    )
};

export default ProfileForm;
