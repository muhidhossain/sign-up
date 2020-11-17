import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './SignUp.css';

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [disabled, setDisabled] = useState(true);

    // creating a new user with email and password
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/welcome')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='signUp'>
            <div className='signUp__info'>
                <h1>SIGN UP</h1>

                <h5>Email</h5>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />

                <h5>New Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value) & setDisabled(true)} />

                <h5>Confirm Password</h5>
                <input type="password" onChange={event => password === event.target.value ? setDisabled(false) : setDisabled(true)} />

                <Button disabled={disabled} onClick={register}>Sign Up</Button>

                <Link className='signUp__signInLink' to='/'>Already have an account</Link>
            </div>
        </div>
    );
};

export default SignUp;