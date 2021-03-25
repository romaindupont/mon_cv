import React, {useState} from 'react';
import classNames from 'classnames';
import Map from './map'
import Send from '../../assets/img/send.svg';
import GithubLogo from '../../assets/img/github.png';
import LinkedinLogo from '../../assets/img/linkedin.png';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const Contact = () => {
  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusName, setOnFocusName] = useState(false);
  const handleBlur = () => {
    setOnFocusEmail(true)
  }
  const handleClickName = () => {
      setOnFocusName(true)
  }
  function sendEmail(e) {
    e.preventDefault();
    toast.configure();
    const notify = (message) => toast(message);
    emailjs.sendForm('service_xmyyawq', 'template_edmng8l', e.target, 'user_SU3RGivdjUjiriB3cf1OE')
      .then((result) => {
          notify('message envoyé, Merci')
          console.log(result.text);
      }, (error) => {
        notify(error.text)
          console.log(error.text);
      });
  }

  let url ='https://github.com/romaindupont';
  return (
    <div id="liencontact" className="contact">
        <h2 className="contact-title">Contact</h2>
        <form className="form" method="post" onSubmit={sendEmail}>
            <div className="form-email">
                <label className={classNames("form-email-label", {'form-email-label--blur':onFocusEmail})}></label>
                <input onClick={handleBlur} className="form-email-input" type="email" name="your_email" required></input>
            </div>
            <div className="form-name">
                <label className={classNames("form-name-label", {'form-name-label--blur':onFocusName})}></label>
                    <input onClick={handleClickName} className="form-name-input" type="text" name="name" required></input>
            </div>
            <div className="form-textarea">
                <label className="form-textarea-label"></label>
                    <textarea rows="5" cols="33" className="form-textarea-input" placeholder="Votre message ici..." name="message" required></textarea>
            </div>
            <div className="button">
                <button className="form-button" type="submit"><img className="form-button-img" src={Send} alt="Envoyer"/></button>
            </div>
        </form>
        <div className="contact-logo">
            <a className="contact-logo-link" href={url}><img className="contact-logo-link--image" src={GithubLogo} alt="Lien vers mon github"></img> romaindupont</a>
            <a className="contact-logo-link" href="https://www.linkedin.com/in/romain-dupont-488a81a7/"><img className="contact-logo-link--image" src={LinkedinLogo} alt="Lien vers mon Linkedin"></img> romain-dupont</a>
            <Map />
            <a className="contact-logo-link" href="tel:00433629913634">06 29 91 36 34</a>
            <a className="contact-logo-link" href="mailto:rdt.romaindupont@gmail.com"> rdt.romaindupont@gmail.com</a>
        </div>
        
    </div>
  );
}

export default Contact;