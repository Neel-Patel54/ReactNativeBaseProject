import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const Home = () => {
    const data = useSelector((state) => state.auth.userData);
    console.log("data..", data)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <MaterialIcons name="home" size={30} color="#4F8EF7" />
        <View style={styles.test} />
      </View>
    );
}

export default Home;