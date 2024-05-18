"use client";

import React from "react";
import { GridItemProps, Tooltips } from "@/components/lib/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {  malaysia } from "@/constants/index";
import { motion } from "framer-motion";

function GridItem({ title, children }: GridItemProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-300 bg-white rounded-xl h-[400px] w-full">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: Tooltips) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white border border-gray-300 flex flex-col gap-4 rounded-md shadow-lg font-semibold">
        <p className="text-medium text-lg text-gray-900">{label}</p>
        <p className="text-sm text-green-500">
          Malaysia:
          <span className="ml-2">{payload[0].value}%</span>
        </p>
        <p className="text-sm text-blue-500">
          Asean:
          <span className="ml-2">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const Malaysia = () => {
  return (
    <div className="container w-full min-h-screen flex flex-col justify-center items-center py-6 px-8 font-semibold">
        <div className="container flex justify-center items-center my-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-row gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-semibold"
            >
              PREDIKSI <span className="font-bold">INFLASI </span><span className="font-bold text-[#1dbbb4]"> 2025</span>
            </motion.span>

          </h1>
        </div>
      <GridItem title="Negara Malaysia">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={malaysia}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Malaysia"
              stroke="#1dbbb4"
              strokeWidth={2.5}
            />
            <Line
              type="monotone"
              dataKey="Asean"
              stroke="#3b82f6"
              strokeWidth={2.5}
            />
          </LineChart>
        </ResponsiveContainer>
      </GridItem>
    </div>
  );
};

export default Malaysia;
