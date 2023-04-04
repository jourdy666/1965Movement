import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

const SectionAnumerta = () => {
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image source={require('../assets/back.png')} />
        <Text style={{fontSize:25, color: '#DBB98B'}}>Korban G30SPKI</Text>
        <Image source={require('../assets/info2.png')} />
      </View>
      <View style={{alignSelf: 'center',marginVertical: 0}}> 
        <Image source={require('../assets/ahmadyani.png')} />
      </View>
      <View style={{marginTop: 45, marginHorizontal: 15,marginBottom: 20}}>
  <View style={{height: 1, backgroundColor: '#DBB98B'}} />
</View>


      <ScrollView style={{flex: 1}}>
        <Text style={{fontSize:32, color:'#DBB98B', paddingHorizontal:15}}>PROFIL SINGKAT</Text>
        <Text style={styles.text}>
        Nama: Anumerta Achmad Yani
Lahir: Jenar, Purworejo, Jawa Tengah, 22 Juni 1922
Wafat: Jakarta, 1 Oktober 1965
Pendidikan:
HIS (setara SD) Bogor, tamat tahun 1935
MULO (setara SMP) kelas B Afd. Bogor, tamat tahun 1938
AMS (setara SMA/ SMU) bagian B Afd. Jakarta, berhenti tahun 1940
Pendidikan militer pada Dinas Topografi Militer di Malang
Pendidikan Heiho di Magelang
Tentara Pembela Tanah Air (PETA) di Bogor
Command and General Staf College di Fort Leaven Worth, Kansas, USA, tahun 1955
Spesial Warfare Course di Inggris, tahun 1956
Jabatan:
Menteri Panglima Angkatan Darat (Men/Pangad) (23 Juni 1962 – 1 Oktober 1965)

Masa Kecil Dan Pendidikan Jenderal Ahmad Yani
Achmad Yani lahir pada 19 Juni 1922 di Jenar, Purworejo, Jawa Tengah, Ia merupakan anggota keluarga Wongsoredjo yaitu sebuah keluarga yang bekerja di sebuah pabrik gula milik Belanda. Ia dan keluarganya pindah ke Batavia pada tahun 1927 karena sang ayah kini bekerja pada General Belanda. Di Batavia, Ia bekerja dan juga menempuh pendidikannya di HIS (setara SD) Bogor dan lulus pada tahun 1935, kemudian Ia melanjutkan pendidikanya ke MULO (setara SMP) kelas B Afd. Bogor dan lulus pada tahun 1938. Setelah itu, Ia melanjutkan ke AMS (setara SMA/SMU) bagian B Afd. Jakarta, namun pendidikannya di AMS hanya sampai kelas 2 saja karena adanya misili yang diumumkan oleh Pemerintah Hindia Belanda untuk menjalani wajib militer.
Ahmad Yani mengikuti pendidikan topografi militer di Malang, Jawa tengah dan lebih mendalaminya di Bogor dan Ia mendapat pangkat Sersan. Pendidikan yang ia jalani tersebut terganggu karena kedatangan Jepang pada tahun 1942 dan saat yang sama Ia dan keluarganya pindah lagi ke Jawa Tengah. Pada tahun 1943, Ahmad Yani bergabung dan mengikuti Pendidikan Heiho di Magelang dan setelah itu Ia bergabung dengan tentara Peta di Bogor.

Karier Militer Ahmad Yani
Setelah TKR atau Tentara Keamanan Rakyat terbentuk, Achmad Yani ditunjuk sebagai pemimpin TKR Purwokerto. Pada saat terjadi Agresi Militer Belanda I, Ia dan pasukannya berhasil menahan serangan Belanda di daerah tugas mereka yaitu di daerah Pingit.Karena Hal tersebut, pada saat terjadi Agresi Militer II, Ia dipercaya menjabat sebagai Komandan Wehrkreise II. Setelah Indonesia memperoleh pengakuan kedaulatan, Yani diberi tugas untuk melawan pasukan Darul Islam/Tentara Islam Indonesia (DI/TII) yang mengacau di Jawa Tengah, lalu dibentuklah pasukan Banteng Raiders yang dibekali latihan khusus untuk melawan pasukan DI/TII tersebut dan akhirnya pasukan DI/TII berhasil dikalahkan.
Pada bulan Desember tahun 1955, Achmad Yani dikirim ke Amerika Serikat untuk menjalani pendidikan di Command and General Staff College di Fort Leavenworth, Kansas, USA. Disana Ia menjalani pendidikan selama 9 bulan, lalu pada tahun 1956 Ia mengikuti pendidikan di Special Warfare Course, Inggris selama 2 bulan.
Pada tahun 1958, terjadi pemberontakan PRRI di Sumatera Barat dan Ahmad Yani yang berpangkat Kolonel ditunjuk sebagai Komandan Komando Operasi 17 Agustus untuk melawan pemberontakan tersebut dan berhasil menang. Karena pencapaiannya tersebut, pada tahun 1962 Yani diangkat menjadi Panglima/ Menteri Angkatan Darat.

Wafatnya Ahmad Yani
Ahmad Yani yang selalu berbeda pendapat dengan Partai Komunis Indonesia, Saat PKI menginginkan pembentukan Angkatan Kelima yang terdiri dari buruh dan tani yang diberi persenjataan, Yani menolaknya. Karena hal tersebut, PKI menjadikan Yani sebagai salah satu target dari 7 petinggi TNI AD yang akan diculik dan di bunuh melalui Pemberontakan G30S/PKI.
Pada dini hari 1 Oktober 1965, para penculik datang ke rumah Yani dan mengaku bahwa mereka akan menjemput Yani untuk dibawa bertemu presiden, Ia meminta waktu untuk mandi dan berganti pakaian namun ditolak lalu ia marah dan menampar salah satu penculik itu dan berusaha untuk menutup pintu rumahnya. Seorang penculik kemudian melepaskan tembakan pada Yani, jasad Yani dibawa ke Lubang Buaya, Jakarta Timur bersama orang yang terbunuh lainnya, lalu semua jasad tersebut disembunyikan dalam sebuah sumur bekas.
Pada tanggal 4 oktober, jasad Achmad Yani dan semua korban ditemukan dan pada hari berikutnya mereka dimakamkan di Taman Makam Pahlawan, bersamaan dengan itu dengan Keputusan Presiden Nomor 111/KOTI/1965 Achmad Yani beserta rekan diyatakan sebagai Pahlawan Revolusi dan Achmad Yani dinaikan pangkatnya menjadi Jenderal Anumerta.
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

export default SectionAnumerta