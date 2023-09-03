import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from 'recharts';
import { dataPenduduk } from '../data/dataPenduduk';

const DataPenduduk = () => {
  const [totalData, setTotalData] = useState([
    {
      'laki-laki': 0,
      perempuan: 0,
      'tidak diketahui': 0,
    },
  ]);

  useEffect(() => {
    const initialData = {
      'laki-laki': 0,
      perempuan: 0,
      'tidak diketahui': 0,
    };
    const newTotalData = dataPenduduk.reduce((acc, data) => {
      return {
        'laki-laki': acc['laki-laki'] + data['laki-laki'],
        perempuan: acc['perempuan'] + data['perempuan'],
        'tidak diketahui': acc['tidak diketahui'] + data['tidak diketahui'],
      };
    }, initialData);
    setTotalData(newTotalData);
  }, [dataPenduduk]);

  const COLORS = ['#eb4034', '#e0d01b', '#34a8eb'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const isMobile = window.innerWidth < 480;

  return (
    <div className="w-10/12 mx-auto mb-20" id="data-desa">
      <h1 className="text-center font-bold uppercase py-5 text-2xl">
        Data Penduduk
      </h1>
      <div className="lg:flex lg:flex-row flex-col justify-center  items-center w-10/12 mx-auto ">
        <ResponsiveContainer width={'100%'} height={isMobile ? 300 : 500}>
          <BarChart
            width={'100%'}
            height={isMobile ? 200 : 300}
            data={dataPenduduk}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="laki-laki" fill="#eb4034" />
            <Bar dataKey="perempuan" fill="#e0d01b" />
            <Bar dataKey="tidak diketahui" fill="#34a8eb" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={isMobile ? 250 : 500}>
          <PieChart width={'100%'} height={isMobile ? 200 : 500}>
            <Pie
              data={Object.entries(totalData).map(([key, value]) => ({
                name: key,
                value,
              }))}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={isMobile ? 100 : 200}
              fill="#8884d8"
              dataKey="value" // Use "value" as the dataKey
            >
              {Object.keys(totalData).map((key, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataPenduduk;
