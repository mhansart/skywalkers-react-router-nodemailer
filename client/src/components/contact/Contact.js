import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import scrollTop from '../../function';

function Contact({ handler, setMenuVisibility }) {
  const loading = useRef();
  useEffect(() => {
    scrollTop();
    handler('contact');
    setMenuVisibility(false);
  }, []);
  const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    firstname: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setText('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // destructure from inputs
    const {
      email, name, firstname, message,
    } = inputs;
    if (email !== '' && name !== '' && firstname !== '' && message !== '') {
      loading.current.style.display = 'block';
      axios
        .post('/sendtome', {
          email,
          name,
          firstname,
          text: message,
        })
        .then((response) => {
          if (response.data.status === 'success') {
            setText('Votre message a bien été envoyé. Merci !');
            // this.resetForm()
          } else if (response.data.status === 'fail') {
            setText('Erreur, veuillez réessayer.');
          }
          loading.current.style.display = 'none';
          setInputs({
            email: '',
            name: '',
            firstname: '',
            message: '',
          });
        });
    } else {
      setText('Merci de remplir tous les champs.');
    }
  };
  return (
    <div className="container-content">
      <div className="container-width">
        <div className="p-i-flex flex-contact">
          <div className="img-contact"><img src="img/contact.jpg" alt="contact" /></div>
          <form method="post" onSubmit={handleSubmit}>
            <h2 className="title-content">Contact</h2>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="firstname">Prénom:</label>
            <input
              type="text"
              name="firstname"
              value={inputs.firstname}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              rows="7"
              name="message"
              value={inputs.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Envoyer</button><span style={{ display: 'none' }} ref={loading}>Envoi...</span>
            <p>{text}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
