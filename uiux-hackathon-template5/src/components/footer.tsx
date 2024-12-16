import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="py-16 w-[80vw] mx-auto">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="text-2xl font-bold">
            Bandage
          </Link>
          <div className="flex gap-4">
            <Link href="#" className="text-[#23A6F0] hover:text-[#23856D]">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#23A6F0] hover:text-[#23856D]">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#23A6F0] hover:text-[#23856D]">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  User Analytic
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  IOS & Android
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#737373] hover:text-[#23A6F0]">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get In Touch</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your Email" className="flex-1" />
              <Button className="bg-[#23A6F0] hover:bg-[#23856D]">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-[#737373] mt-2">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t">
          <p className="text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
