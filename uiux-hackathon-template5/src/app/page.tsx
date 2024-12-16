import { BlogCard } from "@/components/blog-card";
import { EditorsPick } from "@/components/editors-pick";
import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { ProductCard } from "@/components/product-card";
import { TopNav } from "@/components/top-nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <MainNav />
      <section className="relative h-[600px] bg-[#01B5DA] w-[80vw] mx-auto px-32 overflow-hidden">
        <div className="h-full flex items-center relative z-10">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">NEW COLLECTION</h1>
            <p className="mb-6">
              We know how large objects will act, but things on a small scale
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-[#2DBF71] text-white font-bold"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
        <img
          src="/card-cover-6-1-removebg-preview.png"
          alt="Hero image"
          className="absolute h-[100%]  right-40 top-0 object-contain z-0"
        />
      </section>

      <EditorsPick />

      <section className="py-16 bg-gray-50 w-[80vw] mx-auto">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-2">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCard
                key={i}
                title="Graphic Design"
                department="English Department"
                originalPrice={16.48}
                salePrice={6.48}
                image="/card-cover-8.jpg"
                colors={[
                  "bg-blue-500",
                  "bg-cyan-500",
                  "bg-orange-500",
                  "bg-black",
                ]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white p-16 w-[80vw] mx-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-6xl font-bold mb-4">Vila Classic Product</h2>
              <p className="mb-6">
                We know how large objects will act and then yes
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-[#2DBF71] text-white font-bold"
              >
                ADD TO CART
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/col-md-6.png"
                alt="Vila Classic Product"
                width={500}
                height={500}
                className="w-full h-[685px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 w-[60vw] mx-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-32">
            <Image
              src="/hero-cover-1.png"
              alt="Neural Universe"
              width={500}
              height={500}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Part of the Neural Universe
              </h2>
              <p className="mb-6">Join us in exploring the future of fashion</p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-[#2DBF71] text-white font-bold"
                >
                  SHOP NOW
                </Button>
                <Button size="lg" variant="outline">
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white w-[80vw] mx-auto">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-center mb-2">
            Featured Posts
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Problems trying to resolve the conflict between
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <BlogCard
                key={i}
                image="/fixed-height.png"
                category="Google Trending New"
                title="Loudest à la Madison #1 (L'integral)"
                description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
                date="22 April 2021"
                comments={10}
                isNew={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
