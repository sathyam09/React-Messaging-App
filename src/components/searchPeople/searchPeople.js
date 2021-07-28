import React from 'react';
import {Link} from 'react-router-dom';
import '../chat/chatList/chatList.css';

const SearchPeople = () => {
    return(
<div className="chatlist__search">
                <div className="search_wrap">
                <button className="search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                   
                    <input id="addUserInput" type="text" placeholder="Search People" required></input>
                 <button className="addUser_btn">
                   <Link to="/contact"><i className ="fa fa-plus"></i></Link> 

                 </button>
                </div>
            </div>
    )

};

export default SearchPeople;
