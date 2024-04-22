import Image from "next/image";
import Navbar from "./Navbar";

export default function Dedication() {
  return (
      <div className="bg-white p-8 md:p-16">

        <div className="flex flex-col lg:flex-row bg-[#E8E8E8] rounded-2xl max-w-[1340px] py-8 md:mx-auto">
            <div className=" mx-auto  lg:mx-8 xl:mx-24 w-[80%] lg:w-[50%] xl:w-[45%]">
                <h3 className="text-4xl font-medium text-center lg:text-start">Dedicated to Serving God</h3>
                <div className="text-sm font-medium text-center lg:text-start">
                    <p  className="mt-2 xl:mt-4">We’re committed to serving GOD and the interest of his kingdom</p>
                    <p className="mt-2 xl:mt-4">Are you a software engineer or a network satellite engineer willing to
                    serve God and the interest of his kingdom? Please submit your
                    application online.</p>

                    <p className="mt-2 xl:mt-4">Within the group, you will be able  to leverage on your core strengths
                    to serve the Lord in either the Hardware Sub-Group or Software
                    Sub-Group.</p>

                </div>   

                <button className="block bg-red-500 text-sm lg:text-2xl text-white text-2xl text-semibold border border-[#939393] border-4 rounded-2xl mt-8 xl:mt-10 mx-auto lg:mx-0 lg:mt-6 px-6 py-2">
                  Click Here to REGISTER
               </button> 
            </div>

             
            <div className="xl:mr-24 lg:mr-8 mt-8 lg:mt-0 mx-auto ">
             <Image src="/assets/frame13.jpg" alt="boy sitting" width={473} height={300} className="rounded-2xl h-[300px] lg:h-[350px]" />
            </div>
           
        </div>
      </div>
  );
}
