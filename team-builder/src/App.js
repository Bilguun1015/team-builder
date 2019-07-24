import React, { useState } from 'react';
import Form from './Components/Form.js';
//import TeamMembers from './Components/TeamMembers.js';

import './App.css';

function App() {
  const [members, setMember] = useState([]);
  console.log(members)
  
  const person = members.map(member=>{
    return member
  })

  return (
    <div className="App">
       <div>
        <ul>
         <li>{person}</li>
        </ul>
    </div>
    <Form  setMember={setMember}/>
    </div>
  );
}

export default App;
