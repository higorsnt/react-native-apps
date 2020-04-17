import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NavigationContext from './NavigationContext';
import { ScrollView } from 'react-native-gesture-handler';

export default function Resume() {

  const recipe = useContext(NavigationContext);

  return (
    <View style={styles.area}>
      <ScrollView>
        <Text style={[styles.title, styles.font]}>{recipe.title}</Text>
        <Text style={[styles.author, styles.font]}>{recipe.author}</Text>
        <Text style={[styles.description, styles.font]}>{recipe.description}</Text>
        <View style={styles.rowArea}>
          <Text style={[styles.fontInfo, styles.font]}>Rendimento: </Text>
          <Text style={[styles.fontInfo, styles.font]}>{recipe.yield}</Text>
        </View>
        <View style={styles.rowArea}>
          <Text style={[styles.fontInfo, styles.font]}>Tempo de Preparo: </Text>
          <Text style={[styles.fontInfo, styles.font]}>{recipe.prep}</Text>
        </View>
      </ScrollView>
      <Text style={[styles.ref, styles.font]}>Fonte: https://www.tudogostoso.com.br/</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15
  },
  font: {
    fontFamily: 'Lato',
  },
  fontInfo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#AAA',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },
  author: {
    color: '#AAA',
    marginTop: 2,
    marginBottom: 18,
    fontSize: 18,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  rowArea: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 8,
    justifyContent: 'center'
  },
  ref: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20
  }
})