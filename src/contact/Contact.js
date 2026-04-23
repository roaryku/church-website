import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import image from '../photos/call-now.png';
import email from '../photos/email.png';
import { useTranslation } from 'react-i18next';
import { addStaffForm } from './FetchStaffForm';

function Contact () {
    const { t } = useTranslation();
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);
        setIsSubmitting(true);
        setShowSuccessPopup(false);

        try {
            await addStaffForm(firstName, lastName, emailAddress, message);
            setFirstName('');
            setLastName('');
            setEmailAddress('');
            setMessage('');
            setValidated(false);
            setShowSuccessPopup(true);
            form.reset();
        }
         finally {
            setIsSubmitting(false);
        }
    };

    return (
        <React.Fragment>
        <div className="contactBody">
            <div className="contactHeader">
               <h2 className='contactAbout'>{t ('ContactUs')}</h2>

              <div className='contactContent'>
               <div className='InfoUpdateContainer contactFormSection'>
                <h4 className='contactSectionTitle'>{t ('ContactForm')}</h4>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                 <Row>
                  <Col>
                   <Form.Label className="mb-3" htmlFor="contactFormFirstName">{t ('FirstName')}</Form.Label>
                   <Form.Control
                      id="contactFormFirstName"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder={t ('FirstName')}
                      required
                      type='text'
                   />
                   <Form.Control.Feedback type="invalid">
                    Information required.
                   </Form.Control.Feedback>
                  </Col>

                  <Col>
                   <Form.Label className="mb-3" htmlFor="contactFormLastName">{t ('LastName')}</Form.Label>
                   <Form.Control
                      id="contactFormLastName"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder={t ('LastName')}
                      required
                      type='text'
                   />
                   <Form.Control.Feedback type="invalid">
                    Information required.
                   </Form.Control.Feedback>
                  </Col>
                 </Row>
                 <br></br>

                 <Form.Group className="mb-4" controlId="contactFormEmail">
                     <Form.Label>{t ('EmailAddress')}</Form.Label>
                     <Form.Control
                     value={emailAddress}
                     onChange={(event) => setEmailAddress(event.target.value)}
                     type="email"
                     placeholder={t ('EmailAddress')}
                     required
                     />
                     <Form.Control.Feedback type="invalid">
                      Information required.
                     </Form.Control.Feedback>
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="contactFormMessage">
                     <Form.Label>{t ('TypeYourMessage')}</Form.Label>
                     <Form.Control
                     as="textarea"
                     rows={3}
                     placeholder={t ('TypeYourMessage')}
                     required
                     value={message}
                     onChange={(event) => setMessage(event.target.value)}
                     />
                     <Form.Control.Feedback type="invalid">
                      Information required.
                     </Form.Control.Feedback>
                 </Form.Group>

                 <div className='contactSubmitButton'>
                  <Button type="submit" disabled={isSubmitting}>
                      {t ('SubmitForm')}
                  </Button>
                 </div>
                </Form>
               </div>

               <div className='contactDetailsSection'>
                <div className='addressInfo'>
                 <h4 className='contactSectionTitle'>{t ('ContactEnjoyInvitation')}</h4>
                 <p className="contactLocation STime">{t ('EnjoyTimeHome')}</p>
                 <p className="contactLocation STime">{t ('SaturdayWorkTime')}</p>
                 <p className="contactLocation STime">{t ('SundayClosed')}</p>
                 <p className="contactLocation">{t ('LocationHome')}</p>
                 <p className="contactLocation">{t ('GetDirectionOnContact')}</p>
                 <iframe
                  className='iFrameMap'
                  title='google map'
                  src="https://www.google.com/maps?q=125+Main+Street,+Atlanta,+GA+30305&output=embed"> 
                  {t ('GetDirectionOnContact')}
                 </iframe>
                </div>
               </div>
              </div>

              <h4 className='contactSectionTitle contactHomeInfoTitle'>{t ('ContactHomeInfo')}</h4>
              <div className="churchPersonalInfo">
               <div className="phoneContact">
               <a href="tel: +4045550172" className="phoneNumber">
                   <p className='contactInformation'>{t ('CallUs')}</p>
                   <img src={image} width="25" alt="icon"/> 
                  +1.404.555.0172</a>
               </div>

               <div className="phoneContact">
               <a href="mailto:goldencrust.bakery@yahoo.com" rel="_blank" className="phoneNumber">
               <p className='contactInformation'>{t ('SendUsAnEmail')}</p>
                   <img src={email} width="25" alt="icon"/>  
                   goldencrust.bakery@yahoo.com</a>
               </div>
              </div>
            </div>
        </div>
        {showSuccessPopup && (
            <div className="contactSuccessPopupOverlay" role="dialog" aria-modal="true">
                <div className="contactSuccessPopup">
                    <div className="contactSuccessIcon" aria-hidden="true">v</div>
                    <p className="contactSuccessText">Form submitted.</p>
                    <Button variant="success" onClick={() => setShowSuccessPopup(false)}>
                        OK
                    </Button>
                </div>
            </div>
        )}
        </React.Fragment>
    )
}

export default Contact;