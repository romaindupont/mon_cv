import React, {useState} from 'react';
import classNames from 'classnames';
import './style.scss';

const Contact = () => {
  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusName, setOnFocusName] = useState(false);
  const handleBlur = () => {
    setOnFocusEmail(true)
   //console.log(onFocus)
  }
  const handleClickName = () => {
      setOnFocusName(true)
  }
  let url ='';
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
                    <input onClick={handleClickName} className="form-name-input" type="text"></input>
            </div>
            <div className="form-textarea">
                <label className="form-textarea-label"></label>
                    <textarea rows="5" cols="33" className="form-textarea-input">Votre message ici...</textarea>
            </div>
            
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