"use client"

import React from "react"
import { Button } from "../../components/ui/button"
import Link from "next/link"
import { UserCircle, Building2 } from "lucide-react"

export function LoginPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 relative">
      {/* Sign In button */}
      <Link href="sign-up" passHref>
      <div className="absolute top-4 right-4">
        <Button variant="ghost" className="text-purple-600 hover:text-purple-800 transition-colors">
          Sign up <span className="ml-1">→</span>
        </Button>
      </div>
      </Link>

      {/* Main content */}
      <div className="w-full max-w-md space-y-8">
        {/* Animated Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg animate-float">
            <span className="text-white text-3xl font-bold">
            <svg width="40" height="70" viewBox="0 0 24 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_137_13)">
                <path d="M11.8867 38.9171C8.79238 38.8868 5.82928 37.6687 3.61544 35.5169C1.4016 33.3651 0.107977 30.4457 0.0043816 27.3677C-0.0785953 24.3155 1.01963 21.3481 3.07214 19.0787C2.71878 18.6425 2.39862 18.1807 2.11434 17.6972C1.10087 15.8838 0.581103 13.8383 0.606539 11.7634C0.631974 9.6885 1.20172 7.65627 2.25934 5.86801C3.31696 4.07975 4.82574 2.59755 6.63616 1.5683C8.44658 0.539054 10.4958 -0.00153633 12.5808 0.000113779C15.6924 -0.0134854 18.6843 1.19246 20.9095 3.35716C21.7571 4.15405 22.3431 5.18713 22.5908 6.32106C22.8385 7.45499 22.7363 8.63692 22.2976 9.71208C21.8907 10.7138 21.2133 11.584 20.3404 12.2264C21.3901 13.1451 22.078 14.4049 22.2814 15.7813C22.4847 17.1577 22.1904 18.5613 21.4509 19.7418C21.8174 20.221 22.1513 20.7241 22.4503 21.2476C23.4801 23.0589 24.0143 25.1074 23.9997 27.1884C23.9851 29.2695 23.4221 31.3103 22.367 33.1071C21.3118 34.9038 19.8015 36.3937 17.9868 37.4277C16.1722 38.4618 14.1166 39.0039 12.0255 39L11.8867 38.9171ZM11.97 26.7737C11.9233 26.7737 11.8777 26.7874 11.8389 26.8133C11.8001 26.8391 11.7698 26.8757 11.752 26.9187C11.7341 26.9616 11.7294 27.0088 11.7386 27.0543C11.7477 27.0999 11.7701 27.1417 11.8031 27.1746C11.8361 27.2074 11.8782 27.2298 11.924 27.2389C11.9697 27.2479 12.0172 27.2433 12.0603 27.2255C12.1034 27.2077 12.1403 27.1776 12.1662 27.139C12.1922 27.1004 12.206 27.0549 12.206 27.0085C12.2026 26.9473 12.1767 26.8895 12.1332 26.8461C12.0896 26.8028 12.0315 26.777 11.97 26.7737ZM12.5808 11.5771C12.5476 11.5761 12.5146 11.5817 12.4836 11.5936C12.4526 11.6054 12.4243 11.6233 12.4003 11.6462C12.3812 11.7045 12.3812 11.7674 12.4003 11.8258C12.4063 11.8824 12.4317 11.9351 12.4721 11.9754C12.5125 12.0156 12.5656 12.0408 12.6224 12.0468C12.6679 12.0592 12.7158 12.0592 12.7612 12.0468L12.9833 11.8811L12.7751 11.7015C12.7567 11.6665 12.7286 11.6376 12.6941 11.618C12.6597 11.5984 12.6204 11.589 12.5808 11.5909V11.5771Z" fill="#1E212B"/>
                <path d="M18.3523 13.2762C17.742 13.2851 17.1517 13.4939 16.6727 13.8703C16.2496 14.2131 15.7498 14.4495 15.2156 14.5597C14.6813 14.6698 14.1283 14.6505 13.6032 14.5032C13.0781 14.3559 12.5963 14.0851 12.1985 13.7135C11.8006 13.342 11.4984 12.8806 11.3174 12.3684C11.1364 11.8562 11.0819 11.3082 11.1584 10.7706C11.2349 10.233 11.4403 9.72159 11.7571 9.27959C12.074 8.83758 12.4931 8.47792 12.979 8.23098C13.4648 7.98404 14.0033 7.85707 14.5489 7.86077C15.4172 7.85774 16.253 8.18945 16.8809 8.78636C17.3859 9.257 18.0492 9.52305 18.741 9.53238C19.2746 9.53142 19.7958 9.37275 20.2386 9.07646C20.6814 8.78017 21.0258 8.35964 21.2281 7.86824C21.4303 7.37683 21.4814 6.83667 21.3747 6.31636C21.268 5.79605 21.0084 5.31901 20.6288 4.94578C19.7443 4.08039 18.6861 3.41057 17.5236 2.98006C16.3611 2.54955 15.1204 2.36808 13.8825 2.44749C12.6447 2.52691 11.4377 2.86541 10.3403 3.44091C9.243 4.01641 8.28003 4.81595 7.51443 5.78721C6.74883 6.75848 6.19784 7.87962 5.89745 9.07735C5.59705 10.2751 5.55403 11.5224 5.77121 12.7378C5.98838 13.9532 6.46085 15.1093 7.15774 16.1305C7.85463 17.1517 8.76023 18.0151 9.81535 18.6641C8.09845 19.5596 6.7266 20.9941 5.9128 22.7449C5.09901 24.4958 4.88878 26.4651 5.31478 28.3471C5.74077 30.229 6.77915 31.9184 8.26869 33.1528C9.75823 34.3873 11.6156 35.0978 13.5525 35.1741C15.4893 35.2503 17.3973 34.688 18.9802 33.5745C20.563 32.461 21.7322 30.8586 22.3063 29.016C22.8803 27.1734 22.827 25.1937 22.1548 23.3843C21.4825 21.575 20.2288 20.0371 18.5883 19.0095C19.1151 18.7329 19.6127 18.4042 20.0736 18.0286C20.5038 17.6775 20.8141 17.2024 20.962 16.6685C21.1098 16.1347 21.0879 15.5684 20.8992 15.0475C20.7105 14.5266 20.3644 14.0766 19.9083 13.7594C19.4523 13.4423 18.9087 13.2735 18.3523 13.2762ZM17.2834 26.4282C17.2834 27.0976 17.084 27.752 16.7103 28.3086C16.3366 28.8652 15.8054 29.299 15.184 29.5552C14.5626 29.8114 13.8788 29.8784 13.2191 29.7478C12.5594 29.6172 11.9534 29.2949 11.4777 28.8215C11.0021 28.3482 10.6782 27.7451 10.547 27.0885C10.4158 26.4319 10.4831 25.7514 10.7405 25.1329C10.9979 24.5144 11.4338 23.9858 11.9931 23.6139C12.5524 23.242 13.2099 23.0435 13.8825 23.0435C14.7845 23.0435 15.6496 23.4001 16.2874 24.0348C16.9252 24.6696 17.2834 25.5305 17.2834 26.4282Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_137_13">
                <rect width="24" height="39" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-8">
          Start <span className="text-purple-600">Saving</span><br />
          <span className="text-gray-900">while</span> <span className="text-purple-600">Shopping.</span>
        </h1>

        {/* Login options */}
        <div className="space-y-4 mt-8">
          <Link href="login/agent-login" passHref>
            <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-full transition-colors flex items-center justify-center">
              <Building2 className="w-5 h-5 mr-2" />
              Login as an Agent
            </Button>
          </Link>
          <Link href="login/user-login" passHref>
            <Button variant="outline" className="w-full bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-full transition-colors flex items-center justify-center">
              <UserCircle className="w-5 h-5 mr-2" />
              Login as a User
            </Button>
          </Link>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-sm text-gray-600 mt-8">
          By signing up, you agree to our{" "}
          <a href="#" className="text-purple-600 hover:underline">Terms</a> &{" "}
          <a href="#" className="text-purple-600 hover:underline">Privacy</a>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-1/4 -left-16 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
      <div className="fixed bottom-1/4 -right-16 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
    </div>
  )
}