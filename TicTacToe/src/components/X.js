import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native'

export default function X() {

  const [line1, setLine1] = useState(new Animated.Value(0));
  const [line2, setLine2] = useState(new Animated.Value(0));

  let r1 = line1.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  let r2 = line2.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  });

  useEffect(() => {
    Animated.timing(
      line1,
      {
        toValue: 45,
        duration: 500,
        easing: Easing.elastic(1.5)
      }
    ).start();

    Animated.timing(
      line2,
      {
        toValue: -45,
        duration: 500,
        easing: Easing.elastic(1.5)
      }
    ).start();
  }, []);


  return (
    <Animated.View style={styles.area}>
      <Animated.View
        style={[styles.line, {
          transform: [{ perspective: 1000 }, { rotate: r1 }]
        }]}
      />
      <Animated.View
        style={[styles.line, {
          transform: [{ perspective: 1000 }, { rotate: r2 }]
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
  line: {
    width: 15,
    height: 90,
    backgroundColor: '#1E90FF',
    position: 'absolute',
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