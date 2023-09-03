import React from 'react';
import GaleriItem from './GaleriItem';
import { GalleryData } from '../data/data';

const Galeri = () => {
  return (
    <div
      className=" flex flex-col items-center mx-auto p-8 lg:w-8/12 mb-32 "
      id="galeri"
    >
      <h1 className="text-2xl font-bold mb-4 uppercase">Galeri </h1>
      <GaleriItem galleryData={GalleryData} />
    </div>
  );
};

export default Galeri;
