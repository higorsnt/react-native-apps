/* eslint-disable no-eval */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialValues = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default function App() {
  const [displayValue, setDisplayValue] = useState(initialValues.displayValue);
  const [clearDisplay, setClearDisplay] = useState(initialValues.clearDisplay);
  const [operation, setOperation] = useState(initialValues.operation);
  const [values, setValues] = useState(initialValues.values);
  const [current, setCurrent] = useState(initialValues.current);

  function addDigit(n) {
    const clear = displayValue === '0' || clearDisplay;

    if (n === '.' && !clear && displayValue.includes('.')) {
      return;
    }

    const currentValue = clear ? '' : displayValue;
    const display = currentValue + n;

    setDisplayValue(display);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(display);
      const arr = [...values];
      arr[current] = newValue;
      setValues(arr);
    }
  }

  function clearMemory() {
    setDisplayValue(initialValues.displayValue);
    setClearDisplay(initialValues.clearDisplay);
    setOperation(initialValues.setOperation);
    setValues(initialValues.values);
    setCurrent(initialValues.current);
  }

  function chooseOperation(op) {
    if (current === 0) {
      setOperation(op);
      setCurrent(1);
      setClearDisplay(true);
    } else {
      const equals = op === '=';
      const arr = [...values];
      try {
        arr[0] = eval(`${arr[0]} ${operation} ${arr[1]}`);
      } catch (err) {
        arr[0] = values[0];
      }
      arr[1] = 0;
      setDisplayValue(`${arr[0]}`);
      setOperation(equals ? null : op);
      setCurrent(equals ? 0 : 1);
      setClearDisplay(!equals);
      setValues(arr);
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={chooseOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={chooseOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={chooseOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={chooseOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={chooseOperation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
