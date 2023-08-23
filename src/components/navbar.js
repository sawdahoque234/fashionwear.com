import React, { useRef } from "react";
import Link from "next/link";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
  AiFillMinusCircle,
} from "react-icons/ai";
const Navbar = ({ cart, addToCart, clearCart, removeFromCart, subTotal }) => {
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
    <div className=" mx-auto flex flex-wrap py-1 md:py-3 flex-col md:flex-row items-center shadow-md sticky top-0 bg-white z-10">
      <Link href={"/"}>
        <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl text-pink-700 font-mono">
            Fashion.com
          </span>
        </span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center font-mono cursor-pointer">
        <Link href={"/cloths"}>
          <span className="mr-5 hover:text-indigo-700 font-bold ">Cloths</span>
        </Link>
        <Link href={"/hoodies"}>
          <span className="mr-5 hover:text-indigo-700 font-bold">Hoodies</span>
        </Link>
        <Link href={"/shoes"}>
          <span className="mr-5 hover:text-indigo-700 font-bold">Shoes</span>
        </Link>
        <Link href={"/watch"}>
          <span className="mr-5 hover:text-indigo-700 font-bold">Watch</span>
        </Link>
        <Link href={"/jewellery"}>
          <span className="mr-5 hover:text-indigo-700 font-bold">
            Jewellery
          </span>
        </Link>
      </nav>
      <Link href="/login">
        <button className="lg:mt-0 mt-2  font-semibold text-white  bg-pink-700 border-0 py-2 px-3 focus:outline-none  rounded text-sm">
          Login
        </button>
      </Link>
      <span
        onClick={toggleCart}
        className="cart cursor-pointer inline-flex items-center text-pink-700 border-0 py-1 px-3 focus:outline-none  rounded text-2xl mt-4 md:mt-0"
      >
        <AiOutlineShoppingCart />
      </span>
      <div
        ref={ref}
        className={`sideCart absolute w-72 top-0 right-0 bg-pink-200 px-8 py-8 transform transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } z-10`}
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
          {Object.keys(cart).length == 0 && <div>Your Cart is Empty!</div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex y-5">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
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
                      className="text-3xl  mx-2 cursor-pointer text-green-600"
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
                      className="text-3xl mx-2 cursor-pointer text-green-600"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="my-2 font-mono font-bold">
          Subtotal:{subTotal ? subTotal : 0}Taka
        </div>
        <div className="flex mt-6 ">
          <Link href={"/checkout"}>
            <span>
              <button className="   text-white  bg-pink-700 border-0 py-2 px-4 focus:outline-none rounded text-sm">
                Checkout
              </button>
            </span>
          </Link>
          <button
            onClick={clearCart}
            className="  text-white bg-pink-700 border-0 py-2 px-3 mx-4 focus:outline-none0 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
