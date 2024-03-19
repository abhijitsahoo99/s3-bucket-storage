import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for your navigation stack
type RootStackParamList = {
  Upload: undefined; // Add other screens as needed,
};
type UploadPageProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Upload'>;
};

const UploadPage : React.FC<UploadPageProps> = ({navigation}) => {
  // Example dates and images data
  const entries = [
    {
      date: "18th March, 2024",
      images: [require('../assets/images/imageTemp.jpeg'), require('../assets/images/imageTemp.jpeg')],
    },
    {
      date: "19th March, 2024",
      images: [require('../assets/images/imageTemp.jpeg'), require('../assets/images/imageTemp.jpeg')],
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.logo}>PiX</Text>
        <MaterialCommunityIcons name="menu" size={24} color="black" />
      </View>
      <ScrollView style={styles.scrollView}>
        {entries.map((entry, index) => (
            <View key={index} style={styles.entry}>
                <Text style={styles.date}>{entry.date}</Text>
                <View style={styles.imageContainer}>
                {entry.images.map((image, imgIndex) => (
                     // Directly pass the result of require() to source prop
                    <Image key={imgIndex} source={image} style={styles.image} />
                    ))}
                </View>
            </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Upload Files</Text>
      </TouchableOpacity>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ede3',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20, // Adjust according to the status bar height on your device
    backgroundColor: '#f5ede3',
  },
  logo: {
    fontFamily: 'KumbhSans-Bold', // Make sure you've loaded the font
    fontSize: 24,
  },
  scrollView: {
    marginVertical: 20,
  },
  entry: {
    marginBottom: 20,
    paddingLeft: 20,
  },
  date: {
    fontFamily: 'InriaSerif-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  image: {
    width: 120,
    height: 150,
    marginRight: 30,
  },
  button: {
    borderWidth : 1,
    borderColor :'#4b4b4b',
    padding : 15,
    borderRadius : 10,
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 50,
    marginRight: 50,
},
buttonText : {
    fontSize : 22,
    color : '#4b4b4b',
    fontFamily: 'InriaSerif-Regular',
}
});

export default UploadPage;
