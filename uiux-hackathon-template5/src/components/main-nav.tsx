"use client"

import { Heart, Menu, Search, ShoppingCart } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  return (
    <div className="border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold">
          Bandage
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-medium">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
          <Link href="/pages" className="text-sm font-medium">
            Pages
          </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4 text-[#23A6F0]">
          <Link href="/login" className="text-sm font-medium flex items-center gap-1">
            Login
          </Link>
          <span>/</span>
          <Link href="/register" className="text-sm font-medium flex items-center gap-1">
            Register
          </Link>
          <div className="flex items-center gap-4 ml-4">
            <button aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="flex items-center gap-1">
              <ShoppingCart className="h-5 w-5" />
              <span>1</span>
            </button>
            <button aria-label="Wishlist" className="flex items-center gap-1">
              <Heart className="h-5 w-5" />
              <span>1</span>
            </button>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-lg font-medium">
                Shop
              </Link>
              <Link href="/about" className="text-lg font-medium">
                About
              </Link>
              <Link href="/blog" className="text-lg font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-lg font-medium">
                Contact
              </Link>
              <Link href="/pages" className="text-lg font-medium">
                Pages
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Link href="/login" className="text-[#23A6F0]">
                  Login
                </Link>
                <Link href="/register" className="text-[#23A6F0]">
                  Register
                </Link>
              </div>
              <div className="flex gap-4 pt-4 border-t">
                <button aria-label="Search">
                  <Search className="h-5 w-5" />
                </button>
                <button aria-label="Cart" className="flex items-center gap-1">
                  <ShoppingCart className="h-5 w-5" />
                  <span>1</span>
                </button>
                <button aria-label="Wishlist" className="flex items-center gap-1">
                  <Heart className="h-5 w-5" />
                  <span>1</span>
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

