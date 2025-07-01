'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the Mehrunnisa Abbas Fakih Industrial Training Institute (MAF ITI)?",
      answer: "Mehrunnisa Abbas Fakih Industrial Training Institute (MAF ITI) is a technical institute established by Anjuman Waseeul Taleem Educational Trust Raigad. It aims to provide technical education to the underprivileged youth in the Konkan region, particularly in Mazgaon village, Taluka Murud, District Raigad."
    },
    {
      question: "When was MAF ITI established?",
      answer: "MAF ITI was established in 2006 with the aim of providing technical education to empower the youth and enable them to earn a livelihood with dignity."
    },
    {
      question: "How can I contact MAF ITI for further information or enrollment?",
      answer: "You can contact MAF ITI through the following means:<br/>• Email: awtmaft@gmail.com<br/>• Phone: 8983508919"
    },
    {
      question: "Where is MAF ITI located?",
      answer: "MAF ITI is located in Mazgaon village, Taluka Murud, District Raigad, Maharashtra, India."
    },
    {
      question: "What are the objectives of MAF ITI?",
      answer: "The primary objectives of MAF ITI include providing technical education to the underprivileged youth, enabling them to earn a livelihood, promoting skill development, and contributing to the educational upliftment of society."
    },
    {
      question: "What trades or courses does MAF ITI offer?",
      answer: "MAF ITI offers training in the following trades:<br/>• Computer Operator & Programming Assistant (COPA)<br/>• Draughtsman Civil<br/>• Draughtsman Mechanical<br/>• Electrician<br/>• Fitter<br/>• Refrigeration and Air Conditioning Mechanic"
    },
    {
      question: "What scholarships are available at MAF ITI?",
      answer: "NSP (National Scholarship Portal) and Maha DBT (Maharashtra Direct Benefit Transfer Scholarship) — these two portals will help the trainees to receive the scholarship."
    },
    {
      question: "Do MAF ITI offers placement?",
      answer: "Yes. MAF ITI offers placement to their current as well as to their past students."
    },
    {
      question: "Do MAF ITI conduct sports & other cultural activities?",
      answer: "Yes. MAF ITI conducts sports annually as well as conducts cultural activities on a monthly basis."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f8ff] py-10 px-4 sm:px-10">
      <h1 className="text-4xl font-extrabold font-Poppins text-[#1F2A44] text-center mb-6">FAQ’s</h1>
      <div className="space-y-3 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </main>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-[#C3C3C3] bg-white rounded-md overflow-hidden transition-all duration-300  cursor-pointer ${
        isOpen ? 'p-4' : 'p-3'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center ">
      <h3 className="font-semibold px-4 text-lg text-gray-800  pb-2">
{question}</h3>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && (
        <div
          className="mt-3 text-lg px-4 font-semibold text-gray-800"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
