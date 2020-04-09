import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Feather name="arrow-right" size={16} color='#E02041'/>
    </View>
  );
}