import React, { useRef } from "react";
import Link from "next/link";
import {
  AiFillShopping,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <header>
        <div className="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-pink-700 font-mono">
              Fashion.com
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center font-mono cursor-pointer">
            <Link href={"/cloths"}>
              <a className="mr-5 hover:text-indigo-700 font-bold ">Cloths</a>
            </Link>
            <Link href={"/hoodies"}>
              <a className="mr-5 hover:text-indigo-700 font-bold">Hoodies</a>
            </Link>
            <Link href={"/shoes"}>
              <a className="mr-5 hover:text-indigo-700 font-bold">Shoes</a>
            </Link>
            <Link href={"/watch"}>
              <a className="mr-5 hover:text-indigo-700 font-bold">Watch</a>
            </Link>
            <Link href={"/jewellery"}>
              <a className="mr-5 hover:text-indigo-700 font-bold">Jewellery</a>
            </Link>
          </nav>
          <span
            onClick={toggleCart}
            className="cart cursor-pointer inline-flex items-center text-pink-700 border-0 py-1 px-3 focus:outline-none  rounded text-2xl mt-4 md:mt-0"
          >
            <AiFillShopping />
          </span>
        </div>
        <div
          ref={ref}
          className="sideCart absolute w-72 top-0 right-0 bg-pink-200 px-8 py-8 transform transition-transform translate-x-full z-10"
        >
          <h2 className="font-bold py-2">Shopping cart</h2>
          <span
            className="top-4 right-2 absolute text-2xl cursor-pointer text-red-600"
            onClick={toggleCart}
          >
            {" "}
            <AiFillCloseCircle />
          </span>
          <ol>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex ,y-5">
                <div className="w-2/3 font-semibold">1.Summer T-shit</div>
                <div className="flex font-semibold items-center justify-center w-1/3">
                  <AiFillMinusCircle className="text-3xl  mx-2 cursor-pointer text-green-600" />
                  1
                  <AiFillPlusCircle className="text-3xl mx-2 cursor-pointer text-green-600" />
                </div>
              </div>
            </li>
          </ol>
          <div className="flex mt-6 ">
            <button className="   text-white mx-2 bg-pink-700 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-sm">
              Checkout
            </button>
            <button className="  text-white bg-pink-700 border-0 py-2 px-4 mx-4 focus:outline-none hover:bg-green-600 rounded text-sm">
              Clear All
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
