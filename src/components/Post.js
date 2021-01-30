import React, { useContext } from 'react'

import { UserContext } from '../App';

export default function Post() {

    const user = useContext(UserContext);

    return (
        <>
            <p>{user}</p>
        </>
    )
}
