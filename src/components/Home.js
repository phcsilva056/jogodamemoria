import React, {useState, useEffect} from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #141414;
  color: #bbb;
  padding: 32px;
`;
const SelectDiv = styled.div`
  display: flex;
`;

const Home = (props) => {
  const onChangeSelect = (event) => {
    props.escolheTamanho(event.target.value);
  };

  return (
    <Container>
      <h1>Bem vindo ao jogo da memória</h1>
      <SelectDiv>
        <p>Numero de linhas e colunas: </p>
        <select onChange={onChangeSelect}>
          <option value={0}>Escolha o tamanho</option>
          <option value={2}>2</option>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
      </SelectDiv>
      {console.log(props.tamanhoEscolhido)}
      {props.tamanhoEscolhido!=0 ? <button onClick={() => props.trocaTela("telaJogo")}>Começar jogo</button> : <p>Selecione o tamanho</p>}      
    </Container>
  );
};

export default Home;
