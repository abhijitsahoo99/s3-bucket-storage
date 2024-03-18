import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.container}>
            {/* Logo and Text */}
            <View style={styles.textContainer}>
                <Text style={styles.logoText}>PiX</Text>
                <Text style={styles.descriptionText}>Share uncompressed files with a perma-link</Text>
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connect to a bucket</Text>
            </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5ede3',
        justifyContent :  'center'
    },
    textContainer : {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        marginBottom: 40
    },
    logoText: {
        fontFamily: 'KumbhSans-Regular',
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 30,
        marginBottom: 10
    },
    descriptionText: {
        fontSize: 25,
        fontFamily: 'InriaSerif-Regular',
        marginLeft: 30,
    },
    button: {
        borderWidth : 1,
        borderColor :'#4b4b4b',
        padding : 10,
        borderRadius : 10,
        alignItems: 'center',
        paddingLeft: 75,
        paddingRight: 75
    },
    buttonText : {
        fontSize : 22,
        color : '#4b4b4b',
    }
});
export default HomePage;