import Link from "next/link"
export default function Navbar() {
    return (
        <div className="text-black bg-[#bcf729] text-xl">
            {/* <div className="flex justify-left flex-row">
                Vetra Green
            </div> */}
            <div className="flex justify-center flex-row p-6">
                <div className="mx-10 underlineEffect">
                    <Link href="/">About Us</Link>
                </div>
                <div className="mx-10 underlineEffect">
                    <Link href="/polegaffs">Poles & Gaffs</Link>
                </div>
                <div className="mx-10 underlineEffect">
                    <Link href="/stakes">Stakes</Link>
                </div>
                <div className="mx-10 underlineEffect">
                    <Link href="/lbamboo">Large Bamboo</Link>
                </div>
            </div>
        </div>
    )
  }