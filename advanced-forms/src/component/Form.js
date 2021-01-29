import React from 'react';

export default function Form(props){
    const {formValues, submit, change, disabled, errors} = props;

    const onChange = (evt) => {

        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);

    }
    const onSubmit = (evt) => {

        evt.preventDefault();
        submit();
    }
return (<div>
    <form onSubmit={onSubmit}>

          <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>

        <label>
        Name
        <input
        type='text'
        name="name"
        value={formValues.name}
        onChange={onChange}
        >
    
    </input>
        </label>

        <br></br>
        <label>
          Email
          <input
            value={formValues.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <br></br>
        <label>

        Password
        <input
         type='text'
         name='password'
         value={formValues.password}
         onChange={onChange}>
    
    </input>
   
        </label>
  <br></br>
        <label>
        Agree to the Terms of Service: 
        <input
         type='checkbox'
         name="tos"
         value={formValues.tos}
         onChange={onChange}>
    
    </input>

        </label>

        <button id = "submit" disabled={disabled}>submit</button>




    </form>



</div>)

}