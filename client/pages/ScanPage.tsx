import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
  Scan: undefined;
  Upload : undefined;
};

type ScanPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Scan'>;
};
const ScanPage : React.FC<ScanPageProps> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.bolderBorder}></View>
            {/* Logo and Text */}
            <View style={styles.textContainer}>
                <Text style={styles.logoText}>Scan QR Code.</Text>
                <Text style={styles.descriptionText}>Once your server is storage server is deployed, it will display a QR code.</Text>
            </View>
            {/* Button */}
            <TouchableOpacity onPress={() => navigation.navigate("Upload")} style={styles.button}>
                <Text style={styles.buttonText}>Deploy a Storage Server</Text>
                <View style={styles.iconPadding}>
                    <Feather name="arrow-up-right" size={15} color="black"/>
                </View>
            </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: '#f5ede3',
        justifyContent :  'center',
        paddingTop: 250,
    },
    bolderBorder: {
        alignSelf: 'stretch', 
        borderTopWidth: 2, 
        borderColor: '#4b4b4b', 
        marginBottom: 20, 
    },
    textContainer : {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        marginBottom: 40
    },
    logoText: {
        fontFamily: 'KumbhSans-Bold',
        fontSize: 45,
        marginLeft: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 20,
    },
    descriptionText: {
        fontSize: 23,
        fontFamily: 'InriaSerif-Regular',
        marginLeft: 10,
        paddingLeft: 10,
    },
    button: {
        flexDirection: 'row',
        borderWidth : 1,
        borderColor :'#4b4b4b',
        padding : 10,
        borderRadius : 10,
        alignItems: 'center',
        paddingLeft: 70,
        paddingRight: 70,
    },
    iconPadding: {
        // paddingBottom: 1,
        paddingLeft: 2
    },
    buttonText : {
        fontSize : 22,
        color : '#4b4b4b',
        fontFamily: 'InriaSerif-Regular',
    }
});
export default ScanPage;