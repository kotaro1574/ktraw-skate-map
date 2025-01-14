"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"
import { Button, buttonVariants } from "./ui/button"

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.menu className="size-5" />
      </SheetTrigger>
      <SheetContent className="z-[1300] flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle>Ktraw skate map 🗺️</SheetTitle>
          <nav className="mt-10 space-y-2">
            <Link
              className={`${buttonVariants({ variant: "ghost" })} w-full`}
              href={siteConfig.links.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.youtube className="size-6" />
              <span>youtube</span>
            </Link>
            <Link
              className={`${buttonVariants({ variant: "ghost" })} w-full`}
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.instagram className="size-5" />
              <span>Instagram</span>
            </Link>
            <Link
              className={`${buttonVariants({ variant: "ghost" })} w-full`}
              href={siteConfig.links.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.tiktok className="size-5" />
              <span>TikTok</span>
            </Link>
          </nav>
        </SheetHeader>
        <SheetFooter className="space-y-2">
          <Link
            className={`${buttonVariants({ variant: "ghost" })} w-full`}
            href={"/contact"}
            onClick={() => setIsOpen(false)}
          >
            お問い合せ
          </Link>
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-6 w-[1.3rem] dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
            <span>切り替え</span>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
