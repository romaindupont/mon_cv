import React from 'react';
import './style.scss';

const Contact = () => {
  let url ='';
  return (
    <div className="contact">
        <h2 className="contact-title">Contact</h2>
        <form method="post">
            <label>Votre adresse email
                <input type="email" placeholder="Votre adresse mail" required></input>
            </label>
            <label>Votre nom
                <input type="text" placeholder="Votre nom"></input>
            </label>
            <label>Votre message
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