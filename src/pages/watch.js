/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Watch = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-6 py-24 mx-auto ">
          <div className="flex flex-wrap justify-center  ">
            <Link href={"/product/watchdetails"} legacyBehavior>
              <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5  cursor-pointer">
                <img
                  alt="ecommerce"
                  className="m-auto md:mx-auto md:h-[36vh4 h-[30vh] block"
                  src="https://m.media-amazon.com/images/I/51mf69MGwHL._UX425_.jpg"
                />
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Watch
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Pink Watch
                  </h2>
                  <p className="mt-1">$300</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Watch;
