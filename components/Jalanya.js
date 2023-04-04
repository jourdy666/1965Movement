import react from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const Jalanya = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Jalannya G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/penjara.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={styles.text}>
        Jalannya G30SPKI
Pada tanggal 30 September 1965, PKI dibawah Letkol Untung melakukan penculikan terhadap para petinggi PKI yang dianggap sebagai Dewan Jenderal yang akan menggulingkan kekuasaan Soekarno. Penculikan ini dilanjutkan dengan pembunuhan para jenderal yang menolak mengakui akan melakukan pemberontakan. Jasad para jenderal TNI AD dimasukkan ke lubang sumur tua di kawasan Pondok Gede, Jakarta (Lubang Buaya).
Pemberontakan G30S/PKI menyebar ke berbagai wilayah lain seperti Jawa dan Yogyakarta.
Pada tanggal 1 Oktober 1965, Cakrabirawa dibawah pimpinan Mayjen Soeharto dikerahkan guna menguasai RRI dan Telekomunikasi guna menyebarkan kabar Presiden Soekarno dan A.H. Nasution dalam keadaan selamat.
Pada tanggal 2 Oktober 1965, operasi berlanjut ke kawasan Halim Perdanakusuma, tempat PKI mundur dari kawasan Monas. Atas petunjuk Polisi Sukitman yang lolos dari pembunuhan PKI, pemerintah menemukan tempat jenazah para perwira TNI di lubang sumur tua (Lubang Buaya) di kawasan Pondok Gede, Jakarta.
Pada tanggal 4 Oktober 1965, dilakukan pengangkatan jenazah para petinggi TNI dan keesokan harinya dimakamkan di Taman Makam Pahlawan Kalibata Jakarta.
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

export default Jalanya