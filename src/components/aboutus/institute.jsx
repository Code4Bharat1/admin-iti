import React from "react";

export default function ManagementCommittee() {
  const members = [
    ["Awab H. Fakih", "Chairman I.T.I"],
    [
      "Mubarak Kapdi",
      "Renowned Educationist, Scholar & the Author of 17 Books on Education",
    ],
    ["Khalid Kolpekar", "Auditor, Fakih and Company"],
    ["Hafiz Osama Farukh Sarang", "B.E. Civil, Sarang & Associates"],
    [
      "Ms. Zaibunnissa Malik",
      "Ph. D, M.E., B.E. Principal, M.H.S. Polytechnic",
    ],
    ["Tehseen Ulde", "Diploma in Civil, Civil Contractor"],
    [
      "Dr. Sirajuddin H Chougle",
      "Principal Maharashtra College of Arts Science and Commerce",
    ],
    [
      "Afeef A. Rauf Fajandar",
      "B.E. (Architecture) S A Planning & Design",
    ],
    ["Suhail Ismail Fakih", "B.E. (Architecture)"],
    ["Akil Firoz Karimi", "M.E Civil – Director Urban Group"],
    ["Luqman Kazi", "B.E. – Civil"],
    [
      "Abdul Majid Abdul Hamid Ansari",
      `Founder Director of ARBA Accelerator and Ventures Pvt Ltd, Head of Business Incubation & Serial Entrepreneur,
Stakeholder Raigad District (Govt), Entrepreneurship Cell IITB Mentor, Channel Partner CIIA, COT Core Member`,
    ],
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb] py-10 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#1F2A44] mt-10 mb-12">
        Institute Management Committee
      </h2>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto max-w-6xl mx-auto">
        <div className="rounded-2xl border border-[#C3C3C3] overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1d3557] text-white text-center">
                <th className="p-5 text-xl font-bold w-1/3 border-r border-r-black">
                  Name
                </th>
                <th className="p-5 text-xl font-bold w-2/3">
                  Position
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-xl text-black text-center font-semibold">
              {members.map(([name, position], index) => (
                <tr key={index} className="bg-white">
                  <td className={`p-5 border-r border-r-black whitespace-pre-line ${
                    index === members.length - 1 ? '' : 'border-b border-b-black'
                  }`}>
                    {name}
                  </td>
                  <td className={`p-5 whitespace-pre-line ${
                    index === members.length - 1 ? '' : 'border-b border-b-black'
                  }`}>
                    {position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden max-w-4xl mx-auto space-y-4">
        {members.map(([name, position], index) => (
          <div key={index} className="bg-white rounded-2xl border border-[#C3C3C3] overflow-hidden shadow-sm">
            <div className="bg-[#1d3557] text-white p-4">
              <h3 className="text-lg font-bold text-center">{name}</h3>
            </div>
            <div className="p-4">
              <p className="text-black text-sm font-semibold text-center leading-relaxed whitespace-pre-line">
                {position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}