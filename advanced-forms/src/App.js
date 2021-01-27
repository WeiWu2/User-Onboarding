import logo from './logo.svg';
import './App.css';
import Form from './component/Form'
import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import Schema from './validate/schema'

function App() {

const onSubmit = () => {}


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



const initialFormValues = {
  username:"",
  email:"",
  password:'',
  tos:false
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: '',
}
const initialUsers = []
const initialDisabled = true
const [user,setUser] = useState({initialUsers});
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors) 
const [disabled, setDisabled] = useState(initialDisabled)       


  return (
    <div >
      <Form formValues={formValues} submit={onSubmit} change={onChange}/>
    </div>
  );
}

export default App;
