import logo from './logo.svg';
import './App.css';
import Form from './component/Form'
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import Schema from './validate/schema'
import axios from "axios"
import User from './component/User'
const initialFormValues = {
  name:"",
  email:"",
  password:'',
  tos:false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}
const initialUsers = [
  {name: "Wei", email: "wei@gmail.com", password:"why would I should password", tos:true},
  {name: "Wei2", email: "wei2@gmail.com", password:"why would I should password", tos:true}
];
const initialDisabled = true


function App() {
  const [user,setUser] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)     

  
const onSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos:true
    }
    postNewUser(newUser);
  }

  const postNewUser = newUser => {
  
    axios.post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setUser([res.data, ...user])
    })
    setFormValues(initialFormValues);
  }


const onChange = (name, value) => {
  yup.reach(Schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({...formErrors,
    [name]: ''})
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value 
  })
}
  

useEffect(() => {
  Schema.isValid(formValues).then((valid) => {
    setDisabled(!valid)
  })
}, [formValues])

  return (
    <div >
      <Form formValues={formValues} submit={onSubmit} change={onChange} disabled={disabled}
        errors={formErrors}/>


         {
        user.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
