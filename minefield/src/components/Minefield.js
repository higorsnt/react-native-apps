import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Field from './Field';

const Minefield = ({ board, onOpenField, onSelectField }) => {
  const rows = board.length.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={(e) => onSelectField(r, c)}
        />
      );
    });

    return (
      <View style={styles.row} key={r}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },

  row: {
    flexDirection: 'row',
  },
});

export default Minefield;
