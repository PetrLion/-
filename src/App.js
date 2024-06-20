import React, { useState } from 'react';
import Login from './components/Login';
import InfoLst from './components/InfoLst';
import QuizSite from './components/QuizSite';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user) => {
        setUsername(user);
        setLoggedIn(true);
    };

    return (
        <div>
            {loggedIn ? (
                <>
                    <h1>Welcome, {username}</h1>
                    <InfoLst />
                    <QuizSite />
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;

