import React, { useState } from 'react';
import Form from './Components/Form.js';
import Card from "./Components/Card"

import './App.css';

function App() {
  const [members, setMember] = useState([
    {username:"hello",
    email:"gmail.com",
    role:"web"
    }


  
  ]);
  console.log(members)
  return (
    <div className="App">
      <Form  setMember={setMember}/>
      {members.map(member=>{
        return <Card member={member}/>
      })}
    
    </div>
  );
}

export default App;
