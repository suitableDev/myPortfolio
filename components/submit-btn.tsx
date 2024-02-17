import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleSubmit = () => {
    // Set pending state to true when the form is submitted
    setPending(true);

    // Simulate form submission (replace this with your actual form submission logic)
    setTimeout(() => {
      // After a delay (simulating async operation), set pending state back to false
      setPending(false);
    }, 2000); // Adjust the delay as per your requirement
  };

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
      onClick={handleSubmit}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
