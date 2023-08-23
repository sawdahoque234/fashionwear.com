import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-slate-50">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-xl font-mono text-pink-700">
                  Fashion.com
                </span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Online Shopping BD has never been easier. Fashion.com.bd is best
              online shopping store in Bangladesh that features 10+ million
              products at affordable prices. As bangaldesh online shopping
              landscape is expanding every year, Fashion is among best websites
              for online shopping in bangladesh
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <Link href={"/cloths"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      Cloths
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/hoodies"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      Hoodies
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/shoes"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      Shoes
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/watch"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      Watch
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/jewellery"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      Jewellery
                    </span>
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Beauty
                  </span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Connect with Us
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Facebook
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Twitter
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Instagram
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Whatsapp
                  </span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Get to know
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <Link href={"/about"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      About us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"}>
                    <span className="text-gray-600 hover:text-gray-800">
                      Contact us
                    </span>
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Careers
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Services
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Blog
                  </span>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Let us help u
              </h2>
              <nav className="list-none mb-10 cursor-pointer">
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Your Account
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Returns Centre
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Help Now
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    100% Purchase Protection
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-gray-800">
                    Terms and privecy
                  </span>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 All right reserved
              <span
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @fashion.com
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
