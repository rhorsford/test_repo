import React, {useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import axios from "axios";

export default function Update() {
    const [id, setID] = useState(null);
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('Title'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));

    }, []);

    const updateData = () => {
        axios.put(`https://dummyapi.io/data/v1/user/${id}`, {
                title, firstName, lastName
            },
            {
                headers: {
                    'Content-type': 'application/json',
                    'app-id': '61f14adf9cec5414e97ff3a0'
                }
            })
    }

    return (
        <div>
            <h2>Update</h2>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Link to='/user/list'>
                    <Button type='submit' onClick={updateData}>Save</Button>
                </Link>
            </Form>
        </div>
    )
}