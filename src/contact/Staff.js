import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Staff () {

    const [validated, setValidated] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
    }

    return(
        <div className='contactBody'>
          <div className='StaffHeaderContact'>      
            <div className='InfoUpdateContainer'>
            <h2 className='headerAbout'>{t ('Contact Staff Members')}</h2>
       
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <Row>
        <Col>
      
        <Form.Label className="mb-3" controlId="exampleForm.ControlFirstName">{t ('First name')}</Form.Label>
          <Form.Control
           placeholder={t ('First name')} 
           required
           type='text'
           
           />
       
        </Col>

        <Col>
       
        <Form.Label className="mb-3" controlId="exampleForm.ControlLastName">{t ('Last name')}</Form.Label>
          <Form.Control 
          placeholder={t ('Last name')}
          required
          type='text'

          />
      
        </Col>
      </Row>
         <br></br>

            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Label>{t ('Email address')}</Form.Label>
            <Form.Control 
            type="email" 
            placeholder={t ('Email address')} 
            required

            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t ('Type your message')}</Form.Label>
            <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder={t ('Type your message')}
            required

            />
      </Form.Group>
      <Button type="submit">{t ('Submit form')}</Button>
    </Form>
   
    <div className='InfoUpdateContainer'>
       <Button href='/contact' variant="outline-success" className='contactBackBtn'>{t ('Back to Contact')}</Button>{' '}   
    </div>   
    </div>
    </div> 
    </div>
    
    )
}
export default Staff