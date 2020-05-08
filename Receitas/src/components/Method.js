import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import NavigationContext from './NavigationContext';

export default function Method() {

  const recipe = useContext(NavigationContext);
  let index = 0;

  return (
    <View style={styles.area}>
      <FlatList
        showsVerticalScrollIndicator={false}
        initialNumToRender={40}
        data={recipe.directions}
        renderItem={({ item }) => {
          if (item.section) {
            return (
              <Text style={[styles.section, styles.textMethod]}>{item.text}</Text>
            );
          } else {
            index++;
            return (
              <View>
                <Text style={styles.textStep}>{index}º Passo:</Text>
                <Text style={styles.textMethod}>{item.text}</Text>
              </View>
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
  textMethod: {
    fontFamily: 'Lato',
    fontSize: 16,
    marginBottom: 8
  },
  section: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStep: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  }
})