import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
export default function Header() {
  return (
    <nav className="flex items-center justify-center p-4 bg-slate-900">
      {/* Logo */}
      <div className="flex justify-between w-[90%]">
        <div className="flex items-center">
          <a href="/">
            {' '}
            <span className="text-white font-bold text-lg uppercase">
              Bumi Banyusari
            </span>
          </a>
        </div>

        <div className="flex space-x-20 items-center max-[768px]:hidden ">
          <a
            href="#visi-misi"
            className="text-white hover:text-gray-400 hover "
          >
            Visi & Misi
          </a>
          <a href="#struktur" className="text-white hover:text-gray-400">
            Struktur
          </a>
          <a href="#galeri" className="text-white hover:text-gray-400">
            Galeri
          </a>
          <a href="#data-desa" className="text-white hover:text-gray-400">
            Data Desa
          </a>
          {/* <button
            href="/layanan"
            className="text-white hover:bg-green-600 flex  items-center bg-green-500 w-28 justify-around p-2 rounded-md"
          >
            <BsWhatsapp /> Whatsapp
          </button> */}
        </div>
      </div>
    </nav>
  );
}
