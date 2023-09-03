import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import logobumibanyusari from '../assets/BUMI_BANYUSARI-removebg-preview (4).png';

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 w-full py-14 text-white ">
        {' '}
        <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 justify-end w-10/12 mx-auto ">
          <div className="flex justify-center">
            <div className="flex  leading-none flex-col lg:text-left text-center mb-4">
              <h1 className=" font-bold uppercase text-xl ">Bumi Banyusari</h1>
              <h4>kecamatan lore utara</h4>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold uppercase text-sm tracking-widest lg:text-left text-center">
                our team
              </h1>
              <div className="text-xs  capitalize lg:text-left text-center mb-4">
                <p>andi muhammad faqih fajar</p>
                <p>khairul insan karim</p>
                <p>syeikhan ritzmy</p>
                <p>imam zaid azizi</p>
                <p>Alimudin tantu</p>
                <p>nurul fajriyah</p>
                <p>siti nurlaili qofifa</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <div>
              <h1 className="font-bold uppercase text-sm tracking-widest pb-1 lg:text-left text-center">
                contact us
              </h1>
              <div className="text-xs gap-1 flex flex-col ">
                <div className="flex items-center gap-1 bg-blue-400 w-12/12 px-2 py-1 rounded-sm">
                  <MdEmail /> kknmbumibanyusari@gmail.com
                </div>
                <div className="flex items-center gap-1 bg-orange-400 w-12/12 px-2 py-1 rounded-sm">
                  <BsInstagram /> kknm_bumibanyusari
                </div>
              </div>
            </div>
          </div>
          <div className="   relative flex justify-center ">
            <img
              src={logobumibanyusari}
              alt=""
              className=" w-40 rounded-full absolute lg:-top-10"
            />
          </div>
        </div>
        <div className="mt-[50%] lg:my-0 md:my-0">
          <div className="border-b-[0.2px] lg:mt-6  w-10/12 mx-auto"></div>{' '}
          <div className="w-full pt-4 bg-slate-900 text-white uppercase font-semibold text-center leading-3 tracking-widest">
            ©️kknm-105{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
