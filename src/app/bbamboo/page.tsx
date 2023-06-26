import Navbar from "../../components/navbar";
import BBamboo from "../../components/bbamboo";
import Footer from "../../components/footer";

export default function bbamboo() {
  return (
    <div>
      <Navbar />
      <hr className="h-6"/>
      <div className="p-12 flex justify-center text-5xl">
        Black Bamboo Poles
      </div>
      <BBamboo />
      <Footer />
    </div>
  )
}