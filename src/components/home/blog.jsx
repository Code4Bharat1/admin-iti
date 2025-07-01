'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const blogPosts = [
  {
    image: '/home/blog1.png',
    date: 'Wednesday, April 10, 2024',
    title: 'Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity',
    name: 'blog1',
  },
  {
    image: '/home/blog2.png',
    date: 'Wednesday, April 10, 2024',
    title: 'Exploring the Craft of Refrigeration & Air Conditioning Technicians (RACT): Masters of Climate Control',
    name: 'blog2',
  },
  {
    image: '/home/blog3.png',
    date: 'Wednesday, April 10, 2024',
    title: 'Exploring the Role and Importance of Draughtsman Mechanical',
    name: 'blog3',
  },
];

export default function BlogSection() {
  const router = useRouter();

  const handleViewAll = () => {
    router.push('/courses/blog'); // Navigates to the blog listing page
  };

  const handlePostClick = (name) => {
    router.push(`/courses/blog/${name}`); // Navigates to the individual blog post page using name
  };

  return (
    <div className="bg-[#1A3161] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10">Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              onClick={() => handlePostClick(post.name)}
              className="cursor-pointer  bg-[#1A3161] rounded-md text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={post.image}
                alt="Blog"
                width={400}
                height={250}
                className="w-full h-[250px] object-cover"
              />
              <p className="bg-white text-black font-medium px-4 py-2 mt-4 inline-block ">
                {post.date}
              </p>
              <h3 className="text-lg mx-12 font-medium mt-3 px-2">{post.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button  
            onClick={handleViewAll}
            className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded"
          >
            View All
          </button>
        </div>
        
      </div>
    </div>
  );
}