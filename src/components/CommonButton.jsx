import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommonButton = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0080ff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    minWidth: 120,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CommonButton;
