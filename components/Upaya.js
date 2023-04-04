import react from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const Upaya = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:22, color: '#DBB98B'}}>Upaya Penumpasan G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/bubar.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={styles.text}>
        Terdapat empat tindakan yang dilakukan oleh Mayor Jenderal Suharto dalam menumpas pemberontakan G30S/PKI, seperti menetralisir pasukan di sekitar Medan Merdeka, menduduki kembali Pusat Telekomunikasi dan RRI, menyampaikan informasi mengenai situasi terkini, dan merebut pangkalan udara Halim Perdanakusuma.
Pemberontakan G30S/PKI telah menewaskan 7 perwira angkatan darat pada tanggal 1 Oktober 1965. Upaya pemberantasan gerakan tersebut selanjutnya dipimpin langsung oleh Mayor Jenderal Suharto selaku Pangkostrad. Beberapa tindakan yang diambil Mayjen Suharto dalam penumpasan G30S/PKI adalah sebagai berikut.
Tindakan pertama ditujukan untuk menetralisir pasukan-pasukan yang masih mengambil stelling di sekitar Medan Merdeka.
Tindakan kedua, yakni instruksi Suharto untuk menduduki kembali gedung Pusat Telekamunikasi dan RRI. Tugas tersebut dilakukan oleh pasukan RPKAD.
Tindakan ketiga, yakni penyampaian informasi secara langsung oleh Suharto terkait situasi terkini melalui siaran radio.
Tindakan keempat, yakni operasi merebut pangkalan angkatan udara Halim Perdanakusuma.
        </Text>
      </ScrollView>
    </View>
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
    text : {
        color: '#DBB98B',
        fontSize: 20,
        paddingHorizontal: 15,
        textAlign: 'justify'
    }
})

export default Upaya