import awal from '../assets/fotoStruktur/awal2crop.jpg';
import andianhar from '../assets/fotoStruktur/andianhar2.jpg';
import linda from '../assets/fotoStruktur/linda2.jpg';
import ujang from '../assets/fotoStruktur/ujang2.jpg';
import ferlin from '../assets/fotoStruktur/ferlin2.jpg';
import sawin from '../assets/fotoStruktur/sawin2.png';
import ruhita from '../assets/fotoStruktur/ruhita2.jpg';
import edianto from '../assets/fotoStruktur/edianto2.jpg';
import eva from '../assets/fotoStruktur/eva2.jpg';
import yuni from '../assets/fotoStruktur/yuni2.jpg';
export const strukturOrganisasi = [
  {
    id: '11',
    name: 'ruhita',
    gelar: 'S.Pd',
    jabatan: 'BPD',
    img: ruhita,
    agama: 'islam',
    email: 'ruhitarusli@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA', 'S1'],
  },
  {
    id: '1',
    name: 'sawin',
    gelar: '',
    jabatan: 'kepala desa',
    img: sawin,
    agama: 'islam',
    email: '',
    pendidikan: ['SD', 'SMP', 'SMA'],
  },
  {
    id: '2',
    name: 'yuni dwi wahyuningsih',
    gelar: 'S.Pd',
    jabatan: 'sekretaris desa',
    img: yuni,
    agama: 'islam',
    email: 'yunidwiwahyuningsih1@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA', 'S1'],
  },
  {
    id: '3',
    name: 'ujang hermanto',
    gelar: '',
    jabatan: 'kepala seksi pelayanan',
    img: ujang,
    agama: 'islam',
    email: 'ujangaa22@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA'],
  },
  {
    id: '4',
    name: 'eva astika ',
    gelar: 'S.AP',
    jabatan: 'kepala seksi kesejahteraan',
    img: eva,
    agama: 'islam',
    email: 'evaastika98@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA', 'S1'],
  },
  {
    id: '5',
    name: 'ferlin lampaliu ',
    gelar: '',
    jabatan: 'kepala seksi pemerintahan',
    img: ferlin,
    agama: 'islam',
    email: 'Laurachika92@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA'],
  },
  {
    id: '6',
    name: 'andi anhar',
    jabatan: 'kepala urusan umum',
    img: andianhar,
    agama: 'islam',
    email: 'andiyanhar1995@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA'],
  },
  {
    id: '7',
    name: 'linda sari ayuningsi',
    gelar: 'S.P',
    jabatan: 'kepala urusan perencanaan',
    img: linda,
    agama: 'islam',
    email: 'lhyndaasariindah@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA', 'S1'],
  },
  {
    id: '8',
    name: 'baso awaluddin',
    jabatan: 'kepala urusan keuangan',
    img: awal,
    agama: 'islam',
    email: 'basoawal111@gmail.com',
    pendidikan: ['SD', 'SMP', 'SMA'],
  },
  {
    id: '9',
    name: 'ediyanto',
    jabatan: 'kepala dusun 1',
    gelar: '',
    img: edianto,
    agama: 'islam',
    email: '',
  },
  {
    id: '10',
    name: 'yusuf',
    jabatan: 'kepala dusun 2',
    agama: 'islam',
    email: '',
  },
];

export const visi = (styling) => [
  {
    key: '1',
    label: 'Mandiri',
    children: (
      <p>
        Mandiri berarti kondisi atau keadaan yang dituju, dimana pada kondisi
        tersebut terjadi peningkatan dan terpenuhinya kuantitas serta kualitas
        pelayanan dasar kepada masyarakat yaitu keagamaan, pendidikan,kesehatan
        pekerjaan,kesenian sosial budaya dan keamanan serta keadilan
      </p>
    ),
    style: styling,
  },
  {
    key: '2',
    label: 'Pengembangan',
    children: (
      <p>
        Pengembangan potensi pertanian dan perkebunan merupakan upaya pemerintah
        desa bersama-sama masyarakat untuk mengoptimalkan pengelolaan potensi
        pertaniandan perkebunan guna mencapai kemandirian desa
      </p>
    ),
    style: styling,
  },
  {
    key: '3',
    label: 'Pemberdayaan',
    children: (
      <p>
        {' '}
        pemberdayaan masyarakat berarti upaya pemerintah desa untuk meningkatkan
        pengetahuan dan keahlian masyarakat desa Bumi Banyusari agar lebih
        kompetitif dan berdaya saing
      </p>
    ),
    style: styling,
  },
];

export const misi = (styling) => [
  {
    key: '1',
    label: 'Menyelenggarakan',
    children: (
      <p>
        menyelenggarakan pemerintahan yang baik dengan mengedepankan fungsi
        pelayanan yang berlandaskan asas transparasi. akuntabilitas responsif
        dan inovatif serta partisipatif
      </p>
    ),
    style: styling,
  },
  {
    key: '2',
    label: 'Melaksanakan',
    children: (
      <p>
        melaksanakan pembangunan infrastruktur desa secara efektif dan efisien
        dengan mengutamakan prinsip swakelola guna menjaga kelestarian
        lingkungan dan kearifan lokal masyarakat desa.
      </p>
    ),
    style: styling,
  },
  {
    key: '3',
    label: 'Membangun',
    children: (
      <p>
        membangun sarana dan prasarana pendukung usaha pertanian dan perkebunan
        masyarakat serta jaringan pemasaran guna meningkatkan hasil dan
        pemasaran produksi.
      </p>
    ),
    style: styling,
  },
  {
    key: '4',
    label: 'Membina',
    children: (
      <p>
        membina kelembagaan desa untuk berperan aktif dalam pembangunan desa.
      </p>
    ),
    style: styling,
  },
  {
    key: '5',
    label: 'Memberdayakan',
    children: (
      <p>
        memberdayakan masyarakat desa agar menjadi manusia berahlak,
        sehat,cerdas dan produktif.
      </p>
    ),
    style: styling,
  },
];

import g1 from '../assets/galeri/g1.jpg';
import g2 from '../assets/galeri/g2.jpg';
import g3 from '../assets/galeri/g3.jpg';
import g4 from '../assets/galeri/g4.jpg';
import g5 from '../assets/galeri/g5.jpg';
import g6 from '../assets/galeri/g6.jpg';
import g7 from '../assets/galeri/g7.jpg';
import g8 from '../assets/galeri/g8.jpg';
import g9 from '../assets/galeri/g9.jpg';
import g10 from '../assets/galeri/g10.jpg';
import g11 from '../assets/galeri/g11.jpg';
import g12 from '../assets/galeri/g12.jpg';
export const GalleryData = [
  { imgUrl: g1 },
  { imgUrl: g2 },
  { imgUrl: g3 },
  { imgUrl: g4 },
  { imgUrl: g5 },
  { imgUrl: g6 },
  { imgUrl: g7 },
  { imgUrl: g8 },
  { imgUrl: g9 },
  { imgUrl: g10 },
  { imgUrl: g11 },
  { imgUrl: g12 },
];
