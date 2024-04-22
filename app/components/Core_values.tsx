import Image from "next/image";
import Navbar from "./Navbar";

export default function Core_values() {
  return (
      <div className="bg-white pb-10">
        <div className="text-3xl font-medium text-center">
            Our Core Values
        </div>

        <div className="flex flex-col xl:flex-row mt-4 bg-[#E8E8E8] rounded-2xl max-w-screen py-8 mx-10">
            <div className="bg-white mx-2 xl:mr-24 xl:ml-8 px-2 py-4 rounded-2xl">
                <h3 className="text-3xl font-medium">Sacrifice</h3>
                <p className="mt-2 text-xl font-medium">Sacrifice is another Core Value we hold. It takes sacrifice
                 and selflessness to really serve GOD wholeheartedly.</p>
            </div>

            <div className="bg-white mx-2 mt-4 rounded-2xl xl:mr-24 px-2 py-4">
                <h3 className="text-3xl font-medium">Diligence</h3>
                <p  className="mt-2 text-xl font-medium">Hard work always pays. In Winners’ Chapel ICT Group, there is no room for laziness. Diligence in one of our core values.</p>
            </div>

            <div className="bg-white mx-2 mt-4 xl:mr-24 rounded-2xl py-4 px-2">
                <h3 className="text-3xl font-medium">Spirituality</h3>
                <p className="mt-2 text-xl font-medium">One of our core values is spirituality. In order to serve GOD and get rewarded, you have to be  spiritually minded.</p>
            </div>

            <div className="bg-white mx-2 mt-4 xl:mr-8  rounded-2xl  px-2 py-4">
                <h3 className="text-3xl font-medium">Creativity</h3>
                <p className="mt-2 text-xl font-medium">SCreativity is one of our core values. We are creative in all we do.</p>
            </div>

        </div>
      </div>
  );
}
