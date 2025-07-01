import Image from "next/image";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#1B264F] text-white flex flex-col items-center justify-center p-8">
        <Image
          src="/login.png" // Place this image in /public folder
          alt="Classroom"
          width={500}
          height={500}
          className="mb-6"
        />
        <p className="text-yellow-400 text-2xl  font-semibold text-center">
          Please login to manage the website.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex items-center justify-center \">
        <div className="w-full max-w-lg px-6 ">
          <h2 className="text-5xl font-bold mb-10 font-[Times_New_Roman] text-center">Welcome to MAF ITI</h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">Enter Email ID</label>
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 bg-[#F4F9FF]  rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.3)] focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">Enter Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#F4F9FF]  rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.3)] focus:outline-none"
              />
            </div>

            <div className="text-right text-xl font-[Times_New_Roman] text-gray-900">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

          <button
  type="submit"
  className="w-full bg-transparent text-[#1B264F] py-2 rounded-md  font-semibold"
>
  <span className="bg-[#1B264F] text-white text-xl px-8  py-3 rounded">
    Log In
  </span>
</button>

          </form>
        </div>
      </div>
    </div>
  );
}
