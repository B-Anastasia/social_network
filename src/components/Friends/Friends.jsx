import React from 'react';
import s from './Friends.module.scss';
import User from "../User/User";

const Friends = (props) => {

    let friends = props.state.map( user =>  <User img={user.img} name={user.name} /> );
    return (
        <div>
            {friends}

        </div>
    );
}

export default Friends;