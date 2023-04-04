import react from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const Sejarah = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Sejarah G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/sjrh.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={styles.text}>
        G30SPKI adalah sebuah gerakan yang memiliki tujuan untuk menggulingkan pemerintahan Presiden Soekarno serta mengubah Indonesia menjadi negara yang menerapkan sistem komunis. Gerakan tersebut dipimpin langsung oleh DN Aidit yang saat itu adalah ketua dari PKI atau Partai Komunis Indonesia. Pada tanggal 1 Oktober 1965 dini hari, Letkol Untung yang merupakan anggota dari Pasukan Pengawal Istana atau seringkali disebut Cakrabirawa, memimpin pasukan yang dianggap setia atau loyal kepada PKI.
Gerakan tersebut mengincar Perwira Tinggi TNI AD Indonesia. Mereka menangkap enam orang dari anggota perwira tersebut. Namun 3 orang diantaranya langsung dibunuh di rumahnya. Sementara yang lainnya dibawa paksa menuju Lubang Buaya. Semua jenazah perwira TNI AD ditemukan selang beberapa hari kemudian.Kejadian tersebut menelan 7 korban yang merupakan perwira tinggi TNI Angkatan Darat. Keenam perwira tinggi tersebut antara lain :

–Letnan Jenderal Anumerta Ahmad Yani
–Mayor Jendral Raden Soeprapto
–Mayor Jenderal Mas Tirtodarmo Haryono
–Mayor Jenderal Siswondo Parman
–Brigadir Jenderal Donald Isaac Panjaitan
–Brigadir Jenderal Sutoyo Siswomiharjo
–Lettu Pierre Andreas Tendean

Sedangkan Panglima TNI yaitu AH Nasution yang menjadi sasaran utama berhasil kabur dan meloloskan diri. Namun, putri dari AH Nasution yang bernama Ade Irma Nasution meninggal dunia karena tertembak. Ia tewas bersama ajudannya yang bernama Lettu Pierre Andreas Tendean yang diculik dan ditembak di Lubang Buaya. Keenam jenderal yang sudah disebutkan di atas dan juga Lettu Pierre Tendean kini ditetapkan sebagai Pahlawan Revolusi. Sejak diresmikannya UU Nomor 20 tahun 2009, gelar tersebut sudah diakui sebagai Pahlawan Nasional.
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

export default Sejarah