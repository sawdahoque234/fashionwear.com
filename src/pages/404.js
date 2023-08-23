/* eslint-disable @next/next/no-sync-scripts */
import Link from "next/link";
import React from "react";

const NofFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[60vh]">
        <div className="flex-col space-y-4 text-left px-6">
          <div className="text-7xl font-bold text-pink-700">404</div>
          <div className="text-stone-500 font-medium text-xl">
            Oops, Something went wrong!
          </div>
          <div className="flex space-x-4 items-center justify-start">
            <Link href="/">
              <div className="text-sm font-medium p-2 rounded-md text-white bg-pink-700">
                Back to Home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NofFound;
