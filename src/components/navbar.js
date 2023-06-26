import Link from "next/link"
export default function Navbar() {
    return (
        <div className="text-black bg-[#bcf729] text-xl">
            {/* <div className="flex justify-left flex-row">
                Vetra Green
            </div> */}
            <div className="flex justify-center flex-row p-6">
                {/* <div className="mx-10 underlineEffect">
                    <Link href="/">About Us</Link>
                </div> */}
                <div className="mx-10 dropdown cursor-pointer">
                    <div className="dropdown">Poles & Gaffs</div>
                    <div className="dropdown-content">
                        <Link href="/polegaffs" className="dropdown-item">Calcutta Bamboo Poles + Gaffs</Link>
                        <Link href="/bbamboo" className="dropdown-item">Black Bamboo Poles</Link>
                    </div>
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