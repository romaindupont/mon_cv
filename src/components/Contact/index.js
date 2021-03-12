import React, {useState} from 'react';
import classNames from 'classnames';
import './style.scss';

const Contact = () => {
  const [onFocus, setOnFocus] = useState(false);
  const handleBlur = () => {
    setOnFocus(!onFocus)
    //console.log(onFocus)
  }
  let url ='';
  return (
    <div id="liencontact" className="contact">
        <h2 className="contact-title">Contact</h2>
        <form className="form" method="post">
            <div className="form-email">
                <label className={classNames("form-email-label", {'form-email-label--blur':onFocus})}></label>
                <input onFocus={handleBlur} onBlur={handleBlur} className="form-email-input" type="email" required></input>
            </div>
            <label  className="form-label">Votre nom
                <input className="form-input" type="text"></input>
            </label>
            <label className="form-label">Votre message
                <textarea rows="5" cols="33">Votre message ici...</textarea>
            </label>
            <button type="submit">Send It</button>
        </form>
        <div className="contact-logo">
            <a href={url}>image github</a>
            <p>Caen</p>
            <a href="tel:00433629913634">phone 06 29 91 36 34</a>
            <a href="mailto:rdt.romaindupont@gmail.com">mail : rdt.romaindupont@gmail.com</a>
        </div>
        
    </div>
  );
}

export default Contact;