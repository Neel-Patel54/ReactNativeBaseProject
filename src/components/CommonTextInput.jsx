import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CommonTextInput = ({ placeholder, secureTextEntry, value, onChangeText, name, onBlur, keyboardType }) => {
    return (
        <TextInput
            name={name}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default CommonTextInput;
