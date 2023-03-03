import React, { useEffect } from 'react';
import style from './users.css';


const Users = (props) => {

    const user = props.user;
    console.log(user)

    const {name,address,email,phone,username,photo} = user;
    

    return (
        <div className='user-info'>
            <img src={address.photo} alt="image" />
            <h3>Name : {name}</h3>
            <h4>Username : {username}</h4>
            <h5>Email : {email}</h5>
            <h5>Phone : {phone}</h5>
            <h4>Salary : ${address.zipcode}</h4>
            <button onClick={()=>props.manageDetail(user)}><b>+</b> Add</button>
        </div>
    );
};

export default Users;