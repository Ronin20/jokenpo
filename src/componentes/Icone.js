import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Estilo } from '../estilos/Estilos';

const pedra = require('../../images/pedra.png')
const papel = require('../../images/papel.png')
const tesoura = require('../../images/tesoura.png')

export default class Icone extends Component {
	render(){
		const { icone, txtJogador } = Estilo
		if(this.props.escolha == 'Pedra'){
			return(
				<View style={icone}>
					<Text style={txtJogador}>{this.props.jogador}</Text>
					<Image source={pedra}/>
				</View>
			)	
		}else if(this.props.escolha == 'Papel'){
			return(
				<View style={icone}>
					<Text style={txtJogador}>{this.props.jogador}</Text>
					<Image source={papel}/>
				</View>
			)	
		}else if(this.props.escolha){
			return(
				<View style={icone}>
					<Text style={txtJogador}>{this.props.jogador}</Text>
					<Image source={tesoura}/>
				</View>
			)
		}else{
			return false
		}
	}
}