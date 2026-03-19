import React from "react";

const PrivacyPolicyModal = ({ open, onClose }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const modal = document.getElementById("privacy-policy-modal");
        if (modal) modal.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <div
      id="privacy-policy-modal"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60"
    >
      <div className="bg-white max-w-lg w-[90vw] rounded-2xl shadow-xl p-8 relative animate-fadeIn mx-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-black text-center">Privacy Policy</h2>
        <div className="text-gray-700 space-y-3 text-sm max-h-[60vh] overflow-y-auto">
          <p>
            I value your privacy. Your information will only be used to respond to your inquiry and will not be shared with third parties. By submitting this form, you consent to the collection and use of your information for the purpose of communication.
          </p>
          <ul className="list-disc pl-5">
            <li>I do not sell or share your data with anyone.</li>
            <li>Your email and message are only used to contact you regarding your inquiry.</li>
            <li>You may request deletion of your data at any time.</li>
          </ul>
          <p>
            For more details, contact me directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
