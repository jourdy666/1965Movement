import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

const Home = () => {
    return (
     <View style={styles.container}>
        <ImageBackground source={require('../assets/bg.png')} resizeMethod={'auto'} style={styles.bg}>
          <View style={{padding:20, justifyContent: 'space-between',flex:1}}>
            <View style={styles.content}>
              <Image source={require('../assets/Vector.png')} />
              <Text style={styles.text}>1965 Movement</Text>
              <Image source={require('../assets/info.png')} />
            </View>
            <View>
              <Text style={styles.text2}>Sejarah</Text>
              <Text style={styles.text2}>G30SPKI</Text>
              <Text style={styles.text2}>1965</Text>
            </View> 
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Explore</Text>
              </TouchableOpacity>
            </View>
          </View> 
        </ImageBackground>
     </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%',
     
        
      },
      text: {
        color: 'white',
        fontSize: 25,
      },
      text2: {
        color: 'white',
        fontSize: 60,
        fontFamily: 'PTSerif-Regular'
      },
      content: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical:20
      },
      button: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 50,
        width: 120,
        textAlign: 'center'
      },
      buttonText: {
        color: 'black',
        fontSize: 20,
      },
})
  
  
  export default Home;
