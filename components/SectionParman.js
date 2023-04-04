import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const SectionParman = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Korban G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/parman.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={{fontSize:32, color:'#DBB98B', paddingHorizontal:15}}>PROFIL SINGKAT</Text>
        <Text style={styles.text}>
        PROFIL SINGKAT
Nama: Siswondo Parman
Lahir: Wonosobo, Jawa tengah, 4 Agustus 1918
Wafat: Jakarta, 1 Oktober 1965
Pendidikan:
HIS (Hollandsch Inlandsche School) di Wonosobo
MULO (Meer Uitgebried Lager Onderwijs) di Yogyakarta
AMS (Algemeene Middelbare School)
Sekolah Tinggi Kedokteran (STOVIA) di Jakarta
Sekolah Tinggi Hukum
Jabatan:
Komandan Pusat Polisi Militer Angkatan Darat ke-5

Masa Muda
S. Parman lahir di Wonosobo, Jawa Tengah. Pada 1940, ia lulus dari sekolah tinggi di Kota Belanda dan lanjut ke sekolah kedokteran. Namun, ia tidak dapat menyelesaikan pendidikan dokternya karena Jepang sudah lebih dulu datang menjajah Indonesia. S. Parman kemudian bekerja untuk polisi militer Kempeitai Jepang. Tetapi, ia ditangkap karena pihak Jepang meragukan kesetiaan dari S. Parman, namun setelah itu S. Parman dibebaskan. Setelah bebas, S. Parman dikirim ke Jepang untuk melakukan pelatihan intelijen. Ia juga diminta bekerja lagi untuk Kempeitai. 

Karier Militer 
Karier S. Parman bermula saat melakukan pertemuan dengan pasukan Jepang yang bergerak ke beberapa kota di Jawa Tengah. Pasukan Jepang saat itu sedang membutuhkan penerjemah, sehingga S. Parman pun dibawa oleh Kempeitai (polisi militer Jepang) ke Yogyakarta. Kemudian, ia diangkat sebagai perwira sipil Kempeitai. Setelah proklamasi diikrarkan, S. Parman bergabung dengan Tentara Keamanan Rakyat (TKR). Ia sendiri diangkat menjadi Kepala Staf Markas Besar Polisi Tentara (MBT) di Yogyakarta dengan pangkat kapten. Pada 1948, S. Parman sempat ditangkap akibat kesalahpahaman. Sang kakak, Ir. Sakirman, ikut dalam pemberontakan PKI di Madiun. Saat itu, S. Paraman sedang menjabat sebagai Kepala CPM (Corps Polisi Militer) Markas Besar Komando Jawa tidak dapat menyembunyikan dan membantu pemberontak. Namun, S. Parman dibebaskan setelah terbukti tidak bersalah. Empat tahun kemudian, 1949, ia diangkat menjadi Kepala Staf untuk Gubernur Militer Jabodetabek dan dipromosikan menjadi mayor. Pada masa jabatannya ini, S. Parman berhasil menggagalkan plot oleh Angkatan Perang Ratu Adil atau APRA, kelompok pemberontak yang dipimpin Raymond Westerling. Saat itu, APRA berencana untuk membunuh komandan menteri pertahanan dan angkatan bersenjata. Pada 1951, S. Parman dikirim ke Sekolah Polisi Militer di Amerika Serikat untuk mengikuti pelatihan lebih lanjut. 11 November 1951, S. Parman diangkat menjadi komandan Polisi Militer Jakarta. Kemudian, S. Parman menduduki sejumlah posisi di Polisi Militer Nasional dan Departemen Pertahanan Indonesia sebelum dikirim ke London sebagai atase militer Kedutaan Indonesia. Pada 28 Juni, dengan pangkat Mayor Jenderal, S. Parman diangkat menjadi asisten pertama dengan tanggung jawab untuk intelijen untuk Kepala Staf Angkatan Darat Letjen Ahmad Yani.

Akhir Hidup
S. Parman menjadi salah satu korban yang tewas terbunuh dalam Gerakan 30 September (G30S). S. Parman dituduh sebagai anggota Dewan Jenderal yang akan mengudeta Presiden Soekarno. Pada malam 30 September - 1 Oktober, tidak ada penjaga yang mengawasi rumah S. Parman di Jalan Syamsurizal No. 32. Pada waktu pagi hari, sekitar pukul 4, S. Parman dan istrinya terbangun karena mendengar sebuah suara dari samping rumah mereka. S. Parman pun pergi untuk menyelidiki. Sesaat kemudian, ia melihat ada 24 pria dalam seragam Cakrabirawa (penjaga istana) menuju ke ruang tamu. Mereka mengatakan bahwa S. Parman harus dibawa untuk bertemu dengan Presiden. Sekitar 10 orang pergi ke kamar tidur saat S. Parman tengah berpakaian. S. Parman pun meminta sang istri untuk menelepon komandannya, Ahmad Yani. Tetapi kabel telepon sudah diputus. Ia kemudian dimasukkan ke dalam truk dan dibawa ke basis gerakan di Lubang Buaya. Malam itu, bersama para tentara lain, S. Parman ditembak mati dan tubuhnya dibuang ke sumur bekas. Tubuh semua korban hari itu ditemukan pada 4 Oktober. Pemakaman kenegaraan pun diberikan pada 5 Oktober. Sebelum S. Parman disemayamkan di Taman Makam Pahlawan Kalibata, di hari yang sama, melalui SK Presiden Nomor 111/KOTI/1965, Presiden Soekarno mengukuhkan S. Parman sebagai Pahlawan Revolusi. 

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

export default SectionParman