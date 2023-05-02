import '../Css/Contact.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import checkmark from '../Images/checkmark.png'
import { motion } from 'framer-motion'

function Contact() {
  const [emailSent, setEmailSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    sentEmail: false
  });

  const handleOpenModal = () => {
    setShowPopup(true);
    setEmailSent(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  useEffect(() => {
    if (formData.name !== '' && formData.email !== '' && formData.message !== '' && emailSent === false) {
      send(
        'service_jxo8fhd',
        'template_vxfclr3',
        formData,
        'J8hf-A9o0J11Pul1G'
      )
        .then((response) => {
          handleOpenModal(true);
          console.log('SUCCESS!', response.status, response.text);
          setEmailSent(true);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    }
  }, [formData, emailSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    });
    if (emailSent === true) {
      return;
    }
    if (!e.target.elements.name.value || !e.target.elements.email.value || !e.target.elements.message.value) {
      alert('Please fill out all fields');
      return;
    }
  };

  return (
    <motion.div className='contact-flexbox-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {showPopup &&
        <div className='modalbackdrop'>
          <div className='success-popUp'>
            <img className='checkmark' src={checkmark} />
            <h2>
              Email Sent!
            </h2>
          </div>
        </div>}
      <div className='contact-centered-flex'>
        <div className='contact-text'>
          <h1 className='contact-header-text'>Contact Us</h1>
          <p className='contactInfoGrayMain'>Thank you for your interest in Jackson Design and Remodeling! The JDR team is available in person for a free design consultation. Call us at 858.348.5254 to schedule a private tour or free design consultation or fill out the form below.</p> <br />
          <p className='contactInfoGrayMain'>Private tours of our 4,500 sq. ft. showroom are limited. We ask our guests to follow current health and safety protocols. We're looking forward to seeing you in person!</p>
        </div>
        <div className='bottomContainer'>
          <form onSubmit={handleSubmit} className="input-wrapper">
            <input type="text" name='name' className='name-field' placeholder="Name" />
            <input type="text" name='email' pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' className='email-field' placeholder="Email" />
            <input type="text" name='message' className='message-field' placeholder="Message" />
            <button type='submit' className='sendEmailButton'>Send Email</button>
          </form>
          <div className='contactInfo'>
            <h4 className='infoTextHeaders'>PHONE:<span className='contactInfoGrayLarge'> 1 (914) 738-8722</span></h4>
            <h4 className='infoTextHeaders'>EMAIL:<span className='contactInfoGrayLarge'> patmorettigc@gmail.com</span></h4>
            <h4 className='infoTextHeaders'>FAX:<span className='contactInfoGrayLarge'> 1 (845) 878-3393</span></h4><br />
            <h4 className='infoTextHeaders'>ADDRESS:</h4>
            <span className='contactInfoGray'>114 Buckingham Court</span><br />
            <span className='contactInfoGray'>Pomona NY, 10970</span><br /><br />
            <h4 className='infoTextHeaders'>HOURS:</h4>
            <span className='contactInfoGray'>Mon - Fri: 8:00am - 4:30pm</span> <br />
            <span className='contactInfoGray'>Saturday: Closed - Appointments Only</span>
          </div>
        </div>
      </div>
    </motion.div >
  );
}

export default Contact;