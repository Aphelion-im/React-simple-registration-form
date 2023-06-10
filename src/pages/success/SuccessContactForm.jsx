import { Link } from 'react-router-dom';
import './SuccessRegistrationForm.css';

export default function SuccessContactForm () {
  return(
    <>
    <h1>Success! Het contactformulier werd succesvol verzonden.</h1>
    <p>We nemen zo spoedig mogelijk contact met u op.</p>
    Neem me terug naar de <Link to="/">Homepage</Link>
    </>
  );
}