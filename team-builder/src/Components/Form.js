import React, {  useState } from 'react';


function Form({setMember}) {
  // const {setMember} = props;
  const [data, setData] = useState({
    username:"",
    email:"",
    role:""
  });
 
  const handleSubmit = event => {
    event.preventDefault();
    setMember(members=>[...members, data])
    setData({username:'',email:'',role:''})
  }

  const changeHandler = event => {
      event.preventDefault();
      setData({...data, [event.target.name] : event.target.value })
  }

  return (
    <form onSubmit={handleSubmit} >
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
                type="text"
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

        <button type="submit">Add Person!</button>
    </form>
  );
}

export default Form;