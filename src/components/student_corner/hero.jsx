'use client';

import Image from 'next/image';

export default function StudentCorner() {
  const toppers = [
    {
      name: 'Hassan Salim Shaikh',
      trade: 'Computer Operator and Programming Assistant (COPA)',
      percentage: '91.16%',
    },
    {
      name: 'Varad Jagdish Gurav',
      trade: 'Draughtman (Civil)',
      percentage: '85.33%',
    },
    {
      name: 'Mufeez Moin Shaban',
      trade: 'Draughtman (Mechanical)',
      percentage: '72.83%',
    },
    {
      name: 'Saurabh Tanaji Talape',
      trade: 'Marine Fitter',
      percentage: '91.00%',
    },
    {
      name: 'Surve Devendra Jitendra',
      trade: 'Refrigeration and Air Conditioning Technician',
      percentage: '87.16%',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#f4f8ff] via-[#f0f6ff] to-[#e8f4ff] min-h-screen p-3 sm:p-6">
      {/* Floating Decorative Elements */}
      <div className="fixed top-10 right-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 left-10 w-32 h-32 bg-[#1F2A44]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Top Image Section */}
      <div className="relative w-full max-w-7xl mx-auto  overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
        {/* Image */}
        <Image
          src="/studentcorner/student1.png"
          alt="Student Corner"
          width={1200}
          height={500}
          className="w-full h-120 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Enhanced Overlay with Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/70 via-[#1F2A44]/50 to-[#1F2A44]/30"
        />

        {/* Animated Heading */}
        <h1 className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-10 md:left-20 text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl border-b-2 md:border-b-4 border-yellow-400 inline-block pb-1 animate-fade-in-up drop-shadow-lg">
          Student Corner
        </h1>
        
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
      </div>

      {/* Heading Section */}
      <div className="text-center mt-8 sm:mt-12 " >
        <div className="relative inline-block">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1F2A44] mb-6 relative z-10">
            Our Toppers
            
          </h2>
        </div>
        <h3 className="text-lg sm:text-xl md:text-3xl font-semibold underline ">
          Toppers of 2024
        </h3>
      </div>

      {/* Table Section */}
      <div className="mt-6 sm:mt-8 flex justify-center mb-30">
        <div className="border border-[#C3C3C3] rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.3)] overflow-hidden w-full max-w-6xl transform hover:shadow-3xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
          {/* Desktop Table - Hidden on mobile */}
          <table className="hidden sm:table w-full table-auto border-collapse">
            <thead className="relative z-10">
              <tr className="bg-gradient-to-r from-[#1F2A44] via-[#2A3B5C] to-[#1F2A44] text-white text-sm md:text-xl text-center shadow-[0_4px_4px_rgba(0,0,0,0.3)] ">
                <th className="p-2 md:p-4 border-r border-black relative overflow-hidden group">
                  <span className="relative z-10">Name of Student</span>
                  <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </th>
                <th className="p-2 md:p-4 border-r border-black relative overflow-hidden group">
                  <span className="relative z-10">Name of Trade</span>
                  <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </th>
                <th className="p-2 md:p-4 relative overflow-hidden group">
                  <span className="relative z-10">Percentage</span>
                  <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {toppers.map((student, index) => (
                <tr key={index} className="text-center font-normal text-sm md:text-xl bg-gradient-to-r from-white via-[#f8faff] to-white text-gray-900 border-b border-gray-900 last:border-b-0 hover:from-[#f0f6ff] hover:via-[#e8f4ff] hover:to-[#f0f6ff] transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg group">
                  <td className="p-2 md:p-4 border-r border-gray-900 relative">
                    <span className="relative z-10">{student.name}</span>
                  </td>
                  <td className="p-2 md:p-4 border-r border-gray-900 relative">
                    <span className="relative z-10">{student.trade}</span>
                  </td>
                  <td className="p-2 md:p-4 relative">
                    <span className="relative z-10 font-bold text-[#1F2A44]">{student.percentage}</span>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Card Layout - Visible only on mobile */}
          <div className="sm:hidden">
            <div className="bg-gradient-to-r from-[#1F2A44] via-[#2A3B5C] to-[#1F2A44] text-white text-center py-4 font-bold text-lg shadow-lg">
              Our Toppers - 2024
            </div>
            {toppers.map((student, index) => (
              <div key={index} className="bg-gradient-to-r from-white via-[#f8faff] to-white border-b border-gray-900 last:border-b-0 p-4 hover:from-[#f0f6ff] hover:via-[#e8f4ff] hover:to-[#f0f6ff] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group animate-fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="space-y-3 relative">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="font-semibold text-gray-900 relative">
                    <span className="text-[#1F2A44] font-bold">Name: </span>
                    <span className="relative">
                      {student.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-500"></div>
                    </span>
                  </div>
                  <div className="font-medium text-gray-800 text-sm relative">
                    <span className="text-[#1F2A44] font-bold">Trade: </span>
                    {student.trade}
                  </div>
                  <div className="font-bold text-lg text-[#1F2A44] relative">
                    <span>Percentage: </span>
                    <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">
                      {student.percentage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}