"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Modal, Card } from "flowbite-react";

const Service = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();

  // State untuk menentukan apakah Card sedang dalam mode "show more" atau "show less"
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
    <section id="services" className="container mx-auto relative w-full h-full">
      <div className="z-10">
        <div className="absolute top-[40%] left-[35%] w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
        <div className="absolute top-[40%] left-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
        <div className="absolute top-[40%] right-0 w-[200px] h-1/2 aspect-video bg-colorfull-purple blur-[250px]" />
      </div>
      <div className="flex flex-col justify-center items-center w-full h- py-20">
        <div className="container flex justify-center items-center mb-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl uppercase flex flex-col gap-y-2 text-center">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-semibold"
            >
              Our Algorithm
            </motion.span>
            <motion.span
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Is All YOU <span className="font-bold text-blue-500">NEED</span>
            </motion.span>
          </h1>
        </div>

        <div className="flex justify-around flex-col md:flex-row flex-wrap items-center gap-[50px] h-full">
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`m-6 sm:m-0 max-w-[400px] max-h-full z-[50] shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${
                showMore[index] ? "h-full" : ""
              }`}
            >
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/algorthm.png"
                className="h-full"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <p>
                    {index === 0
                      ? "One-step Secand"
                      : "Interpolasi"}
                  </p>
                </h5>
                <p
                  className={`font-normal text-gray-700 dark:text-gray-400 ${
                    showMore[index] ? "" : "line-clamp-3 lg:line-clamp-5"
                  }`}
                >
                  {index === 0
                    ? "Algoritma one-step Secant adalah metode numerik untuk mencari akar fungsi nonlinier. Berbeda dengan metode lain seperti Newton-Raphson yang membutuhkan turunan fungsi, algoritma ini menggunakan pendekatan dua titik awal yang mendekati akar. Proses dimulai dengan menentukan dua titik awal, kemudian evaluasi nilai fungsi di kedua titik tersebut. Dengan menggunakan rumus Secant, perkiraan akar baru dihitung dan proses diulangi hingga akar ditemukan atau konvergensi tercapai. Algoritma ini dipilih karena tidak memerlukan turunan fungsi, konvergen relatif cepat, dan efisien dalam komputasi."
                    : "Metode interpolasi digunakan untuk memperkirakan tingkat inflasi pada titik waktu yang belum ada datanya berdasarkan data historis yang tersedia. Proses ini dimulai dengan mengumpulkan data inflasi historis, kemudian menggunakan metode interpolasi seperti interpolasi linier atau spline untuk membangun model yang menghubungkan titik-titik data tersebut. Model interpolasi ini kemudian digunakan untuk memperkirakan tingkat inflasi pada titik waktu yang diinginkan dengan memasukkan waktu tersebut ke dalam model, sehingga menghasilkan estimasi inflasi yang akurat. Metode ini sangat berguna dalam analisis ekonomi dan perencanaan keuangan untuk membuat prediksi yang tepat mengenai inflasi di masa depan."}
                </p>
                <button
                  type="button"
                  onClick={() => toggleShowMore(index)}
                  className="place-self-end text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2"
                >
                  {showMore[index] ? "Show Less" : "Read More"}
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
