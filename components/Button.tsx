import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

type ButtonVariantsProps = {
  intent?: "primary" | "secondary" | "default",
  size?: "s" | "m" | "l" | "xl",
}

type ButtonProps = ButtonVariantsProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode,
  type?: 'button' | 'submit',
  customClass?: string,
}
type ButtonVariantsFunction = (props: ButtonVariantsProps) => string;

const ButtonVariants: ButtonVariantsFunction = cva(
  //디폴트 css
  "flex items-center justify-center rounded-md min-w-10 px-4 py-2 hover:text-white hover:bg-slate-900 hover:border-none",
  {
    variants: {
      intent: {
        primary: "text-white bg-blue-700 border-none",
        secondary: "text-white bg-orange-700 border-none",
        default: "bg-white border",
      },
      size: {
        s: "h-6 text-xs px-2 py-1",
        m: "h-8 text-sm",
        l: "h-10",
        xl: "h-12 text-lg",
        icon: "h-6 w-6 overflow-hidden"
      }
    },
    defaultVariants: {
      //intent: 'default',
      //size: 'm'
    }
  }
)
export default function Button({
  intent,
  size,
  children,
  type,
  customClass,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        type={type || 'button'}
        className={`${ButtonVariants({ intent, size })} ${customClass}`}
        {...props}
      >
      {children}
      </button>
    </>
  )
}