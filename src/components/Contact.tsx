import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
        <h1>Contact Me</h1>
<p>
  Just a glimpse of what I’ve been up to — hope it’s helpful and worth a quick look.
</p>
<a
  href="mailto:dss283pro@gmail.com"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    fontSize: '18px',
    marginTop: '12px'
  }}
>
  <img
    src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png"
    alt="Email"
    style={{ width: '20px', height: '20px', marginRight: '8px' }}
  />
  dss283pro@gmail.com
</a>

          {/* <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box> */}
        </div>
      </div>
    </div>

  //   <div id="contact"
  //   className="contact-section"
  //   style={{
  //     marginTop: '60px',
  //     textAlign: 'center',
  //     padding: '20px',
  //     color: 'white',
  //   }}
  // >
  //   <h2 style={{ color: 'white' }}>Contact Me</h2>
  //   <p>  Just a glimpse of what I’ve been up to — hope it’s helpful and worth a quick look.          </p>

  //   <a
  //     href="mailto:yourname@example.com"
  //     style={{
  //       display: 'inline-flex',
  //       alignItems: 'center',
  //       textDecoration: 'none',
  //       color: 'white',
  //       fontSize: '18px',
  //     }}
  //   >
  //     <img
  //       src="https://img.icons8.com/material-outlined/24/ffffff/new-post.png"
  //       alt="Email"
  //       style={{ width: '20px', height: '20px', marginRight: '8px' }}
  //     />
  //     dss283pro@gmail.com
  //   </a>
  // </div>
  

  );
}

export default Contact;