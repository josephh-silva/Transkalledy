import { useState } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';
import Logo from "../../assets/logo-nav.jpg"



function Formm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  function sendEmail(e) {
    e.preventDefault(); // Evita o recarregamento da página

    // Criação do template para enviar ao emailjs
    const templateP = {
      from_name: name,
      message: textarea,
      email: email
    };

    // Enviar o email usando emailjs
    emailjs.send("service_g1dl7po", "template_t60v0ne", templateP, "dljq1wY_2LYRt9GM6")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);

        // Limpar os campos após o envio bem-sucedido
        setEmail("");
        setName("");
        setTextarea("");
      }, (err) => {
        console.log("Erro: ", err);
      });
  }

  return (
    <div className=" form-c" id='Form-contact'>
      <div className='container-gf'>
        <div className="logo-k">
          <img src={Logo} alt="" />
        </div>
        <form className="form-contact" onSubmit={sendEmail}>
          <h1>Informações de contato</h1>
          <input
            type="text"
            className="form-contact-input"
            name="nome"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="form-contact-input"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="form-contact-textarea"
            name="conteudo"
            placeholder="Deixe uma mensagem"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            required
          />
          <button type="submit" className="form-contact-button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Formm;
