import React, { useState, useContext, useReducer } from 'react';

import { loginAPI } from '../utils';
import UserContext from '../App';
import { loginReducer } from '../reducers/loginReducer';


const initialState = {
    username: '',
    password: '',
    isLoading: '',
    error: '',
    isloggedIn: false
}


export default function Login() {

    const currentUser =useContext(UserContext);

    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, isLoading, error, isloggedIn } = state;


    const handleFormSubmit = async e => {
        e.preventDefault();

        dispatch( { type: 'LOGIN' });

        try{
            await loginAPI({ username, password });
            dispatch({ type: 'SUCCESS' });
        } catch (error){
            dispatch({ type: 'ERROR' });
        }

    }

    return (
        <>
        <div>
            {isloggedIn ? (
                <>
                    <h1>Welcome {username}</h1>
                    <button onClick={() => dispatch({ type: 'LOGOUT' }) }
                    >
                    LogOut
                    </button>
                </>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    {error && <p>{error}</p>}
                    <p>Please Login!</p>
                    <input
                        type='text'
                        placeholder='username'
                        value={username}
                        onChange={e =>
                            dispatch({
                                type: 'FIELD',
                                field: 'username',
                                value: e.currentTarget.value,
                            })}
                    />
                    <input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={e =>
                            dispatch({
                                type: 'FIELD',
                                field: 'password',
                                value: e.currentTarget.value,
                            })}
                    />
                    <button
                        type='submit'
                        disabled={isLoading}
                    >{isLoading ? 'Looging in...' : 'Log In'}
                    </button>
                </form>
            )}
        </div>
        </>
    )
}
