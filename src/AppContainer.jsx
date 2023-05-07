import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import RootNavigator from './navigations/RootNavigator';
import Loader from './components/Loader';

const AppContainer = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);
    const toastCofig = {
        success: ({ text1 }) => (
            <View style={styles.toastContainer}>
                <Text style={styles.toastText}>{text1}</Text>
            </View>
        )
    };

    return (
        <View style={{flex: 1}}>
            <RootNavigator />
            {isLoading && <Loader />}
            <Toast config={toastCofig} />
        </View>
    )
}

export default AppContainer;

const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: 'black',
        width: '90%',
        padding: 10,
        borderRadius: 8
    },
    toastText: {
        color: 'white'
    }
})