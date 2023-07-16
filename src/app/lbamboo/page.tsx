import Navbar from "../../components/navbar";
import LBamboo from "../../components/lbamboo";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr className="h-6"/>
      <div className="p-12 flex justify-center text-2xl">
        Large Diameter Bamboo
      </div>
      <LBamboo />
      <Footer />
    </div>
  )
}