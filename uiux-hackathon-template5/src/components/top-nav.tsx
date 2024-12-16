import { FaPhoneAlt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from "next/link"

export function TopNav() {
  return (
    <main className="bg-[#23242A] w-full h-[58px] flex items-center justify-center relative">
            <div className="container mx-auto flex justify-between items-center text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt color="white" />
                        <h6 className="text-white text-xs sm:text-sm">(225) 555-0118</h6>
                        <BsEnvelope color="white" />
                        <h6 className="text-white text-xs sm:text-sm ">michelle.rivera@example.com</h6>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h6 className="text-white text-xs sm:text-sm "><strong>Follow Us  and get a chance to win 80% off</strong></h6>
                </div>
                <div className="flex items-center gap-4 ml-4">
                    <h6 className="text-white text-xs sm:text-sm "><strong>Follow Us  :</strong></h6>
                    <Link href="#" className="hover:text-primary">
                        <FaInstagramSquare color="white"  className="h-4 w-4 "/>
                    </Link>
                    <Link href="#" className="hover:text-primary">
                        <FaFacebook  color="white" className="h-4 w-4"/>
                    </Link>
                    <Link href="#" className="hover:text-primary">
                        <FaYoutube color="white" className="h-4 w-4"/>
                    </Link>
                    <Link href="#" className="hover:text-primary">
                        <FaSquareTwitter color="white" className="h-4 w-4"/>
                    </Link>
                </div>
            </div>

        </main>
  )
}

