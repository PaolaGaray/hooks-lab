import React, { useState, createContext } from 'react';

import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';


export const UserContext = createContext();



function App() {

  const [username] = useState('');

  return (
    <UserContext.Provider value={ username }>
      <Login />
      {/* <CreatePost /> */}
      <PostList />
    </UserContext.Provider>
  );
}

export default App;
