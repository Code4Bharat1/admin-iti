import Image from "next/image";

export default function TradesPage() {
  const steps = [
    {
      step: '01',
      title: 'REGISTRATION',
      description: 'Online Registration on ITI Admission Portal',
    },
    {
      step: '02',
      title: 'TRADE',
      description: 'Priority Wise Trade selection Student can choose Multiple Trades',
    },
    {
      step: '03',
      title: 'MERIT LIST',
      description: 'Merit List Is Generated as per the Norms of Admission Portal',
    },
    {
      step: '04',
      title: 'CAP ROUND',
      description: 'Admission Portal selects the candidate on the basis of merit list',
    },
  ];

  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] py-6 sm:py-12 px-2 sm:px-4">
      {/* Admission Process Section */}
      <div className="bg-[#F4F8FC] py-6 sm:py-10 px-2 sm:px-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#1F2C56] mb-6 sm:mb-8 md:mb-12">
          Admission Process
        </h3>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {[
            {
              step: '01',
              title: 'REGISTRATION',
              description: 'Online Registration on ITI Admission Portal',
            },
            {
              step: '02',
              title: 'TRADE',
              description: 'Priority Wise Trade selection Student can choose Multiple Trades',
            },
            {
              step: '03',
              title: 'MERIT LIST',
              description: 'Merit List Is Generated as per the Norms of Admission Portal',
            },
            {
              step: '04',
              title: 'CAP ROUND',
              description: 'Admission Portal selects the candidate on the basis of merit list',
            },
          ].map((item, index, arr) => {
            const isEven = index % 2 === 0;
            const isLast = index === arr.length - 1;
            const isFirst = index === 0;

            return (
              <div key={index} className="relative">
                {/* White Top Arrow — skip for first item */}
                {!isFirst && (
                  <div
                    className={`absolute top-0 w-0 h-0 
                      border-l-[16px] sm:border-l-[20px] md:border-l-[26px] border-l-transparent 
                      border-r-[16px] sm:border-r-[20px] md:border-r-[26px] border-r-transparent 
                      border-t-[20px] sm:border-t-[25px] md:border-t-[30px] border-t-[#F4F8FC]
                      ${isEven ? 'left-8 sm:left-12 md:left-20 lg:left-185' : 'right-8 sm:right-12 md:right-20 lg:right-184'}`}
                  />
                )}

                {/* Main Box */}
                <div className="bg-[#102645] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-[Protest_Riot] font-bold text-white">{item.step}</div>
                  <div className="w-full text-center">
                    <h3 className="text-[#FFD700] text-lg sm:text-xl md:text-2xl font-bold uppercase mb-2 sm:mb-3 tracking-wide underline">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl mx-2 sm:mx-4 md:mx-6 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Bottom Blue Arrow — skip for last item */}
                {!isLast && (
                  <div
                    className={`absolute bottom-[-20px] sm:bottom-[-25px] md:bottom-[-30px] w-0 h-0 
                      border-l-[20px] sm:border-l-[28px] md:border-l-[36px] border-l-transparent 
                      border-r-[20px] sm:border-r-[28px] md:border-r-[36px] border-r-transparent 
                      border-t-[25px] sm:border-t-[32px] md:border-t-[40px] border-t-[#102645] 
                      ${isEven ? 'left-2 sm:left-3 md:left-5 lg:left-24' : 'right-2 sm:right-3 md:right-5 lg:right-24'}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Required Documents */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-24 py-8 sm:py-12 md:py-16 bg-[#F4F8FC]">
        <div className="max-w-6xl min-h-[400px] sm:min-h-[500px] md:min-h-[600px] mx-auto border border-gray-300 bg-white shadow-xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 sm:mb-8 md:mb-10 text-[#000000]">
            Required Documents for ITI Admission
          </h3>
          <ul className="list-disc pl-4 sm:pl-6 md:pl-8 lg:pl-12 space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-semibold text-black leading-relaxed">
            <li>SSC Marksheet (Original)</li>
            <li>School Leaving Certificate (Original)</li>
            <li>Aadhar Card (Photocopy)</li>
            <li>Domicile Certificate (Photocopy)</li>
            <li>Caste Certificate (Photocopy)</li>
            <li>Non Creamy Layer Certificate (Photocopy)</li>
            <li>Passport-size Photographs (Size – 4.5 x 3.5)</li>
          </ul>
        </div>
      </div>

      {/* Trades Offered Table */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-20 text-blue">
        Trades Offered by Our Institute
      </h2>

      <div className="overflow-x-auto w-full px-1 sm:px-2">
        <div className="max-w-[1300px] mb-6 sm:mb-8 md:mb-10 mx-auto overflow-hidden rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
          <table
            className="w-full min-w-[600px] text-sm text-center border-separate"
            style={{ borderSpacing: 0 }}
          >
            <thead className="bg-[#1F2C56] text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <tr>
                <th className="px-2 sm:px-3 md:px-4 lg:px-5 py-3 sm:py-4 border-r border-black">Trade Name</th>
                <th className="px-2 sm:px-3 md:px-4 lg:px-5 py-3 sm:py-4 border-r border-black">Trade Type</th>
                <th className="px-2 sm:px-3 md:px-4 lg:px-5 py-3 sm:py-4 border-r border-black">Eligibility</th>
                <th className="px-2 sm:px-3 md:px-4 lg:px-5 py-3 sm:py-4">Duration</th>
              </tr>
            </thead>
            <tbody className="bg-[#BAC7E5] text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {[
                [
                  <>
                    Computer Operator and <br />
                    Programming Assistant (COPA)
                  </>,
                  "Non-Engineering",
                  "10th Passed",
                  "1 Year",
                ],
                [
                  <>
                    Refrigeration and <br />
                    Air Conditioning Technician
                  </>,
                  "Engineering",
                  "10th Passed",
                  "2 Years",
                ],
                ["Draughtsman Mechanical", "Engineering", "10th Passed", "2 Years"],
                ["Draughtsman Civil", "Engineering", "10th Passed", "2 Years"],
                ["Marine Fitter", "Engineering", "10th Passed", "2 Years"],
              ].map(([name, type, eligibility, duration], index) => (
                <tr key={index} className="h-[50px] sm:h-[60px] md:h-[70px]">
                  <td className="px-1 sm:px-2 py-2 sm:py-3 border-r border-black">{name}</td>
                  <td className="px-1 sm:px-2 py-2 sm:py-3 border-r border-black">{type}</td>
                  <td className="px-1 sm:px-2 py-2 sm:py-3 border-r border-black">{eligibility}</td>
                  <td className="px-1 sm:px-2 py-2 sm:py-3">{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dubai Dry Docks Courses Table */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-12 md:mb-20 text-blue">
        Dubai Dry Docks Courses
      </h2>

      <div className="overflow-x-auto w-full px-1 sm:px-2 md:px-4 mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-[1100px] mx-auto overflow-hidden rounded-lg">
          <table
            className="w-full min-w-[500px] text-sm text-center border-separate shadow-[0_4px_4px_rgba(0,0,0,0.3)]"
            style={{ borderSpacing: 0 }}
          >
            <thead className="bg-[#1F2C56] text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              <tr>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 border-r border-black">Name</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 border-r border-black">Eligibility</th>
                <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3">Duration</th>
              </tr>
            </thead>
            <tbody className="bg-[#BAC7E5] text-black font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {[
                ["Mechanical Fitter", "10th Passed", "2 Months"],
                ["Marine Electrician", "10th Passed", "2 Months"],
                ["Marine Welder", "10th Passed", "2 Months"],
              ].map(([name, eligibility, duration], index) => (
                <tr key={index}>
                  <td className="px-1 sm:px-2 py-3 sm:py-4 border-r border-black">{name}</td>
                  <td className="px-1 sm:px-2 py-3 sm:py-4 border-r border-black">{eligibility}</td>
                  <td className="px-1 sm:px-2 py-3 sm:py-4 md:py-5">{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}