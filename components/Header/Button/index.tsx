import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-10 h-10 border-2 border-[#00000010] rounded flex justify-center items-center"
      {...props}
    >
      {children}
    </button>
  )
}
