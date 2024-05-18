'use client'

import { useState } from 'react';
import Link from 'next/link';

const AseanModal = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button 
      title='prediksi'
        onClick={() => setOpenModal(true)} 
        className="fixed left-5 top-1/2 transform -translate-y-1/2 bg-white border rounded-full border-black px-2 py-2 z-[9999] opacity-50 hover:opacity-100 transition-opacity duration-300"
      >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 items-center inline-block mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>
      {openModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
          onClick={() => setOpenModal(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 w-96 max-w-full z-[9999]"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside modal
          >
            <h2 className="text-lg font-semibold mb-4">ASEAN Countries</h2>
            <p className="text-base leading-relaxed text-gray-500 mb-6">
              Select a country to visit its page:
            </p>
            <div className="space-y-2">
              <Link href="/PrediksiInflasi/Brunei">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Brunei
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Cambodia">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Cambodia
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Indonesia">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Indonesia
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Laos">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Laos
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Malaysia">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Malaysia
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Myanmar">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Myanmar
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Philippines">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Philippines
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Singapore">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Singapore
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Thailand">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Thailand
                </button>
              </Link>
              <Link href="/PrediksiInflasi/Vietnam">
                <button className="block w-full bg-white border border-black py-2 text-left px-4 rounded-md hover:bg-gray-100">
                  Vietnam
                </button>
              </Link>
            </div>
            <div className="flex justify-end mt-4">
              <button 
                onClick={() => setOpenModal(false)} 
                className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AseanModal;
