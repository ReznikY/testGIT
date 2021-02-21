import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const HomeScreen = () => {
    return <View style={styles.homeContainer}>
        <Text style={styles.appName}>UNILINGO</Text>
    </View>
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    appName: {
        width: 145,
        height: 37,
        fontSize: 30,

        color: 'rgba(72,72,72,1)',
        fontFamily: "ProximaNova_ExtraBold",
        fontWeight: "800",
        fontStyle: "normal",
        lineHeight:37
    }
});

export default HomeScreen;