/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";

const Post = ({ addToCart }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [services, setServices] = useState();
  const checkServiceCode = async () => {
    let pins = await fetch("http://localhost:3000/api/pinCode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setServices(true);
    } else {
      setServices(false);
    }
  };

  const onChangepin = (e) => {
    setPin(e.target.value);
    e.preventDefault();
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto px-24 mx-auto object-cover object-top rounded"
            src="https://m.media-amazon.com/images/I/51cZLR2Z+cL._UX679_.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>

            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $300.00
              </span>
              <button
                onClick={() => {
                  addToCart(slug, 1, 300, "Pink Shirt", "XL", "Red");
                }}
                className="flex mx-4 text-white bg-pink-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add to Cart
              </button>
            </div>
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
              <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Enter Your Code
                  </label>
                  <input
                    onChange={onChangepin}
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  onClick={checkServiceCode}
                  className="inline-flex text-white bg-pink-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Check
                </button>
              </div>

              {!services && services != null && (
                <div className="text-red-500 mt-5 ">
                  Sorry! Not avaiabe this pin Now!!
                </div>
              )}
              {services && services != null && (
                <div className="text-green-500 mt-5 font-bold ">
                  This Pin is avaiable !!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Post;
