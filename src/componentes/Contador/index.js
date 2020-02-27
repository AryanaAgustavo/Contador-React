import React, { Component } from 'react';

import { Button } from 'reactstrap';

import './contador.css';

class Contador extends Component {
    state = {
        numero: 0
      }
    
      aumentar = () =>{
        this.setState({numero: this.state.numero +1}) //ou cria uma variavel para guardar o valor 0, incrementa 1 e no setState chama numero: novoNumero
        console.log(this.state.numero)
      }
      
      diminuir = () => { 
        if(this.state.numero === 0) {
          return alert('Hoje não Faro')
        }
        this.setState({numero: this.state.numero -1}) 
        console.log(this.state.numero)
      }
    
      //Função que renderiza na tela:
      render(){
        return (
          <div > 
            <h1 className="contador-titulo">
              { this.state.numero }
            </h1>
            
          
          <Button className="mr-2" color="success" outline onClick={this.aumentar}>Aumentar</Button>
          <Button color="danger" outline onClick={this.diminuir}> Diminuir</Button>
          </div>
        )
      }
}

export default Contador;