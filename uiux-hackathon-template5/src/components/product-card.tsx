interface ProductCardProps {
  title: string
  department: string
  originalPrice: number
  salePrice: number
  image: string
  colors: string[]
}

export function ProductCard({ title, department, originalPrice, salePrice, image, colors }: ProductCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[3/4] mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-base font-bold text-center mb-2">{title}</h3>
      <p className="text-sm text-gray-500 text-center mb-2">{department}</p>
      <div className="flex justify-center gap-2 mb-4">
        <span className="text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
        <span className="text-[#23856D]">${salePrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-center gap-2">
        {colors.map((color, index) => (
          <div key={index} className={`w-4 h-4 rounded-full ${color}`} />
        ))}
      </div>
    </div>
  )
}

