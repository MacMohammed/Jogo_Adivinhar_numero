import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //ENTRADA, RODANDO E FIM
  const [estado, setEstado] = useState("ENTRADA");

  //PALPITE DA MAQUINA
  const [palpite, setPalpite] = useState(150);

  //NÚMERO DE PALPITES
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começa a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Jogar novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={maior}>Maior!</button>
      <button onClick={acertou}>ACertou!</button>
    </div>
  );
}
