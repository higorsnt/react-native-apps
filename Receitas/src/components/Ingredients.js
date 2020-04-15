import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import NavigationContext from './NavigationContext';

export default function Ingredients() {

  const recipe = useContext(NavigationContext);

  return (
    <View style={styles.area}>
      <FlatList 
        data={recipe.ingredients}
        renderItem={({ item }) => {
          if (item.section) {
            return (
              <Text style={[styles.section, styles.textIngredient]}>{item.text}</Text>
            )
          } else {
            return (
              <Text style={styles.textIngredient}>- {item.text}</Text>
            );
          }
        }}
      />
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
  textIngredient: {
    fontFamily: 'Lato',
    fontSize: 16,
    marginBottom: 5
  },
  section: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
})