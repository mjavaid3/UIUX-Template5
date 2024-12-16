export function EditorsPick() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">EDITOR&apos;S PICK</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_0.8fr] gap-4">
        {/* Men's section - larger width */}
        <div className="relative group">
          <img
            src="/mediabg-cover.png"
            alt="Men's Fashion"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2">
            <span className="font-semibold">MEN</span>
          </div>
        </div>

        {/* Women's section - medium width */}
        <div className="relative group">
          <img
            src="/card-item2.png"
            alt="Women's Fashion"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white px-6 py-2">
            <span className="font-semibold">WOMEN</span>
          </div>
        </div>

        {/* Right column with Accessories and Kids */}
        <div className="grid grid-rows-2 gap-4">
          {/* Accessories section */}
          <div className="relative group">
            <img
              src="/card-item1.png"
              alt="Accessories"
              className="w-full h-[290px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2">
              <span className="font-semibold">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids section */}
          <div className="relative group">
            <img
              src="/card-item.png"
              alt="Kids Fashion"
              className="w-full h-[290px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-2">
              <span className="font-semibold">KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
