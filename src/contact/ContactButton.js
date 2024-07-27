import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


function ContactButton () {

    const { t } = useTranslation();
    
    return(
        <div className='contactButtons'>
             <Button href='/staff' variant="outline-dark" className='contactbtn'>{t ('Contact Church Staff')}</Button>{' '}
             <Button href='/membersinfoupdate' variant="outline-dark" className='contactbtn'>{t ('Members Information Update')}</Button>{' '}
        </div>
    )  
}

export default ContactButton;