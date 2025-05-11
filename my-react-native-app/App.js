
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [result, setResult] = useState('0');
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttons}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="+" onPress={() => handlePress('+')} />
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="-" onPress={() => handlePress('-')} />
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="*" onPress={() => handlePress('*')} />
        <Button title="C" onPress={handleClear} />
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="=" onPress={handleCalculate} />
        <Button title="/" onPress={() => handlePress('/')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  result: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default App;
