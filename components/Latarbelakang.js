import react from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const Latarbelakang = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Latar Belakang G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/pki.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={styles.text}>
        Tujuan utama G30SPKI adalah menggulingkan pemerintahan era Soekarno dan mengganti negara Indonesia menjadi negara komunis. Seperti diketahui, PKI disebut memiliki lebih dari 3 juta anggota dan membuatnya menjadi partai komunis terbesar ketiga di dunia, setelah RRC dan Uni Soviet.
Beberapa tujuan G30S PKI adalah sebagai berikut:
Menghancurkan Negara Kesatuan Republik Indonesia (NKRI) dan menjadikannya sebagai negara komunis.
Menyingkirkan TNI Angkatan Darat dan merebut kekuasaan pemerintahan.
Mewujudkan cita-cita PKI, yakni menjadikan ideologi komunis dalam membentuk sistem pemerintahan yang digunakan sebagai alat untuk mewujudkan masyarakat komunis.
Mengganti ideologi Pancasila menjadi ideologi komunis.
Kudeta yang dilakukan kepada Presiden Soekarno tak lepas dari rangkaian kegiatan komunisme internasional.

Secara umum, G30S PKI dilatarbelakangi oleh dominasi ideologi Nasionalisme, Agama, dan Komunisme (NASAKOM) yang berlangsung sejak era Demokrasi Terpimpin diterapkan, yakni tahun 1959-1965 di bawah kekuasaan Presiden Soekarno.Beberapa hal lain yang menyebabkan mencuatkan gerakan yang menewaskan para Jenderal ini adalah ketidakharmonisan hubungan anggota TNI dan juga PKI. Pertentangan pun muncul di antara keduanya. Selain itu, desas desus kesehatan Presiden Soekarno juga turut melatarbelakangi pemberontakan G30S PKI.
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

export default Latarbelakang