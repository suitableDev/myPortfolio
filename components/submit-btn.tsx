import { FaPaperPlane } from "react-icons/fa"
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitBtn({ disabled } : {disabled: boolean} ) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105
        ${disabled || pending ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-950'}`}
      disabled={pending || disabled}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {disabled ? "Thank you" : "Submit"}{" "}
          {!disabled && <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />}
        </>
      )}
    </button>
  )
}