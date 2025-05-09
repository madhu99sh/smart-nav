import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-zinc-800 text-white px-6 md:px-16 py-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left  justify-between items-center ">
        
        {/* Follow Us */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          <p className="text-md">Follow Us</p>
          <Link href="https://linkedin.com" target="_blank" className="">
            <FaLinkedin size={24} />
          </Link>
        </div>

        {/* Get In Touch */}
        <div className="space-y-4 text-sm flex flex-col md:items-start items-center">
          <h4 className="font-bold uppercase text-white">Get in Touch</h4>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 900 SE 5th Street, Suite 22F, Bentonville AR 72712
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt /> +1 479 310 5053
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> Smartnav.ai
          </p>
        </div>

        {/* <div className="space-y-4 text-sm">
          <h4 className="font-bold uppercase text-white">GET IN TOUCH</h4>
          <ul className="space-y-1">
            <li> <p className="flex items-center gap-4">
              <FaMapMarkerAlt /> 900 SE 5th Street, Suite 22F, Bentonville AR 72712
            </p></li>
            <li><p className="flex items-center gap-4">
              <FaPhoneAlt /> +1 479 310 5053
            </p></li>
            <li><p className="flex items-center gap-4">
              <FaEnvelope /> Smartnav.ai
            </p></li>
          </ul>
        </div> */}

        {/* Navigation */}
        <div className="space-y-4 text-sm">
          <h4 className="font-bold uppercase text-white">Navigation</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-md text-white">
        ©2024 company.com
      </div>
    </footer>
  );
}
