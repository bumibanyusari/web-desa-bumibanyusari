import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React from 'react'
import { motion } from 'framer-motion';

const StrukturItem = ({ name, jabatan, gelar, imgSrc }) => {
  return (
    <motion.div className='flex flex-col justify-center  m-2 h-40' whileHover={
      {
        backgroundColor: '#E5E7EB',
        boxShadow: ' 21px 21px 33px #c7c7c7,-21px -21px 33px #f9f9f9; ',
        cursor: 'pointer'
      }
    }>
      <div>
        <div className=' flex items-center justify-center mb-1'>
          {imgSrc ? <img src={imgSrc} className='w-[80px] border-4 border-green-500 h-[80px] rounded-full bg-contain' /> : <Avatar size={72} icon={<UserOutlined />} className='flex justify-center items-center' />}
        </div>
        <div> <p className='font-bold text-sm leading-tight  w-48 capitalize'>{name} <span>{gelar}</span> </p></div>
        <p className='text-[10px] font-medium uppercase'>{jabatan}</p>
      </div>
    </motion.div >
  )
}

export default StrukturItem