import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './SignIn.css';

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // sign In user with email and password
    const signIn = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/welcome')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='signIn'>
            <div className="signIn__info">
                <h1>SIGN IN</h1>

                <h5>Email</h5>
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />

                <Button onClick={signIn}>Sign Up</Button>

                <Link className='signIn__signUpLink' to='/signUp'>Create account</Link>
            </div>
        </div>
    );
};

export default SignIn;