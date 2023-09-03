import React, { useState } from 'react';
import StrukturItem from './StrukturItem';
import { strukturOrganisasi } from '../data/data';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Modal, Steps } from 'antd';
import { MdEmail } from 'react-icons/md';
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Struktur = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const dataPendidikan = selectedPerson?.pendidikan?.map((data) => {
    return {
      title: data,
    };
  });

  const showModal = (personData) => {
    setSelectedPerson(personData);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPerson(null);
    setIsModalVisible(false);
  };

  return (
    <div
      className="lg:w-11/12 lg:m-auto mt-40  p-2 flex flex-col items-center text-center mb-20"
      id="struktur"
    >
      <div>
        <h1 className="font-bold uppercase text-2xl">
          Perangkat Desa <p className="text-sm">Periode 2022-2027</p>
        </h1>
      </div>
      <div className="lg:w-[700px] flex  flex-wrap justify-center  items-center h-full shadow-quotes mb-20 lg:mt-5 mt-3 rounded-md">
        {strukturOrganisasi.map((data, index) => (
          <InView key={index} threshold={0.3}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={itemVariants}
                onClick={() => showModal(data)}
                style={{ cursor: 'pointer' }}
              >
                <StrukturItem
                  name={data.name}
                  jabatan={data.jabatan}
                  gelar={data.gelar}
                  imgSrc={data.img}
                />
              </motion.div>
            )}
          </InView>
        ))}
      </div>

      <Modal
        open={isModalVisible}
        onCancel={closeModal}
        footer={null}
        className="relative text-center  "
      >
        {/* <div className='font-bold text-xl text-center mb-3'>DETAIL DATA</div> */}
        <div className=" flex justify-center">
          <img
            src={selectedPerson?.img}
            className="rounded-full w-80 border-4 border-green-500"
          />
        </div>
        <p className="font-bold text-4xl text-center capitalize my-3">
          {selectedPerson?.name}
          {selectedPerson?.gelar?.length !== 0 ? (
            <span> {selectedPerson?.gelar}</span>
          ) : (
            <p></p>
          )}
        </p>
        <p className=" text-base text-center capitalize bg-indigo-500  inline-block  px-3  py-2 rounded-md font-bold text-white  ">
          {' '}
          {selectedPerson?.jabatan}
        </p>
        <div className="flex flex-col justify-center gap-2 mt-2">
          <div className="flex justify-center gap-2">
            <p className="bg-blue-500 px-4 py-2 rounded-md font-bold uppercase text-white">
              {selectedPerson?.agama}
            </p>
            {selectedPerson?.email?.length !== 0 ? (
              <p className="bg-green-500 text-white flex items-center  justify-center font-semibold px-4 py-2 rounded-md gap-x-2">
                <MdEmail size={18} /> <div>{selectedPerson?.email}</div>
              </p>
            ) : null}
          </div>
          <div className="mt-2 flex   items-center  justify-center ">
            <Steps
              direction="horizontal"
              labelPlacement="vertical"
              type="default"
              responsive
              size="small"
              status="finish"
              items={dataPendidikan}
              current={dataPendidikan?.length - 1}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Struktur;
