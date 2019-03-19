import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MeuComponente extends Component {
    render(){
      return(
        <View>
            <Text>{this.props.props}</Text>
      	</View>
    )
  }
} 


export default class App extends Component {
  	render() {
    	return (
      	<View style={styles.container}>
        	<MeuComponente props='banana'></MeuComponente>
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
