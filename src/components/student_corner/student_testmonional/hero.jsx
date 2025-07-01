'use client';

import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const testimonials = [
  {
    name_en: 'Sairan Jamdar',
    name_mr: 'सायरन जमदार',
    en: 'Projects and assignments have given me the confidence to solve real-world problems.',
    mr: 'प्रकल्प आणि असाइनमेंट्समुळे मला खऱ्या जगातील समस्यांचे समाधान करण्याचा आत्मविश्वास मिळाला.',
  },
  {
    name_en: 'Juned Adhikari',
    name_mr: 'जुनेद अधिकारी',
    en: 'I have learned a lot here; both the faculty and infrastructure are exceptional.',
    mr: 'येथे मला खूप काही शिकायला मिळाले; शिक्षक आणि पायाभूत सुविधा दोन्ही उत्कृष्ट आहेत.',
  },
  {
    name_en: 'Munaf Kadu',
    name_mr: 'मुन्नाफ काडू',
    en: 'Har ek subject ko bahut depth me cover kiya jata hai, jo ki knowledge ko enhance karta hai.',
    mr: 'प्रत्येक विषय खूप सखोलपणे शिकवला जातो, ज्यामुळे ज्ञानात वाढ होते.',
  },
  {
    name_en: 'Ayesha Afware',
    name_mr: 'आयेशा अफवारे',
    en: 'Faculty ka approach bahut practical hai, jo students ke future perspectives ko broad karta hai.',
    mr: 'शिक्षकांचा दृष्टिकोन अत्यंत व्यावहारिक आहे, जो विद्यार्थ्यांच्या भविष्याच्या दृष्टीकोनाला विस्तारित करतो.',
  },
  {
    name_en: 'Adina Bakker',
    name_mr: 'अदिना बक्कर',
    en: 'Iss institute ne mujhe not just academically, but personally bhi grow karne mein madad ki hai.',
    mr: 'या संस्थेने मला शैक्षणिकदृष्ट्या आणि वैयक्तिकदृष्ट्याही वाढण्यास मदत केली.',
  },
  {
    name_en: 'vinayak Mokal',
    name_mr: 'विनायक मोकळ',
    en: 'Placement department bahut active hai, aur bahut saare students ko top companies mein jobs dilwane mein successful rahi hai.',
    mr: 'प्लेसमेंट विभाग खूप सक्रिय आहे आणि अनेक विद्यार्थ्यांना टॉप कंपन्यांमध्ये नोकऱ्या मिळवून देण्यात यशस्वी ठरला आहे.',
  },
];

export default function StudentTestimonials() {
  const [showMarathi, setShowMarathi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMarathi(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className='bg-[#f4f8ff] text-center  '>
   <h2 className="text-3xl md:text-5xl py-10 font-extrabold text-[#1F2A44] mb-12">
          Student Testimonials
        </h2> </div>
        <section className="bg-white text-center py-12 px-4">
      <div className="max-w-6xl mx-auto">
        

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-18">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#22356F] text-white rounded-tl-4xl rounded-r-4xl px-6 pt-12 pb-6 shadow-lg min-h-[240px]"
            >
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full shadow-md">
                <FaUserCircle className="text-6xl text-[#1a264f]" />
              </div>
              <h3 className="font-semibold text-xl mb-4">
                {showMarathi ? item.name_mr : item.name_en}
              </h3>
              <p className="text-base leading-relaxed">"{showMarathi ? item.mr : item.en}"</p>
            </div>
          ))}
        </div>
      </div>
    </section></>
  );
}
