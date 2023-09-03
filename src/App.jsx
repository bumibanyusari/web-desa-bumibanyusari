import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VisiMisi from './components/VisiMisi';
import Header from './components/Header';
import Main from './components/Main';
import SejarahSingkat from './components/SejarahSingkat';
import Struktur from './components/Struktur';
import Galeri from './components/Galeri';
import Footer from './components/Footer';
import DataPenduduk from './components/DataPenduduk';

function App() {
  const { ref: mainRef, inView: mainInView } = useInView({ triggerOnce: true });
  const { ref: sejarahRef, inView: sejarahInView } = useInView({
    triggerOnce: true,
  });
  const { ref: visiMisiRef, inView: visiMisiInView } = useInView({
    triggerOnce: true,
  });
  const { ref: strukturRef, inView: strukturInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="overflow-x-hidden">
        <Header />
        <motion.div
          ref={mainRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mainInView ? 1 : 0, y: mainInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Main />
        </motion.div>
        <motion.div
          ref={sejarahRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: sejarahInView ? 1 : 0,
            y: sejarahInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <SejarahSingkat />
        </motion.div>
        <motion.div
          ref={visiMisiRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: visiMisiInView ? 1 : 0,
            y: visiMisiInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <VisiMisi />
        </motion.div>
        <motion.div
          ref={strukturRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: strukturInView ? 1 : 0,
            y: strukturInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <Struktur />
        </motion.div>

        <Galeri />

        <DataPenduduk />
        <Footer />
      </div>
    </>
  );
}

export default App;
