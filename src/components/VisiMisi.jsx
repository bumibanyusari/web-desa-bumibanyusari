import React from 'react';
import { Collapse, theme } from 'antd';
import { misi, visi } from '../data/data';
export default function VisiMisi() {
  const { token } = theme.useToken();
  const stylePanel = {
    border: 'none',
    background: token['green-2'],
    borderRadius: token.borderRadiusLG,
    marginBottom: 12,
  };
  return (
    <div
      className="flex flex-col w-[90%] min-[320px]:mb-48  sm:m-auto sm:-mb-48 m-auto mt-20 h-[100vh]"
      id="visi-misi"
    >
      <div className="text-center w-full text-3xl font-bold mb-5">
        VISI & MISI
      </div>
      <div>
        <div className="flex  justify-center pb-20">
          <div className="lg:w-4/12 text-center  italic font-bold ">
            "Mewujudkan bumi banyusari menjadi desa mandiri melalui pengembangan
            potensi pertanian dan perkebunan serta pemberdayaan masyarakat"
          </div>
        </div>
        <div className="lg:flex justify-around relative flex-col  ">
          <div className=" lg:w-4/12  p-4 w-full lg:absolute lg:top-0 lg:left-36  ">
            <h1 className="text-center font-semibold text-3xl pb-2 ">VISI</h1>
            <Collapse
              accordion
              items={visi(stylePanel)}
              bordered={false}
              style={{
                background: token.colorBgContainer,
              }}
            />
          </div>
          <div className="lg:flex flex-col justify-around p-4 lg:w-4/12  lg:absolute lg:top-0 lg:right-36">
            <h1 className="text-center font-semibold text-3xl pb-2 ">MISI</h1>
            <Collapse
              accordion
              items={misi(stylePanel)}
              bordered={false}
              style={{}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
