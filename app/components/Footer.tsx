import Image from "next/image";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-black">
        <Image
            src="/assets/logo.png"
            className='w-[60px] h-[60px] ml-10 mt-10'
            width={60}
            height={60}
            alt="logo"
        />

        <div className="text-white xl:ml-28 ml-10 mt-10">
           <p className="font-extrabold text-2xl">Contact Us</p>
           <p className="text-base font-medium mt-10">Phone: +2348035693820</p>
           <p className="text-base font-medium mt-10">Email: contact@lfcictgroup.com</p>
           <p className="text-base  font-medium mt-10">Location Address : KM, 10, Idiroko Road,</p>
            <p className="text-base  font-medium"> Canaanland ota, ogun state, nigeria.</p>
        </div>

        <div className="text-white mt-10 xl:ml-64 ml-10 mb-10">
           <p className="font-extrabold text-2xl">Works/activities</p>
           <p className="text-base font-medium mt-10">Software</p>
           <p className="text-base font-medium mt-10">hardware</p>
           <p className="text-base font-medium mt-10">latest news</p>
           <p className="text-base font-medium mt-10">photo gallery</p>
           <p className="text-base font-medium mt-10">livestream</p>
        </div>
      </div>

      <div className="bg-[#E01515] pt-6 text-white text-center h-[74px]">
         Copyright © 2022. All right reserved
      </div>

      <div className="bg-[#E01515] pt-6 text-white text-center h-[74px]">
         Powered By: Okoro Jeremiah ICTG_Test
      </div>
    </div>
  );
}
