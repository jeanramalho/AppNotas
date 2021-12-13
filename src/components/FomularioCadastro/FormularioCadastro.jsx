import React, { Component } from 'react'
import "./FormularioCadastro.css"


class FormularioCadastro extends Component {
    constructor(props) {
        super(props)
        this.titulo = ""
        this.texto = ""
    }

    _mudaTitulo (evento) {
        evento.stopPropagation()
        this.titulo = evento.target.value
    }

    _criaTexto (evento) {
        evento.stopPropagation()
        this.texto =  evento.target.value
    }

    _criaNota (evento) {
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criaNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form className='form-cadastro' onSubmit={this._criaNota.bind(this)}>
                <input type="text" placeholder="Título" className='form-cadastro_input' onChange= {this._mudaTitulo.bind(this)}/>
                <textarea rows={15} placeholder="Escreva sua nota..." className='form-cadastro_input' onChange={this._criaTexto.bind(this)}></textarea>
                <button className='form-cadastro_input form-cadastro_submit'>Criar Nota</button>
            </form>
        )
    }
}


export default FormularioCadastro