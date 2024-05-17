/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { itemShow } from '@/components/lib/animate'
import { Carousel } from 'flowbite-react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


const About = () => {
  return (
    <section id="about" className='relative'>
      <div className='z-10'>
        <div className="absolute top-[10%] -right-[400px] w-[600px] h-1/2 aspect-video bg-colorfull-blue blur-[250px]" />
        <div className="absolute bottom-[10%] left-[-100px] h-[80%] w-[300px] aspect-video bg-colorfull-blue blur-[250px]" />
      </div>
      <div className='flex flex-wrap justify-evenly -mt-[10rem] container mx-auto h-auto'>
        {/* <div className='flex items-center justify-center w-[250px] sm:w-[500px] md:w-1/4 lg:w-1/4 h-[650px] rounded-md sm:mt-[200px]'>
          <Carousel slideInterval={5000} >
            <img
              alt="..."
              src="https://i.postimg.cc/rwJ0C3V6/Whats-App-Image-2024-05-12-at-07-37-03.jpg"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.postimg.cc/YqVmCZrM/Whats-App-Image-2024-05-12-at-07-37-03-1.jpg"
              className='object-contain rounded-md'
            />
            <img
              alt="..."
              src="https://i.postimg.cc/s2d67BgH/Whats-App-Image-2024-05-12-at-07-37-01-3.jpg"
              className='object-contain rounded-md'
            />
          </Carousel>
        </div> */}
      
        <div className="px-4 py-4 sm:py-20 z-50">
          <div className="sm:container overflow-x-hidden">
            <h1 className="ml-2 sm:ml-0 text-xl sm:text-3xl md:text-5xl uppercase flex flex-col lg:max-h-[40px] lg:gap-2 lg:mt-[130px]">
            <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='font-semibold'
              >
                Introducing
              </motion.span>
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About <span className='font-bold text-blue-500'>FutureFlow ASEAN</span>
              </motion.span>
            </h1>
            <div
              className="max-w-[800px] mx-auto p-6 sm:px-8 sm:py-12 rounded-md bg-white border border-gray-600 mt-4 md:[90px] lg:mt-[120px]"
            >
              <h1 className="text-xl sm:text-2xl tracking-widest uppercase font-bold">Prediksi Inflasi 2025</h1>
              <p className="sm:text-lg max-w-2xl mt-4 mb-6 text-left sm:text-justify">
                <span className="text-colorfull-blue font-semibold">INFLASI </span> menjadi tantangan signifikan bagi stabilitas ekonomi ASEAN. Untuk mengatasi hal ini, proyek kami menggunakan <span className="text-blue-500 font-semibold"> metode Secant dan interpolasi bertujuan untuk memprediksi inflasi 2025.  </span>Pendekatan ini, yang memanfaatkan teknologi canggih dan data terkini, menawarkan prediksi akurat dan membantu pengelolaan serta antisipasi inflasi. Metode ini menggunakan nilai inflasi dari dua tahun terakhir sebagai dasar prediksi tahun 2025
              </p>
              <Disclosure>              
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Metode Secant</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Metode Secant digunakan untuk menemukan akar fungsi yang mewakili trend inflasi dari data historis. Dua perkiraan awal digunakan sebagai titik awal iterasi. Melalui iterasi berulang, metode Secant secara bertahap mendekati titik di mana garis yang ditarik antara dua titik perkiraan tersebut memotong sumbu x. Titik potong ini dianggap sebagai prediksi inflasi untuk tahun berikutnya. Dengan konvergensi cepat dan akurasi yang baik, metode Secant membantu dalam menghasilkan prediksi inflasi yang dapat diandalkan untuk analisis ekonomi yang lebih mendalam.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 mb-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Penerapan Secant</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Dalam prediksi inflasi 2025, metode Secant digunakan untuk menghasilkan perkiraan yang akurat. Dengan memasukkan data inflasi terbaru, metode ini diiterasikan secara iteratif untuk mendapatkan prediksi yang andal. Pendekatan ini memberikan keunggulan dalam konvergensi cepat dan akurasi tinggi, memungkinkan pengambilan keputusan yang lebih baik dalam mengelola dampak inflasi di masa depan.

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>              
                {({open}) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-base font-medium text-gray-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>Interpolasi </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                    Nilai dapat diperkirakan di antara data - data yang diketahui melalui metode matematika yang dikenal sebagai interpolasi. Dalam prediksi inflasi, interpolasi membantu mengisi data kosong yang mungkin terjadi karena kurangnya informasi atau ketidakpastian saat mengumpulkan data. Dengan data yang lebih lengkap, analisis inflasi dapat menjadi lebih akurat dan informatif, sehingga membantu pengambilan keputusan yang lebih baik dalam kebijakan ekonomi dan perencanaan bisnis.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
