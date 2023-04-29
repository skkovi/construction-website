import '../Css/Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='contact-flexbox-container'>
      <div className='contact-centered-flex'>
        <div className='contact-text'>
          <h1 className='contact-header-text'>Contact Us</h1>
          <span className='contactInfoGray'>Thank you for your interest in Jackson Design and Remodeling! The JDR team is available in person for a free design consultation. Call us at 858.348.5254 to schedule a private tour or free design consultation or fill out the form below.</span> <br/><br/>
          <span className='contactInfoGray'>Private tours of our 4,500 sq. ft. showroom are limited. We ask our guests to follow current health and safety protocols. We're looking forward to seeing you in person!</span>
        </div>
        <div className='bottomContainer'>
          <div className="input-wrapper">
            <input type="text" className='name-field' placeholder="Name" />
            <input type="text" className='email-field' placeholder="Email" />
            <input type="text" className='subject-field' placeholder="Subject" />
            <input type="text" className='message-field' placeholder="Message" />
            <button className='sendEmailButton'>Send Email</button>
          </div>
          <div className='contactInfo'>
            <h4 className='infoTextHeaders'>PHONE:<span className='contactInfoBlue'> 1 (914) 738-8722</span></h4>
            <h4 className='infoTextHeaders'>EMAIL:<span className='contactInfoBlue'> patmorettigc@gmail.com</span></h4>
            <h4 className='infoTextHeaders'>FAX:<span className='contactInfoBlue'> 1 (845) 878-3393</span></h4><br/>
            <h4 className='infoTextHeaders'>ADDRESS:</h4>
            <span className='contactInfoGray'>114 Buckingham Court</span><br/>
            <span className='contactInfoGray'>Pomona NY, 10970</span><br/><br/>
            <h4 className='infoTextHeaders'>HOURS:</h4>
            <span className='contactInfoGray'>Mon - Fri: 8:00am - 4:30pm</span> <br/>
            <span className='contactInfoGray'>Saturday: Closed - Appointments Only</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;