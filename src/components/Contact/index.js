import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // the function will sync the internal state of the component "formState" with the user input form the DOM
    // the onChange event listener will ensure that teh "handleChange" 
    function handleChange(e) {
        // using setFormState to update the formState value for the name property
        // assigned the value taken from the input field in the UI with e.target.value and assigned this value to the property "formState.name"
        // use the spread operator "...formState" so we can retain the other key value paris in this object
        // without the spread operator, the "formState" object would be overwritten to only contain the "name: value" key pair
        //setFormState({...formState, name: e.target.value })

        // name property of target in the preceding expression actually refers to the name attribute of the form element
        // this attribute value matches the property names of "formSate (name, email, message)" and allows us to use [] to create dynamic properties
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    // located outside of the "handleChange" function declaration - because the asynchronous nature og the setFormState function will cause the console.log - 
    // placed in the function body of of "handleChange" to appear delayed in its ability to
    //console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    // JSX
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" default={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" default={email} onChange={handleChange} name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" default={message} onChange={handleChange} rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
}

export default ContactForm;