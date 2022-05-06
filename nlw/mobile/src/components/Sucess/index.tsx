import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import succsessImage from '../../assets/success.png';
import { Copyright } from '../Copyright';
import { styles } from './styles';

export function Sucess() {
  return (
    <View style={styles.container}>
      <Image
        source={succsessImage}
        style={styles.image}
      />
      <Text style={styles.title}>
        Agradecemos o Feedback
      </Text>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>
            Enviar outro
          </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}