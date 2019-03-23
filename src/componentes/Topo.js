import React from 'react';
import { View, Image } from 'react-native';

const imagem = require('../../images/jokenpo.png')

export default Topo = () => {
    return(
        <View>
            <Image
				source={imagem}
                style={{width: '100%'}}
            />
        </View>
    )
}