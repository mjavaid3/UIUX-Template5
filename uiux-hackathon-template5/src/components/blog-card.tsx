import { CalendarDays, MessageSquare } from 'lucide-react'
import Link from "next/link"

interface BlogCardProps {
  image: string
  category: string
  title: string
  description: string
  date: string
  comments: number
  isNew?: boolean
}

export function BlogCard({ image, category, title, description, date, comments, isNew }: BlogCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        {isNew && (
          <span className="absolute top-4 left-4 bg-[#E74040] text-white px-2 py-1 text-sm font-bold">NEW</span>
        )}
        <img src={image} alt={title} className="w-full aspect-video object-cover" />
      </div>
      <div className="p-4">
        <div className="flex gap-2 text-sm text-[#737373] mb-4">
          {category.split(" ").map((cat) => (
            <Link key={cat} href="#" className="hover:text-[#23A6F0]">
              {cat}
            </Link>
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-[#737373] mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-[#737373]">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#737373]">
            <MessageSquare className="h-4 w-4" />
            <span>{comments} comments</span>
          </div>
        </div>
        <Link href="#" className="inline-flex items-center text-sm font-bold text-[#737373] mt-4 hover:text-[#23A6F0]">
          Learn More
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

