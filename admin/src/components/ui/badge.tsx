import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { LucideIcon } from "lucide-react"
import { cn } from "@/libs/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
    {
        variants: {
            variant: {
                light: "bg-opacity-10",
                solid: "",
            },
            color: {
                primary: "bg-blue-500 text-white",
                success: "bg-green-500 text-white",
                error: "bg-red-500 text-white",
                warning: "bg-yellow-500 text-black",
                info: "bg-cyan-500 text-white",
                light: "bg-gray-100 text-gray-800",
                dark: "bg-gray-900 text-white",
                gold: "bg-yellow-500 text-white"
            },
            withIcon: {
                true: "gap-1.5 pl-2",
            },
        },
        defaultVariants: {
            variant: "light",
            color: "primary",
            withIcon: false,
        },
    }
)

// ⚠️ Muhim: HTMLAttributes dan 'color'ni olib tashlaymiz
export interface BadgeProps
    extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {
    icon?: LucideIcon
}

export function Badge({
    className,
    variant,
    color,
    withIcon,
    icon: Icon,
    children,
    ...props
}: BadgeProps) {
    return (
        <span className={cn(badgeVariants({ variant, color, withIcon }), className)} {...props}>
            {withIcon && Icon ? <Icon size={14} /> : null}
            {children}
        </span>
    )
}
