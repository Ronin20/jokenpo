import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Estilo } from './src/estilos/Estilos'
import Topo from './src/componentes/Topo'
import Icone from './src/componentes/Icone';

export default class App extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			escolhaUsuario: '',
			escolhaComputador: '',
			resultado: ''
		}
	}

	opcoesComputador = ['Pedra', 'Papel', 'Tesoura']

	jokenpo = (escolhaUsuario) => {
		let choice = Math.floor(Math.random() * 3)
		let escolhaComputador = this.opcoesComputador[choice]
		
		let resultado = ''

		if(escolhaUsuario == 'Papel'){
			if(escolhaComputador == 'Pedra')
				resultado = 'Você ganhou'
			else if(escolhaComputador == 'Papel')
				resultado = 'Empate'
			else
				resultado = 'Você perdeu'
		}else if(escolhaUsuario == 'Pedra'){
			if(escolhaComputador == 'Pedra')
				resultado = 'Empate'
			else if(escolhaComputador == 'Papel')
				resultado = 'Você perdeu'
			else
				resultado = 'Você ganhou'
		}else{
			if(escolhaComputador == 'Pedra')
				resultado = 'Você perdeu'
			else if(escolhaComputador == 'Papel')
				resultado = 'Você ganhou'
			else
				resultado = 'Empate'
		}
		this.setState({escolhaUsuario, escolhaComputador, resultado}) //Só posso deixar apenas o nome da variavel pq o par chave valor tem o mesmo nome
	}


	render() {
		const { container, botao, painelAcoes, palco, txtResultado } = Estilo
    	return (
			<View style={container}>
				<Topo/>
				
				<View style={painelAcoes}>
					<View style={botao}>
						<Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}}/>
					</View>
					<View style={botao}>
						<Button title='Papel' onPress={() => {this.jokenpo('Papel')}}/>
					</View>
					<View style={botao}>
						<Button  title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}}/>
					</View>
				</View>
				
				<View style={palco}>
					<Text style={txtResultado}>{this.state.resultado}</Text>
					<Icone escolha={this.state.escolhaUsuario} jogador='Usuario'/>
					<Icone escolha={this.state.escolhaComputador} jogador='Computador'/>
				</View>
			</View>
    	);
  	}
}

