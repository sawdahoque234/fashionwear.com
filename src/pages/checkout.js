import Link from "next/link";
import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Checkout = ({ cart, addToCart, removeFromCart, subTotal, clearCart }) => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-600 ">
              1.Delivery Details
            </h1>
          </div>
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-1 w-1/2">
                <div>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className=" w-full">
                <div>
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone{" "}
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    CIty
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-1 w-1/2">
                <div>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Pin Code
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container px-5  mx-auto ">
        <div className="flex flex-col text-center w-full mb-2 ">
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-gray-600 ">
            2.Review Product
          </h1>
        </div>
        <div className="lg:w-1/2 mx-auto py-5 px-12 bg-gray-100">
          <ol>
            {Object.keys(cart).length == 0 && <div>Your Cart is Empty!</div>}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex ,y-5">
                    <div className="w-2/3 font-semibold text-xl text-pink-700  py-2">
                      {cart[k].name}
                    </div>
                    <div className="flex font-semibold items-center justify-center w-1/3">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="text-3xl  mx-2 cursor-pointer text-pink-600"
                      />
                      {cart[k].qty}
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="text-3xl mx-2 cursor-pointer text-pink-600"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="pt-10 text-center font-semibold text-xl">
            Subtotal:{subTotal ? subTotal : 0}
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto  flex justify-center">
          <div className="flex mt-6 ">
            <button
              onClick={clearCart}
              className="  text-white bg-pink-700 border-0 py-3 px-3 mx-4 focus:outline-none hover:bg-pink-600 rounded text-sm"
            >
              Clear Cart
            </button>
            <Link href={"/order"}>
              <button className="   text-white  bg-pink-700 border-0 py-3 px-4 focus:outline-none hover:bg-pink-600 rounded text-sm">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
