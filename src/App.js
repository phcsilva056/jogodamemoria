import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TelaJogo from "./components/TelaJogo";
import Home from "./components/Home";
import GlobalStyle from "./components/GlobalStyle";

const ContainerMestre = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100vw;
  background-color: #73ba86;
`;

const App = () => {
  const [tela, setTela] = useState ('home')
  const [tamanho, setTamanho] = useState (0)

  const escolheTamanho = (tamanhoEscolhido) => {
    setTamanho(tamanhoEscolhido)
  }

  const escolheTela = () => {
    switch (tela) {
      case 'home':
        return <Home trocaTela={trocaTela} escolheTamanho={escolheTamanho} tamanhoEscolhido={tamanho}/>
      case 'telaJogo':
        return <TelaJogo trocaTela={trocaTela} tamanhoJogo={tamanho}/>
    }
  }

  const trocaTela = (telaEscolhida) => {
    setTela(telaEscolhida)
  }
    return (
      <>
      {console.log(tamanho)}
      <GlobalStyle/>
      <ContainerMestre>
        {escolheTela()}
      </ContainerMestre>
      </>
    );
}
export default App