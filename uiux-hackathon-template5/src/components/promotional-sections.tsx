import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PromotionalSections() {
  return (
    <section className="container px-4 py-16 grid md:grid-cols-2 gap-8 w-[80vw] mx-auto">
      <div className="bg-[#23856D] rounded-lg overflow-hidden relative min-h-[500px] flex items-center">
        <div className="relative z-10 p-8 text-white max-w-md">
          <span className="text-sm">SUMMER 2020</span>
          <h2 className="text-4xl font-bold mt-4 mb-4">Vita Classic Product</h2>
          <p className="mb-4">
            We know how large objects will act, We know how are objects will
            act, We know
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">$16.48</span>
            <Button variant="secondary" size="lg">
              ADD TO CART
            </Button>
          </div>
        </div>
        <Image
          src="/placeholder.svg"
          alt="Vita Classic Product"
          fill
          className="object-cover object-center absolute inset-0"
          priority
        />
      </div>
      <div className="grid gap-8">
        <div className="bg-[#23856D] rounded-lg overflow-hidden relative min-h-[500px] flex items-center">
          <Image
            src="/placeholder.svg"
            alt="Neural Universe"
            fill
            className="object-cover object-center absolute inset-0"
          />
        </div>
        <div className="bg-white rounded-lg p-8 border">
          <span className="text-sm text-gray-500">SUMMER 2020</span>
          <h2 className="text-2xl font-bold mt-4 mb-4">
            Part of the Neural Universe
          </h2>
          <p className="text-gray-500 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-4">
            <Button>BUY NOW</Button>
            <Button variant="outline">READ MORE</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
