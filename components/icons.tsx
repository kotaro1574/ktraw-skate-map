import {
  Circle,
  LucideProps,
  Menu,
  Moon,
  SunMedium,
  XIcon,
  type LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: XIcon,
  menu: Menu,
  circle: Circle,
  youtube: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  ),
  instagram: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  tiktok: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5251 0.02C13.8351 0 15.1351 0.01 16.4351 0C16.5151 1.53 17.0651 3.09 18.1851 4.17C19.3051 5.28 20.8851 5.79 22.4251 5.96V9.99C20.9851 9.94 19.5351 9.64 18.2251 9.02C17.6551 8.76 17.1251 8.43 16.6051 8.09C16.5951 11.01 16.6151 13.93 16.5851 16.84C16.5051 18.24 16.0451 19.63 15.2351 20.78C13.9251 22.7 11.6551 23.95 9.32512 23.99C7.89512 24.07 6.46512 23.68 5.24512 22.96C3.22512 21.77 1.80512 19.59 1.59512 17.25C1.57512 16.75 1.56512 16.25 1.58512 15.76C1.76512 13.86 2.70512 12.04 4.16512 10.8C5.82512 9.36 8.14512 8.67 10.3151 9.08C10.3351 10.56 10.2751 12.04 10.2751 13.52C9.28512 13.2 8.12512 13.29 7.25512 13.89C6.62512 14.3 6.14512 14.93 5.89512 15.64C5.68512 16.15 5.74512 16.71 5.75512 17.25C5.99512 18.89 7.57512 20.27 9.25512 20.12C10.3751 20.11 11.4451 19.46 12.0251 18.51C12.2151 18.18 12.4251 17.84 12.4351 17.45C12.5351 15.66 12.4951 13.88 12.5051 12.09C12.5151 8.06 12.4951 4.04 12.5251 0.02Z"
        fill="currentColor"
      />
    </svg>
  ),
}
