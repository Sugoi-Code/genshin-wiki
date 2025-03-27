import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-4 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

const InputWithIcon = ({
  children,
  icon,
  position,
  className,
}: React.ComponentProps<"div"> & {
  icon: React.ReactNode
  position: "left" | "right"
}) => (
  <div
    className={cn(
      "relative transition flex items-center [&_svg]:pointer-events-none",
      "[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 [&_svg]:absolute [&_svg]:transition [&_svg]:size-4",
      position === "left" ? "[&_svg]:left-4 [&_input]:pl-10" : "[&_svg]:right-4 [&_input]:pr-10",
      className
    )}
  >
    {icon}
    {children}
  </div>
)

export { Input, InputWithIcon }
