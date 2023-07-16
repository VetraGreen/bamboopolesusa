import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
        <Navbar />
        <hr className=""/>
        <div className="flex justify-center items-center min-h-[80vh] text-xl flex-col">
          <div>
            We are Vetra Technologies. We have been deleloping bamboo long enough for it be an intrgral part of our lives.
          </div>
          <div>
          We have sound understanding of different types of bamboo utility wise .
          </div>
          <div>
          We have traditional sourcing methodologies to ensure ample supply.
          </div>
          <div>
          We have support system to cater to your personalized needs
          </div>
        </div>
        <Footer />
    </div>
  )
}