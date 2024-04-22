import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeautureList from "./components/Features";
import Dedication from "./components/Dedication";
import Gospel_messages from "./components/Gospel_messages";
import Core_values from "./components/Core_values";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar/>
      <Hero/>
      <FeautureList/>
      <Dedication/>
      <Gospel_messages/>
      <Core_values/>
      <Footer/>
    </main>
  );
}
