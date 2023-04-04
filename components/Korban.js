import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const Korban = () => {
    return(
        <View style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.navbar}>
                        <Image source={require('../assets/back.png')} />
                        <Text style={{fontSize:25, color: '#DBB98B'}}>Korban G30SPKI</Text>
                        <Image source={require('../assets/info2.png')} />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{paddingHorizontal:15}}>
                            <Image source={require('../assets/ahmadyani.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Letnan Jenderal Anumerta</Text>
                                <Text style={{color: '#DBB98B',}}>Ahmad Yani</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../assets/suprapto.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Mayor Jenderal Raden</Text>
                                <Text style={{color: '#DBB98B',}}>Soeprapto</Text>           
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{paddingHorizontal:15}}>
                            <Image source={require('../assets/haryono.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Mayor Jenderal Mas</Text>
                                <Text style={{color: '#DBB98B',}}>Tirtodarmo Haryono</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../assets/parman.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Mayor Jenderal Siswondo</Text>
                                <Text style={{color: '#DBB98B',}}>Parman</Text>           
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{paddingHorizontal:15}}>
                            <Image source={require('../assets/panjaitan.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Brigadir Jenderal Donald</Text>
                                <Text style={{color: '#DBB98B',}}>Isaac Panjaitan</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../assets/sutoyo.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Brigadir Jenderal Sutoyo</Text>
                                <Text style={{color: '#DBB98B',}}>Siswomiharjo</Text>           
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{paddingHorizontal:15}}>
                            <Image source={require('../assets/lettu.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Lettu Pierre Andreas</Text>
                                <Text style={{color: '#DBB98B',}}>Tendean</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={require('../assets/ade.png')} />
                            <View style={{marginTop:5, marginBottom: 52}}>
                                <Text style={{color: '#DBB98B',}}>Ade Irma Suryani Nasution</Text>        
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>         
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000000',
        flex:1
    },
    navbar : {
        flex:0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 50,
        paddingHorizontal: 15
    },
})

export default Korban