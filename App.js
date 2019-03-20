import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Estilo } from './src/estilos/Estilos'

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
				resultado = 'Usuario ganhou'
			else if(escolhaComputador == 'Papel')
				resultado = 'Empate'
			else
				resultado = 'Computador ganhou'
		}else if(escolhaUsuario == 'Pedra'){
			if(escolhaComputador == 'Pedra')
				resultado = 'Empate'
			else if(escolhaComputador == 'Papel')
				resultado = 'Computador ganhou'
			else
				resultado = 'Usuario ganhou'
		}else{
			if(escolhaComputador == 'Pedra')
				resultado = 'Computador ganhou'
			else if(escolhaComputador == 'Papel')
				resultado = 'Usuario ganhou'
			else
				resultado = 'Empate'
		}
		this.setState({escolhaUsuario, escolhaComputador, resultado}) //Só posso deixar apenas o nome da variavel pq o par chave valor tem o mesmo nome
	}


	render() {
		const { container, botao } = Estilo
    	return (
      		<View style={container}>
        		<Text>Escolha do computador: {this.state.escolhaComputador}</Text>
				<Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
				<Text>Resultado: {this.state.resultado}</Text>
				<Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}}/>
				<Button title='Papel' onPress={() => {this.jokenpo('Papel')}}/>
				<Button  title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}}/>
			</View>
    	);
  	}
}