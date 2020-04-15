import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NavigationContext from './NavigationContext';
import { useNavigation } from '@react-navigation/native';

export default function Resume() {

  const recipe = useContext(NavigationContext);

  return (
    <View style={styles.area}>
      <Text style={[styles.title, styles.font]}>{recipe.title}</Text>
      <Text style={[styles.author, styles.font]}>{recipe.author}</Text>
      <Text style={[styles.description, styles.font]}>{recipe.description}</Text>
      <View style={styles.areaYield}>
        <Text>Rendimento: </Text>
        <Text>{recipe.yield}</Text>
      </View>
      <View>
        <Text>Tempo de Preparo: </Text>
        <Text>{recipe.prep}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15
  },
  font: {
    fontFamily: 'Lato',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    color: '#AAA',
    marginTop: 2,
    marginBottom: 8,
    fontSize: 18,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  areaYield: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  areaPrep: {
    flex: 1,
    flexDirection: 'row',
  },
})