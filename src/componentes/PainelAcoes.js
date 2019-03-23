import React from 'react'
import { View, Button } from 'react-native';
import { Estilo } from '../estilos/Estilos'

export default PainelAcoes = () => {
    const { painelAcoes, botao } = Estilo
    
    
    
    return (
        <View style={painelAcoes}>
            <View style={botao}>
                <Button title='Pedra' onPress={() => { this.jokenpo('Pedra') }} />
            </View>
            <View style={botao}>
                <Button title='Papel' onPress={() => { this.jokenpo('Papel') }} />
            </View>
            <View style={botao}>
                <Button title='Tesoura' onPress={() => { this.jokenpo('Tesoura') }} />
            </View>
        </View>
    )
}

