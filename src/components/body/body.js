import React, { useEffect, useState } from 'react';
import style from './body.css';
import Users from '../users/users';
import fakeApi from '../../fake-data/data.json';


const Body = () => {

    
    const allUsers = fakeApi;

    const [users , setUsers] = useState(allUsers);


    const [detail , setDetail] = useState([]);

    

    const manageDetail = (user)=>{
        
        const newDetail = [...detail,user];
        setDetail(newDetail);

    }

    let totalSalary = 0;

    for (let i = 0; i < detail.length; i++) {
        const user = detail[i];

        const salary = user.address.zipcode ;
        totalSalary = totalSalary + salary;

        
    }
    

    return (
        <div>
            <h2>My Users</h2>
            <div className='user-area'>
                <div className="users">
                    {
                        users.map(user => <Users manageDetail={manageDetail} user = {user}></Users>)
                    }
                </div>
                <div className="user-detail">
                    <div className="detail">
                        <h2>User Selected : {detail.length}</h2>
                        <h4>Total Yearly Salary : {totalSalary}</h4>
                        <br />
                        <h3>Added users</h3>
                    </div>
                    
                    <div className="aded-user">
                        {
                            detail.map(usr => <Users user = {usr} ></Users>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;