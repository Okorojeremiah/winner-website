import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
      <div className="max-w-screen min-w-screen bg-cover bg-[url('/assets/rectangle1.jpeg')]">

        <div className="flex flex-col text-white justify-center items-center h-screen">
           <p className="text-2xl md:text-4xl font-medium ">Welcome to</p>
           <p className="text-2xl sm:text-3xl md:text-6xl font-medium">FAITH TABERNACLE</p>
           <p className="text-3xl md:text-6xl font-extrabold">ICT GROUP</p>

           <div className="bg-red-500 text-white text-2xl text-semibold border border-[#939393] border-4 rounded-2xl py-2.5 px-5 mt-8">
              JOIN US TODAY
           </div>
        </div>
      </div>
  );
}
