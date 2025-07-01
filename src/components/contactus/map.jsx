import Image from 'next/image';

export default function Mapsection() {
  return (
    <div className="bg-[#f6f9fe] flex flex-col items-center justify-center  py-10">
      {/* Main Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
{/* Left - Google Map */}
<div className="w-100 mx-25 flex flex-col items-center">
  <div className="ml-40 overflow-hidden border-2 border-[#1F2A44] w-full h-[250px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.2532643173985!2d72.93918937519155!3d18.374182482676153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be842f43dba0baf%3A0xbee9d41256606aef!2sAWT%20Mehrunnisa%20Abbas%20Fakih%20Industrial%20Training%20Institute%20(ITI)!5e0!3m2!1sen!2sin!4v1719211150035!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

<a
  href="https://www.google.com/maps?q=AWT+Mehrunnisa+Abbas+Fakih+Industrial+Training+Institute+(ITI)&ll=18.3741825,72.9417646&z=17"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 px-6 py-3 bg-[#1a264f] ml-40 text-white rounded-md hover:bg-[#13203f] transition"
>
  VIEW LOCATION
</a>



</div>


        {/* Right - Circle Image inside curved layout */}
     <div className="relative w-200 ml-20 h-[419px] overflow-hidden">
  {/* Wider blue background on right */}
  <div
    className="absolute inset-0 bg-[#1F2A44] rounded-l-full hidden md:block"
   
  ></div>

  {/* Slightly smaller image inside the same circle */}
 <div 
  className="hidden md:block absolute rounded-l-full ml-6 inset-0 w-190 h-full overflow-hidden"
>
  <Image
    src="/contactus/class2.png"
    alt="Students writing exam"
    fill
    className="object-cover "
  />
</div>

</div>



      </div>
    </div>
  );
}