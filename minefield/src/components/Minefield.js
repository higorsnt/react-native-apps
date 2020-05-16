import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Field from './Field';

const Minefield = ({ board }) => {
  const rows = board.length.map((row, r) => {
    const columns = row.map((field, f) => {
      return <Field {...field} key={f} />;
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
