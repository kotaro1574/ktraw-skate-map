import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export function Footer() {
  return (
    <footer className="bg-accent">
      <div className="container mx-auto py-8">
        <div className="flex flex-1 items-center justify-center space-x-4">
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
        <div className="mt-8 text-center text-xs">
          <p>© 2025 Ktraw Skate Map</p>
        </div>
      </div>
    </footer>
  )
}
