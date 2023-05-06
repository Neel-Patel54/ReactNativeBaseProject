import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';

const Home = () => {
    const data = useSelector((state) => state.auth.userData);
    console.log("data..", data)
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    )
}

export default Home;