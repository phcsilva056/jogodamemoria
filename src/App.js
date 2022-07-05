import React, { Component } from "react";
import styled from "styled-components";
import TelaJogo from "./components/TelaJogo";

const ContainerMestre = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100vw;
  background-color: #73ba86;
  button {
    width: 40vw;
    height: 40px;
    margin: 0 auto;
    background-color: #146b2b;
  }
`;

export default class App extends Component {

  render() {
    return (
      <ContainerMestre>
        <TelaJogo numeroDeLinhas={8} numeroDeColunas={8} />
      </ContainerMestre>
    );
  }
}
