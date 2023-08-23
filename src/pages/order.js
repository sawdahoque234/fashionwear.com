/* eslint-disable @next/next/no-img-element */
import React from "react";

const order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Fashonwear.com
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                order id: #99999
              </h1>
              <div className="flex mb-4  font-semibold py-2 text-lg">
                <a className="flex-grow px-1">Item Name</a>
                <a className="flex-grow  px-1">Quantiy</a>
                <a className="flex-grow  px-1">Item Total</a>
              </div>

              <div className="flex border-t border-gray-200 py-2">
                <a className="flex-grow px-1">Round Neck T-shirts</a>
                <a className="flex-grow  px-1">1</a>
                <a className="flex-grow  px-1">200</a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <a className="flex-grow px-1">Round Neck T-shirts</a>
                <a className="flex-grow  px-1">1</a>
                <a className="flex-grow  px-1">200</a>
              </div>

              <div className="flex py-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  SubTotal: 58.00 Taka
                </span>
                <button className=" flex ml-auto text-white bg-pink-700 border-0 py-2 px-4 focus:outline-none  rounded">
                  Track order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/3 mx-auto object-cover object-center rounded"
              src="https://m.media-amazon.com/images/I/71hDlS2ylwL._UY500_.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default order;
