import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const SectionHaryono = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Korban G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/haryono.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={{fontSize:32, color:'#DBB98B', paddingHorizontal:15}}>PROFIL SINGKAT</Text>
        <Text style={styles.text}>
Nama: Mas Tirtodarmo Haryono
Lahir: Surabaya, Jawa timur, 20 Januari 1924
Wafat: Jakarta, 1 Oktober 1965
Pendidikan:
Europeesche Lagere School (ELS)
Hoogere Burgerschool atau HBS
Jabatan:
Letnan Jenderal TNI (Anumerta)

Masa Muda
M.T. Haryono dilahirkan sebagai putera seorang B.B.( Pamong Praja ) Kalangan B.B. pada waktu itu mempunyai kedudukan yang istimewa di antara pegawai-pegawai Belanda lainnya. Hanya B.B. 
Pada masa kecilnya M.T. Haryono hidup sebagai putera seorang jaksa di Sidoarjo. Ketika umur empat tahun ayahnya diangkat menjadi wedana di Kertosono dan mereka pindah ke kota itu. Di sinilah ia ketika umur enam tahun masuk sekolah di HIS 6 (Hollandsch-Inlandsche School = Sekolah Dasar) ia suka berteman dan bermain-main dengan anak-anak lainnya dan selalu menjadi pemimpin mereka. Karena wataknya yang keras ia sebagai pemimpin dijuluki "Si Kepala Macan". Tetapi walaupun demikian ia pada hakikatnya seorang pendiam dan bertindak hati-hati dalam segala hal. Ia belajar di HIS sampai kelas tiga dan kemudian, atas tanggungan seorang Belanda guru ELS (Europeesche Lagere School: Sekolah Dasar Belanda) dan teman ayahnya, ia pindah ke kelas empat ELS di kota itu sampai tamat pada tahun 1937.
Tamat dari ELS, M.T. Haryono meneruskan sekolahnya di HBS (Hogere Burgerschool: semacam SMP ditambah SMA yang disatukan dan hanya lima tahun, biasanya hanya untuk orang Belanda) di Bandung. Selama lima tahun ia harus berpisah dari orang tuanya dan menumpang pada orang lain di kota Bandung.
Sebagai pemuda pelajar ia suka berolahraga. Ia suka atletik, tenis dan baseball. Hanya dalam masa libur ia pulang ke orang tuanya yang sejak tahun 1939 telah dipindahkan menjadi wedana di Gorang-Gareng, Mangetan, Madiun. M.T. Haryono menyelesaikan studinya di HBS tepat dalam waktu lima tahun. Ia tamat dari HBS pada tahun l942 ketika Jepang masuk merebut dan menduduki Indonesia (Maret l942).
Ketika GHS (Geneeskundige Hogeschool: Perguruan Tinggi Kedokteran) di Jakarta dibuka kembali oleh Jepang sebagai Ika Dai Gakko, maka M.T. Haryono masuk Perguruan Tinggi Kedokteran tersebut untuk meneruskan studinya. Ia memang ingin menjadi seorang dokter. Baru tiga tahun lamanya M.T. Haryono belajar di lka Dai Gakko ketika tiba-tiba Jepang menyerah dan Indonesia memproklamasikan kemerdekaannya. M.T. Haryono sebagai pemuda mahasiswa Ika Dai Gakko tidak mau ketinggalan. Segera menceburkan diri dalam kancah perjuangan militer.

Menguasai Bahasa Asing
MT Haryono memiliki kemampuan yang baik dalam penguasaan bahasa asing, yaitu bahasa Inggris, Belanda, dan Jerman. Tak jarang dirinya diikutsertakan dalam perundingan dengan pihak Inggris maupun Belanda.Bahkan, ketika berlangsungnya Konferensi Meja Bundar (KMB), MT Haryono ditugaskan sebagai sekretaris delegasi militer Indonesia.

Kematian
Dini hari pada tanggal 1 Oktober 1965, anggota Tjakrabirawa, yang menyebut diri mereka adalah Gerakan 30 September, mendatangi rumah Haryono di Jalan Prambanan No 8. Istrinya terbangun oleh sekelompok orang yang mengatakan bahwa suaminya telah dipanggil oleh Presiden Sukarno. Mrs Haryono kembali ke kamar tidur mengunci pintu di belakangnya dan mengatakan suaminya apa yang terjadi. Dia mengatakan kepadanya untuk tidak pergi dan memberitahu para pasukan untuk kembali pada pukul 8:00. Namun, Haryono curiga dan mematikan lampu memberitahu istrinya untuk pindah bersama anak-anak mereka ke kamar sebelah. Tjakrabirawa kemudian melepaskan tembakan melalui pintu kamar tidur terkunci dan Haryono melompat ke lantai. Ia bersembunyi untuk menunggu penyerang pertama yang masuk ke kamar tidur membawa kertas pembakaran untuk cahaya. Haryono mencoba untuk merebut senjata prajurit, namun gagal dan berlari keluar dari pintu dalam kebingungan. Dia ditembak mati oleh ledakan dari senjata, diseret melalui kebun, dan tubuhnya dibawa ke salah satu truk yang menunggu. Tubuhnya dimasukkan ke dalam truk dan dibawa ke Lubang Buaya, markas pemberontak di selatan pinggiran Jakarta, Jenazahnya disembunyikan di sumur bekas bersama dengan mayat para jenderal dibunuh lainnya.
Seluruh mayat ditemukan pada 4 Oktober dan para jenderal diberi pemakaman kenegaraan. Haryono dimakamkan dengan rekan-rekannya di Taman Makam Pahlawan di Kalibata pada tanggal 5 Oktober. Pada hari yang sama, atas perintah Presiden Soekarno, ia secara anumerta dipromosikan dan menjadi Pahlawan Revolusi.

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

export default SectionHaryono