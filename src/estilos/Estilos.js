import { StyleSheet } from 'react-native'

export const Estilo = StyleSheet.create({
    container: {
		marginTop: 20 
		/*flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',*/
	},
    botao: {
        width: 90
	},
	painelAcoes: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	palco: {
		alignItems: 'center',
		marginTop: 10
	},
	txtResultado: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red',
		height: 60
	},
	icone: {
		alignItems: 'center',
		marginBottom: 10
	},
	txtJogador: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'green'
	}

})