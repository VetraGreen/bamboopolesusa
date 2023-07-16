import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <div className="text-black bg-[#bcf729] text-xl">
            <div className="flex justify-between">
                <div className="flex justify-left items-center p-2 ml-20 flex-row">
                    {/* <Image src="/assets/logo.png" alt="logo" height={200} width={200} /> */}
                    <span className="text-4xl">V</span>etra Green Technologies
                </div>
                <div className="flex justify-center items-center flex-row p-6">
                    <div className="mx-10 underlineEffect">
                        <Link href="/">Home</Link>
                    </div>
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
        </div>
    )
  }