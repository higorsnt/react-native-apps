import React from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';

import RecipeItem from '../components/RecipeItem';

export default function Home() {

  const recipes = require('../data/recipes.json');

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle='light-content'
        backgroundColor="transparent"
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        renderItem={({ item }) => <RecipeItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  }
})