'use client';

import { useRouter } from 'next/navigation';
import { useLogoutModal } from './LogoutContext';

export default function LogoutModal() {
  const { showModal, setShowModal } = useLogoutModal();
  const router = useRouter();

  if (!showModal) return null;

  const handleLogout = () => {
    setShowModal(false);
    router.push('/login'); // Replace with your actual login route
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-[#1B264F] mb-2">Logout Confirmation</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to do Logout?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-[#1B264F] text-white px-6 py-2 rounded hover:bg-[#14203c]"
          >
            Confirm
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="border border-[#1B264F] text-[#1B264F] px-6 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
