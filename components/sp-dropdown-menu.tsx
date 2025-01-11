"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function SpDropdownMenu() {
  const { setTheme, theme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.menu className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link
          className="w-full"
          href={siteConfig.links.youtube}
          target="_blank"
          rel="noreferrer"
        >
          <DropdownMenuItem>
            <Icons.youtube className="size-6" />
            <span>youtube</span>
          </DropdownMenuItem>
        </Link>
        <Link
          className="w-full"
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <DropdownMenuItem>
            <Icons.instagram className="size-5" />
            <span>Instagram</span>
          </DropdownMenuItem>
        </Link>
        <Link
          className="w-full"
          href={siteConfig.links.tiktok}
          target="_blank"
          rel="noreferrer"
        >
          <DropdownMenuItem>
            <Icons.tiktok className="size-5" />
            <span>TikTok</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-6 w-[1.3rem] dark:hidden" />
          <Moon className="hidden size-5 dark:block" />
          <span>切り替え</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
