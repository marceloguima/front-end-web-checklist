"use client"

import {clsx} from "clsx"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface NavLinkProps {
    children: ReactNode
    href: string
    className: string
}

export default function BtnLinkNavgation({children, href, className} : NavLinkProps){

    const pathame = usePathname()

    const isActive = pathame === href
    
    return(
        <Link href={href} className={twMerge(clsx("flex items-center gap-3 hover:bg-sky-800  w-full h-full rounded-md text-white pl-3 ", className, isActive ? "bg-sky-600 shadow-xl hover:bg-sky-600"  : "bg-transparent"))}>{children}</Link>
    )
}