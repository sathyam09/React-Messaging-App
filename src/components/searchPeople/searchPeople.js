import React from 'react';
import {Link} from 'react-router-dom';
import '../Chat/ChatList/ChatList.css';

const SearchPeople = () => {
    return(
<div className="chatlist__search">
                <div className="search_wrap">
                <button className="search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                   
                    <input id="addUserInput" type="text" placeholder="Search People" required></input>
                    <Link to="/contact"><button className="addUser_btn">
                   <i className ="fa fa-plus"></i>

                 </button></Link> 
                </div>
            </div>
    )

};

export default SearchPeople;
