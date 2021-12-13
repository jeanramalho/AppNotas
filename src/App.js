import React, { Component } from "react";
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FomularioCadastro';
import "./assets/App.css";
import './assets/index.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      notas: []
    }
  }

  criaNota(titulo, texto) {
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criaNota={this.criaNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    )
  }
}

export default App;
