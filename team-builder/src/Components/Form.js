import React, {  useState } from 'react';


function Form({setMember}) {

  const [data, setData] = useState({
    username:"",
    email:"",
    role:""
  });
 
  const handleSubmit = event => {
    event.preventDefault();
    setMember(data)
  }

  const changeHandler = event => {
      event.preventDefault();
      setData({...data, [event.target.name] : event.target.value })
  }

  return (
    <form onSubmit={event => handleSubmit(event)} >
        <label>
            Name:
            <input 
                type="text"
                name="username"
                onChange = {changeHandler}
                value = {data.username}
            />
        </label>

        <label>
            Email:
            <input 
                type="email"
                name="email"
                onChange = {changeHandler}
                value = {data.email}
            />
        </label>

        <label>
            Role:
            <input 
                type="text"
                name="role"
                onChange = {changeHandler}
                value = {data.role}
            />
        </label>

        <button>Submit!</button>
    </form>
  );
}

export default Form;