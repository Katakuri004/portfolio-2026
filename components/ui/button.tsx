import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground border-2 border-transparent neo-shadow hover:neo-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all",
                destructive:
                    "bg-destructive text-destructive-foreground neo-shadow hover:neo-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px]",
                outline:
                    "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground neo-shadow hover:neo-shadow-hover",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground border-transparent",
                link: "text-primary underline-offset-4 hover:underline border-transparent",
                neo: "bg-neo-yellow text-black border-2 border-white neo-shadow hover:neo-shadow-hover font-bold",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

// Wrap with motion
const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : MotionButton

        // If asChild is true, we don't pass motion props directly in the same way, 
        // but Slot handles props. For simplicity, we'll apply motion classes via Framer Motion 
        // if it's NOT a slot, or just use CSS transitions for Slot for now.
        // However, to keep it simple and consistent:

        if (asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                />
            )
        }

        return (
            <MotionButton
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...(props as HTMLMotionProps<"button">)}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
