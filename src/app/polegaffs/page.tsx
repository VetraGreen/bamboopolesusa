import Image from 'next/image'
import Navbar from "../../components/navbar";
import PoleGaffs from "../../components/polegaffs";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr className="h-6"/>
      <div className="p-12 flex justify-center text-5xl">
        Calcutta Bamboo Poles & Gaffs
      </div>
      <PoleGaffs />
      <Footer />
    </div>
  )
}