import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './style';
function Calculator() {
const [displayValue, setDisplayValue] = useState('0');
const [operator, setOperator] = useState(null);
const [firstValue, setFirstValue] = useState('');
//
const handleNumberInput = (num) => {
    if (displayValue === '0') {
        setDisplayValue(num.toString());
    }else{
        setDisplayValue(displayValue + num);
    }

};
const handleOperatorInput = (op) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
};

//
const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
        setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
        setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
        setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
        setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
};

//
const handleClear=() => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
};
  return (
    
 <View style={styles.container}>
      {/* Màn hình hiển thị */}
      <Text style={styles.display}>{displayValue}</Text>

      {/* Hàng 7 8 9 ÷ */}
      <View style={styles.row}>
        {[7, 8, 9].map((n) => (
          <TouchableOpacity key={n} style={styles.button} onPress={() => handleNumberInput(n)}>
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng 4 5 6 × */}
      <View style={styles.row}>
        {[4, 5, 6].map((n) => (
          <TouchableOpacity key={n} style={styles.button} onPress={() => handleNumberInput(n)}>
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('*')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng 1 2 3 − */}
      <View style={styles.row}>
        {[1, 2, 3].map((n) => (
          <TouchableOpacity key={n} style={styles.button} onPress={() => handleNumberInput(n)}>
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('-')}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng 0 + = */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorInput('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={handleEqual}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng riêng nút C */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.clearWideButton]} onPress={handleClear}>
          <Text style={styles.clearButtonText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Calculator;