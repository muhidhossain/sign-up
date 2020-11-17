import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './Welcome.css';
import welcomeImg from '../../images/welcome.jpg';
import { Button } from '@material-ui/core';

const Welcome = () => {
    const history = useHistory();
    const [{user}] = useStateValue();

    // sign out user
    const signOut = () => {
        if (user) {
            auth.signOut()
                .then(() => history.push('/'))
        }
    }

    return (
        <div className='welcome'>
            <div className="welcome__info">
                <h4>Hello! {user?.email}</h4>
                <h2>Welcome to our community</h2>
                <img className='welcome__image' src={welcomeImg} alt=""/>
                <Button onClick={signOut}>Sign Out</Button>
            </div>
        </div>
    );
};

export default Welcome;