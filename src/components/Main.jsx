import React from 'react';

export default function Main() {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat lg:p-12 text-center bg-main-image min-h-screen">
        <div className="absolute inset-0 bg-fixed bg-black opacity-20"></div>
        <div className="relative z-10 flex flex-col h-[900px] items-center justify-center  text-white">
          <div className="font-bold lg:text-7xl md:text-5xl text-3xl">
            DESA BUMI BANYUSARI
          </div>
          <div className="font-bold lg:text-6xl md:text:4xl text-2xl">
            KECAMATAN LORE UTARA
          </div>
        </div>
      </div>
    </>
  );
}
