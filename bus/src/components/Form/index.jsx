import { useState } from 'react';
import './index.css';
import emailjs from '@emailjs/browser';
import Logo from "../../assets/logo-nav.jpg";

function Formm() {
  // 🔹 Estados para os campos do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Função para enviar email
  const sendEmail = (e) => {
    e.preventDefault(); // evita recarregar a página

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    };

    emailjs.send(
      'service_g1dl7po',       // substitua pelo seu Service ID
      'template_t60v0ne',      // substitua pelo seu Template ID
      templateParams,
      'dljq1wY_2LYRt9GM6'      // substitua pelo seu Public Key
    )
    .then((response) => {
      console.log("Email enviado!", response.status, response.text);
      alert("Mensagem enviada com sucesso!");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((err) => {
      console.error("Erro ao enviar email:", err);
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    });
  };

  return (
    <div className="form-c" id="Form-contact">
      <div className="container-gf">
        {/* Logo */}
        <div className="logo-k">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Formulário */}
        <form className="form-contact" onSubmit={sendEmail}>
          <h1>Informações de contato</h1>

          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-contact-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-contact-input"
            required
          />

          <textarea
            name="conteudo"
            placeholder="Deixe uma mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-contact-textarea"
            required
          />

          <button type="submit" className="form-contact-button">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Formm;




/*
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

  senha: 
 */