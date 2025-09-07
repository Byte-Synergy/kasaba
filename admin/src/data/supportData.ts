import { SupportDataType } from "@/types";
import { BanknoteArrowDown, CircleFadingArrowUp, LayoutTemplate, MessageCircle, Server, ShieldBan, Sparkles, UsersRound } from "lucide-react";

export const SupportData: SupportDataType[] = [
    {
        label: "Getting Started",
        description: "Start off on the right foot! Not the left one!",
        icon: Sparkles
    },
    {
        label: "Account Settings",
        description: "You're a special snowilake and so is your account",
        icon: CircleFadingArrowUp
    },
    {
        label: "Billing",
        description: "That feel when you look at your bank account",
        icon: BanknoteArrowDown
    },
    {
        label: "Interface",
        description: "What does this button do.#???",
        icon: LayoutTemplate
    },
    {
        label: "Trust & Safety",
        description: "Keep things safe & sound for you and your buddies",
        icon: ShieldBan
    },
    {
        label: "F.A.Q",
        description: "All you can eat self-serve problem solving",
        icon: MessageCircle
    },
    {
        label: "Community",
        description: "Bringing people together from all over the world",
        icon: UsersRound
    },
    {
        label: "Server Setup",
        description: "Almost as exciting as interior decorating",
        icon: Server
    },
]