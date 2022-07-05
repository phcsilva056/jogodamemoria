import React, { Component } from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 92vh;
  max-width: 100vw;
  grid-template-columns: repeat(${(props) => props.coluna}, 1fr);
  grid-template-rows: repeat(${(props) => props.linha}, 1fr);
  padding: 20px;
`;

const Errou = styled.div`
  position: fixed;
  display:flex;
  justify-content: center;
  align-items: center;
  top: 30vh;
  left: 40vw;
  right: 40vw;
  margin: 0 auto;
  background-color: aqua;
  width: 200px;
  height: 120px;
  font-size: 30px;
`;

const Box = styled.div`
  min-width: 10px;
  min-height: 100%;
  background-image: url(${(props) => props.clicou ? props.image : "https://embrapii.org.br/wp-content/images/2018/09/fundo-carta-azul-marinho-1920x1200.gif"});
  background-size: cover;
  box-shadow: 0 0 4px black;
  background-color: orange;
`;

const linha = 8;
const coluna = 8;

export default class TelaJogo extends Component {
    state = {
        arrayBox: [],
        contador: 0,
        itemClicado: [],
        errou: "",
    }

    componentDidMount() {
        this.start();
      }

      start = () => {
        let array = [];
        array.length = linha * coluna;
        for (let i = 0; i < array.length; i++) {
          if (i % 2 === 0) {
            array[i] = {
              id: i + 1,
              url: `https://picsum.photos/id/${i * 2 + 3}/200/200`,
              clicou: true,
            };
          } else {
            array[i] = {
              id: i + 1,
              url: `https://picsum.photos/id/${(i - 1) * 2 + 3}/200/200`,
              clicou: true,
            };
          }
        }
    
        // https://www.horadecodar.com.br/2021/05/10/como-embaralhar-um-array-em-javascript-shuffle/
        for (let i = array.length - 1; i > 0; i--) {
          // Escolhendo elemento aleatório
          const j = Math.floor(Math.random() * (i + 1));
          // Reposicionando elemento
          [array[i], array[j]] = [array[j], array[i]];
        }
        /////
    
        this.setState({
          arrayBox: array,
        });
      };

    escolher = (clicado) => {
        if (this.state.contador < 2) {
          this.setState({
            arrayBox: this.state.arrayBox.map((item) => {
              if (item.id === clicado.id) {
                this.setState({
                  contador: this.state.contador + 1,
                  itemClicado: [...this.state.itemClicado, item],
                });
                return { id: item.id, url: item.url, clicou: true };
              } else {
                return item;
              }
            }),
          });
        }
        this.comparar(clicado);
      };
    
    

      
  comparar = (clicado) => {
    if (this.state.contador === 1) {
      if (this.state.itemClicado[0].url === clicado.url) {
        console.log("acertou");
        this.setState({
          contador: 0,
          itemClicado: [],
        });
      } else {
        console.log("errrouuu");
        this.setState({
          errou: <Errou>Errou</Errou>,
        });
        setTimeout(() => {
          this.setState({
            errou: "",
            contador: 0,
            itemClicado: [],
            arrayBox: this.state.arrayBox.map((item) => {
              if (this.state.itemClicado[0].id === item.id) {
                return { id: item.id, url: item.url, clicou: false };
              } else if (clicado.id === item.id) {
                return { id: item.id, url: item.url, clicou: false };
              } else {
                return item;
              }
            }),
          });
        }, 2000);
      }
    }
  };

  comeca = () => {
    this.setState({
      arrayBox: this.state.arrayBox.map((item) => {
        return { id: item.id, url: item.url, clicou: false };
      }),
    });
  };

  render() {
    return (
        <>
        <h1>Jorginho da memória</h1>
    <button onClick={this.comeca}>Começar</button>
        <Container linha={this.props.numeroDeLinhas} coluna={this.props.numeroDeColunas}>
        {this.state.arrayBox.map((item) => {
          if (item.clicou === true) {
            return (
              <Box key={item.id} image={item.url} clicou={item.clicou} />
            );
          } else {
            return (
              <Box
                key={item.id}
                image={item.url}
                clicou={item.clicou}
                onClick={() => this.escolher(item)}
              />
            );
          }
        })}
      </Container>
      </>
    )
  }
}
