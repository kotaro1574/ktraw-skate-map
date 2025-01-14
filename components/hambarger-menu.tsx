import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

export default function HamburgerMenu() {
  const { setTheme, theme } = useTheme()

  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.menu className="size-5" />
      </SheetTrigger>
      <SheetContent className="z-[1300]">
        <SheetHeader>
          <SheetTitle>Ktraw skate map 🗺️</SheetTitle>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href={siteConfig.links.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <Icons.youtube className="size-6" />
            <span>youtube</span>
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Icons.instagram className="size-5" />
            <span>Instagram</span>
          </Link>
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href={siteConfig.links.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            <Icons.tiktok className="size-5" />
            <span>TikTok</span>
          </Link>
          <div
            className={buttonVariants({ variant: "ghost" })}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-6 w-[1.3rem] dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
            <span>切り替え</span>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
