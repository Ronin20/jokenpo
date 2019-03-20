import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class MeuComponente extends Component {
    render(){
      return(
        <View>
            <Text>{this.props.teste}</Text>
      	</View>
    )
  }
} 





export default class App extends Component {
	  
	constructor(props){
		super(props)

		this.state = {
			texto: 'Texto teste'
		}
		
	}
	
	alteratTexto = () => {
		this.setState( {texto: 'outra coisa'})
	}
	
	render() {
    	return (
      		<View style={styles.container}>
        		<MeuComponente teste={this.state.texto}></MeuComponente>
				<Button
					title='Botão'
					onPress={() => this.alteratTexto()}
				/>
			</View>
    	);
  	}
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
});
