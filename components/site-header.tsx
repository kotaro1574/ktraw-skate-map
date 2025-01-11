import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { SpDropdownMenu } from "./sp-dropdown-menu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[1200] w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4 px-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="">
            <div className="font-bold">
              <span>Ktraw </span>
              <span className="sm:hidden">🛹</span>
              <br className="sm:hidden" />
              <span>Skate Map</span>
              <span>📍</span>
              <span className="hidden sm:inline-block">🛹</span>
            </div>
          </Link>
          <nav>
            <span className="text-sm font-medium">サイトについて</span>
          </nav>
        </div>
        <div className="sm:hidden">
          <SpDropdownMenu />
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.youtube className="size-6" />
                  <span className="sr-only">youtube</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.instagram className="size-5" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.tiktok}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.tiktok className="size-5" />
                  <span className="sr-only">tiktok</span>
                </div>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
