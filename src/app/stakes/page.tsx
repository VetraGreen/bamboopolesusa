import Navbar from "../../components/navbar";
import Stakes from "../../components/stakes";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <hr className="h-6"/>
      <div className="p-12 flex justify-center text-5xl">
        Natural Bamboo Stakes 
      </div>
      <Stakes />
      <Footer />
    </div>
  )
}