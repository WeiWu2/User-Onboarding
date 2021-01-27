import React from 'react';

export default function Form(props){
    const {formValues, submit, change} = props;

    const onChange = () => {

        return {};

    }
    const onSubmit = () => {}
return (<div>
    <form onSubmit={onSubmit}>
        <label>
        Name
        <input
        type='text'
        name="name"
        value=''
        onChange={onChange}
        >
    
    </input>
    <br></br>
        </label>
        <label>
        Email
        <input
         type='email'
         name="email"
         value=''
         onChange={onChange}>
    
    </input>
 <br></br>
        </label>
        <label>
        Password
        <input
         type='text'
         name="password"
         value=''
         onChange={onChange}>
    
    </input>
    <br></br>
        </label>

        <label>
        Agree to the Terms of Service: 
        <input
         type='checkbox'
         name="TOS"
         value=''
         onChange={onChange}>
    
    </input>

        </label>

<button>Submit</button>




    </form>



</div>)

}