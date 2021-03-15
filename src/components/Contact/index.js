import React, {useState} from 'react';
import classNames from 'classnames';
import Map from './map'
import Send from '../../assets/img/send.svg';
import GithubLogo from '../../assets/img/github.png';
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
  let url ='https://github.com/romaindupont';
  return (
    <div id="liencontact" className="contact">
        <h2 className="contact-title">Contact</h2>
        <form className="form" method="post">
            <div className="form-email">
                <label className={classNames("form-email-label", {'form-email-label--blur':onFocusEmail})}></label>
                <input onClick={handleBlur} className="form-email-input" type="email" required></input>
            </div>
            <div className="form-name">
                <label className={classNames("form-name-label", {'form-name-label--blur':onFocusName})}></label>
                    <input onClick={handleClickName} className="form-name-input" type="text" required></input>
            </div>
            <div className="form-textarea">
                <label className="form-textarea-label"></label>
                    <textarea rows="5" cols="33" className="form-textarea-input" placeholder="Votre message ici..." required></textarea>
            </div>
            <div className="button">
                <button className="form-button" type="submit"><img className="form-button-img" src={Send} alt="Envoyer"/></button>
            </div>
        </form>
        <div className="contact-logo">
            <a className="contact-logo-link" href={url}><img className="contact-logo-link--image" src={GithubLogo} alt="Lien vers mon github"></img> romaindupont</a>
            <Map />
            <a className="contact-logo-link" href="tel:00433629913634">06 29 91 36 34</a>
            <a className="contact-logo-link" href="mailto:rdt.romaindupont@gmail.com"> rdt.romaindupont@gmail.com</a>
        </div>
        
    </div>
  );
}

export default Contact;