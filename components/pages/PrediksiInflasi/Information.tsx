"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";

const Information = () => {
  const [showMore, setShowMore] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);

  // Fungsi untuk mengubah status showMore pada indeks tertentu
  const toggleShowMore = (index: number) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };
  return (
    <section id="watermarking">
      <div className="relative flex flex-col w-full px-4 sm:px-10 xl:container justify-center items-center my-20">
        <div className="container flex justify-center items-center mb-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-col gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-semibold"
            >
              Our Dataset
            </motion.span>
            <div className="">
              <motion.span
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="font-bold text-[#1dbbb4]">The World Bank</span>
              </motion.span>
            </div>
          </h1>
        </div>
        <Card className="h-full ">
        <p className="w-full text-justify text-2xl mt-4 px-8">
          Untuk menyediakan data yang akurat dan terpercaya mengenai inflasi di
          negara-negara ASEAN, kami menggunakan dataset yang diperoleh dari The
          World Bank. The World Bank adalah lembaga keuangan internasional yang
          menyediakan berbagai data ekonomi dan statistik penting yang digunakan
          oleh peneliti, pembuat kebijakan, dan analis di seluruh dunia. Dataset
          ini mencakup berbagai indikator ekonomi termasuk tingkat inflasi, yang
          diukur dan dilaporkan secara konsisten di semua negara anggota ASEAN.
          Dengan menggunakan data dari The World Bank, kami memastikan bahwa
          informasi yang disajikan di situs web ini berdasarkan sumber yang
          kredibel dan diperbarui secara berkala, sehingga pengguna dapat
          mengandalkan data ini untuk analisis dan pengambilan keputusan yang
          lebih baik.
        </p>
        </Card>


        {/* <div className="container mx-auto relative w-full h-full">
          <div className="flex flex-col justify-center items-center w-full h- py-20">
            <div className="flex justify-around flex-col md:flex-row flex-wrap items-center gap-[50px] h-full">
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className={`m-6 sm:m-0 max-w-[500px] max-h-full z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${
                    showMore[index] ? "h-full" : ""
                  }`}
                >
                  <Card className="h-full">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>
                        {index === 0
                          ? "The World Bank "
                          : "Embedding dan Extraction Watermark"}
                      </p>
                    </h5>
                    <p
                      className={`font-normal text-gray-700 dark:text-gray-400 ${
                        showMore[index] ? "" : "line-clamp-3 lg:line-clamp-5"
                      }`}
                    >
                      {index === 0
                        ? "."
                        : "Watermark disematkan ke dalam gambar dengan memanipulasi sebagian koefisien DCT. Proses ini dirancang untuk tidak secara signifikan mempengaruhi kualitas visual gambar. Saat gambar dengan watermark disimpan atau disebarkan, proses ekstraksi watermark dilakukan dengan menggunakan kembali DCT. Dari sini, informasi watermark dapat dipulihkan, memungkinkan identifikasi dan verifikasi keaslian gambar."}
                    </p>
                    <button
                      type="button"
                      onClick={() => toggleShowMore(index)}
                      className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-[#1dbbb4] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2"
                    >
                      {showMore[index] ? "Show Less" : "Read More"}
                    </button>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <div className="hidden sm:block absolute -bottom-0 -right-20 z-[-1]">
          <div className="relative aspect-square w-[608px] h-[656px]">
            <Image
              src="/images/bg-vector-3-1.png"
              alt="bg-vector"
              fill={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
