import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import emailjs from '@emailjs/browser' ;


const StyledWrapper = styled.div`
    
     .form-container {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     height: '100vh',
  width: 400px;
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 150px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: center;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 45%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}

.form-container .form-submit-btn:hover {
  background-color: #3D2947;
  border-color: #fff;
}


    `;



const YOUR_SERVICE_ID = "service_cyywmub";
const YOUR_TEMPLATE_ID = "template_tyvojph";
const YOUR_PUBLIC_KEY = "oj_Pn3CsY6qvsnv6Q";



function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
          .then((result) => {
            alert('Message Sent Successfully')
            setEmail("");
            setMessage("");
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset();
        e.Contact.reset();

    };

  


  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Contact me via <strong className="purple">Email </strong>
        </h1>
        <p style={{ color: "white" }}>
          Please contact me to discuss future potential.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <StyledWrapper>
            <div className="form-container">
              <form  id="myform" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" style={{ color: "white" }}>
                    Your Email
                  </label>
                  <input
                    required
                    value={email}
                    id="email"
                    name="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="textarea" style={{ color: "white" }}>
                    How Can I Help You?
                  </label>
                  <textarea
                    required
                    cols={50}
                    rows={10}
                    id="textarea"
                    name="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  >
                    {" "}
                  </textarea>
                </div>
                <button
                  onSubmit={()=> setEmail("")}
                  
                  type="submit"
                  className="form-submit-btn"
                  style={{ color: "white", align: "center" 
                  }}
                >
                  Submit
                </button>
                
              </form>
            </div>
          </StyledWrapper>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
