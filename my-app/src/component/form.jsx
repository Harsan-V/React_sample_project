import React, { useState } from 'react'
import Button from './button';
import Popup from './popup';

function Form() {
    const [showPopup,setShowPopup] = useState(false);
    const handleSubmit =(e) =>{
        e.preventDefault();
        setShowPopup(true)
    }
  return (
    <div className='Form'>
        <form className='form-container' onSubmit={handleSubmit}>
            <label>User Login Form</label>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <Button name="Submit Form"/>
        </form>

        {showPopup && (<Popup text="Form Submitted" onClose={() => setShowPopup(false)} />)}
    </div>
  )
}

export default Form;