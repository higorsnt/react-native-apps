import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

export default function O() {

  const [height, setHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      height,
      {
        toValue: 90,
        duration: 500,
        easing: Easing.elastic(1.5)
      }
    ).start();
  }, []);


  return (
    <Animated.View style={styles.area}>
      <Animated.View
        style={[styles.circle, {
          height,
        }]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  area: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 90,
    borderRadius: 45,
    backgroundColor: '#1E90FF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});