import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const SectionSuprapto = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Korban G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/suprapto.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={{fontSize:32, color:'#DBB98B', paddingHorizontal:15}}>PROFIL SINGKAT</Text>
        <Text style={styles.text}>
Nama: Raden Suprapto
Lahir: Purwokerto, Jawa tengah, 2 Juni 1920
Wafat: Jakarta, 1 Oktober 1965
Pendidikan:
MULO (Meer Uitgebreid Lager Onderwijs) yang setara SLTP di Yogyakarta
AMS (Algemeene Middlebare School) yang setara SLTA di YogykartaKoninklijke Militaire Akademie di Bandung
Jabatan:
Letjen TNI (Anumerta)

Masa Muda Letnan Jenderal TNI Anumerta R Suprapto atau yang akrab disapa Suprapto lahir dan besar di Purwokerto, Jawa Tengah. Lingkungan tempat dirinya bertumbuh ini penuh diliputi dengan suasana religius yang memberikan pengaruh terhadap watak Suprapto. Ajaran-ajaran agama yang ia dapatkan membentuk Suprapto menjadi seorang yang lembut dan tenang. Kelembutan itu pun didukung oleh bakat seni yang ia miliki. Suprapto sendiri merupakan anak terakhir dari 10 bersaudara. Suprapto mengawali pendidikannya di Hollandsch Inlandsche School (HIS) atau sekolah dasar zaman Hindia Belanda di Purwokerto. Setamatnya dari HIS, ia melanjutkan pendidikan di MULO atau Meer Uitgebreid Lager Onderwijs (setingkat SLTP). Kemudian setelah lulus dari MULO, ia lanjut ke AMS (setingkat SMU) di Yogyakarta dan lulus tahun 1941. Pada tahun yang sama, pemerintah Hindia Belanda mengumumkan milisi sehubungan dengan pecahnya Perang Dunia Kedua. Saat itulah Suprapto mulai terjun ke pendidikan militer.

Organisasi
Ia tergabung dalam Koninklijke Militaire Akademie di Bandung. Namun, Suprapto tidak dapat menyelesaikan pendidikan militernya, karena Jepang sudah lebih dulu menduduki Indonesia. Oleh Jepang, Suprapto ditawan dan dipenjarakan. Tetapi, ia berhasil melarikan diri dari rumah tahanan. Berhasil kabur, Suprapto pun kembali ke kampung halamannya, Purwokerto. Di sana ia pun mengikuti kursus Cuo Seinen Kunrensyo atau Pusat Latihan Pemuda. Suprapto merasa tertarik terhadap masalah-masalah sosial, terutama yang berhubungan dengan pemuda. Dalam kegiatan bidang sosialnya ini, Suprapto berkenalan dengan pemuda Soedirman, seorang pemimpin muda. Keduanya memiliki pemikiran yang sama tentang bagaimana cara untuk memajukan pemuda. Suprapto dan Soedirman pun menyumbangkan tenaga mereka di bidang yang sama. Selain aktif dalam kegiatan sosial, Suprapto juga mengikuti latihan pemuda lain, seperti keibodan, seinendan, dan suisyintai. Ketiga hal itu adalah organisasi bentukan Jepang. 

Pertempuran Ambarawa 
Di awal kemerdekaan, Suprapto merupakan salah satu pejuang yang berhasil merebut senjata pasukan Jepang di Cilacap. Selepas itu, ia pun bergabung menjadi anggota Tentara Keamanan Rakyat (TKR) di Purwokerto. Karena kemampuannya dinilai cukup baik, Suprapto dipercayai menduduki jabatan sebagai Kepala Bagian II Divisi V dan diberi pangkat kapten. Divisi V dipimpin oleh Kolonel Soedirman, tokoh yang sudah ia kenal sejak zaman Jepang. Pada 12 - 15 Desember 1945, terjadi Pertempuran Ambarawa. Dalam perang ini, Suprapto turut mendampingi Komandan Divisi V. Peristiwa dimulai dengan pertempuran di Magelang, terjadi perebutan benteng Banyubiru. Akhir dari pertempuran ini yaitu jatuhnya benteng Willem I di Ambarawa ke tangan TKR. TKR berhasil mengungguli pasukan Serikat yang memiliki persenjataan lengkap. Pasukan Serikat dipukul mundur sampai akhirnya mereka melarikan diri ke Semarang.

Gugur Dalam G30SPKI
Pada 30 September 1965, Suprapto tengah mencabut giginya yang sedang sakit. Karena pada malam itu ia merasa tidak enak badan, Suprapto menghabiskan waktunya dengan membuat sebuah lukisan yang akan disumbangkan ke Museum Perjuangan di Yogyakarta. Sehari kemudian, pada 1 Oktober 1965, pasukan Cakrabirawa masuk ke dalam kediaman Suprapto. Suprapto pun terbangun, karena anjing peliharaannya menggonggong. Ia pun menanyakan siapa yang ada di luar dan terdengar jawaban "Cakrabirawa". Mendengar jawaban tersebut Suprapto tidak curiga, karena Cakrabirawa adalah pasukan terpercaya sebagai pengawas Istana dan Presiden. Salah satu penculik ini mengatakan bahwa Suprapto perlu untuk menemui Presiden. Sebagai seorang perwira yang patuh, Suprapto pun bersedia untuk pergi. Suprapto meminta waktu untuk berganti pakaian terlebih dahulu, namun para penculik tidak mengizinkannya. Setelah itu, Suprapto pun ditodong dengan senjata dan dibawa dengan paksa ke luar pekarangan. Ia pun dibawa ke Lubang Buaya dan dieksekusi. Jenazahnya pun dilemparkan begitu saja ke dalam sumur tua yang sempit bersama dengan jenazah para perwira lain yang diculik oleh eksekutor G30S. Suprato dituduh tergabung dalam Dewan Jenderal yang akan menggulingkan Soekarno, oleh karena itu perlu diculik.
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

export default SectionSuprapto