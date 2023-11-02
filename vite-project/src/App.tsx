import "./App.css";
import PrimaryInput from "./components/PrimaryInput/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <div className="container">
      <form>
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            name="firstName"
            label="Digite Seu nome...."
            placeholder="Nome usuário"
          />
          <PrimaryInput
            value={secondName}
            onChange={(event) => setSecondName(event.target.value)}
            name="secondName"
            label="Sobrenome"
            placeholder="Sobrenome do usuário"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          label="Digite Seu E-mail..."
          placeholder="User@email.com"
        />
        <Spacer height="4" />
        <Button colorScheme="green" width="100%">
          Enviar
        </Button>
      </form>
      <Spacer width="4" maxWidth="4" />
      <div className="product-details">
        <h3>Assinatura Mensal</h3>
        <Spacer width="4" maxWidth="4" />
        <p>Você irá Pagar</p>
        <span>R$:190,00</span>
        <Spacer width="4" maxWidth="4" />
        <p>
          Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus doloremque dicta quos, impedit architecto eius recusandae
          saepe fugiat praesentium! Veritatis tempora !
        </p>
      </div>
    </div>
  );
}

export default App;
