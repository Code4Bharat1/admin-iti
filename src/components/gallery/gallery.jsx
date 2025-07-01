import Image from "next/image";

const galleryImages = [
  "/aboutus/g1.png",
  "/aboutus/g2.png",
  "/aboutus/g3.png",
  "/aboutus/g4.png",
  "/aboutus/g5.png",
  "/aboutus/g6.png",
  "/aboutus/g7.png",
  "/aboutus/g8.png",
  "/aboutus/g9.png",
  "/aboutus/g10.png",
  "/aboutus/g11.png",
  "/aboutus/g12.png",
  "/aboutus/g13.png",
  "/aboutus/g14.png",
  "/aboutus/g15.png",
  "/aboutus/g16.png",
  "/aboutus/g17.png",
  "/aboutus/g18.png",
];

export default function GalleryPage() {
  return (
    <div className="bg-[#F4F8FC] min-h-screen">
      {/* Gallery Heading */}
      <h2 className="text-4xl font-extrabold text-center text-[#1F2C56] py-10">
        Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-2 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {galleryImages.map((src, index) => (
          <div key={index} className="w-full">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={400}
              className="w-full h-auto  object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
