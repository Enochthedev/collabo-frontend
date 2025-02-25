"use client"

import { useState, useEffect } from "react"
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Plus, Star, Menu, X } from "lucide-react"


export function CollaboLandingPage() {
  const [count, setCount] = useState(0)
  const [showPlus, setShowPlus] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (showPlus) {
      const timer = setTimeout(() => setShowPlus(false), 500)
      return () => clearTimeout(timer)
    }
  }, [showPlus])

  const handleTap = () => {
    setCount(count + 1)
    setShowPlus(true)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-purple-100 font-sans">
      <header className="container mx-auto p-4">
  <nav className="bg-white rounded-full shadow-lg p-4">
    <div className="flex justify-between items-center md:justify-start">
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className="flex items-center justify-center flex-grow md:flex-grow-0 md:justify-start">
        <div className="bg-yellow-400 p-2 rounded-lg">
                  <svg width="100" height="29" viewBox="0 0 100 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
            <>
              <path d="M97.6966 14.139H96.2521C96.2351 13.1678 96.0266 12.2097 95.6386 11.3196C95.2507 10.4295 94.6909 9.62509 93.9916 8.95256C93.2922 8.28003 92.467 7.75268 91.5635 7.40084C90.66 7.04901 89.696 6.87966 88.7269 6.90249C86.7264 6.88003 84.7982 7.65135 83.3633 9.04812L83.2723 9.12908C83.1456 8.96101 83.0072 8.80205 82.8582 8.65339C82.2856 8.11906 81.6109 7.70641 80.8748 7.44029C80.1388 7.17416 79.3566 7.06006 78.5754 7.10489H73.5855C73.2835 7.10356 72.9843 7.162 72.7049 7.27687C72.4256 7.39173 72.1716 7.56073 71.9576 7.7742C71.7436 7.98767 71.5738 8.24139 71.4579 8.52079C71.3421 8.8002 71.2825 9.0998 71.2825 9.40236V10.6675L70.3431 8.44086C70.1676 8.02275 69.8725 7.66605 69.495 7.4157C69.1175 7.16535 68.6745 7.03256 68.2218 7.03407H65.6562C65.2046 7.03189 64.7627 7.16452 64.3867 7.41508C64.0107 7.66564 63.7177 8.02276 63.5451 8.44086L60.9895 14.5134H58.4542V9.45295C58.4542 9.1504 58.3945 8.85082 58.2787 8.57142C58.1628 8.29202 57.993 8.0383 57.779 7.82483C57.565 7.61135 57.3111 7.44232 57.0317 7.32746C56.7523 7.2126 56.4531 7.15418 56.1511 7.15551H53.4542C53.1522 7.15418 52.853 7.2126 52.5736 7.32746C52.2942 7.44232 52.0403 7.61135 51.8263 7.82483C51.6123 8.0383 51.4425 8.29202 51.3266 8.57142C51.2108 8.85082 51.1511 9.1504 51.1511 9.45295V14.5134H49.6158V9.45295C49.6172 9.14609 49.5573 8.84205 49.4395 8.55879C49.3217 8.27552 49.1485 8.01876 48.9301 7.80367C48.7116 7.58858 48.4524 7.41952 48.1677 7.30645C47.883 7.19339 47.5785 7.13862 47.2724 7.14538H44.5754C44.1204 7.14554 43.6758 7.28133 43.298 7.53545C42.9203 7.78957 42.6265 8.15054 42.4542 8.57244C41.0153 7.4612 39.2352 6.8867 37.4195 6.94764C35.6039 7.00859 33.8661 7.70118 32.5047 8.90642C31.1314 7.60022 29.2966 6.89396 27.4037 6.94295C26.4237 6.93233 25.4513 7.1165 24.5428 7.48479C23.6343 7.85308 22.8077 8.39821 22.1107 9.08862C21.4247 9.77449 20.882 10.5905 20.5143 11.4889C20.1467 12.3873 19.9614 13.3501 19.9693 14.3211C19.9572 15.2891 20.1381 16.2497 20.5016 17.1465C20.8651 18.0434 21.4037 18.8585 22.0859 19.5439C22.7681 20.2293 23.5801 20.7713 24.4742 21.1379C25.3683 21.5046 26.3265 21.6886 27.2926 21.679C28.6001 21.7013 29.8911 21.384 31.04 20.7581C31.5555 20.4669 32.0309 20.1097 32.4542 19.6953C33.8181 20.9106 35.563 21.6102 37.3872 21.673C39.2113 21.7358 41 21.158 42.4441 20.0395C42.6167 20.464 42.9116 20.8275 43.2911 21.0835C43.6707 21.3395 44.1178 21.4763 44.5754 21.4766H51.9996C52.4593 21.328 52.9541 21.328 53.4138 21.4766H60.8279C60.9354 21.487 61.0436 21.487 61.1511 21.4766C61.2586 21.4867 61.3669 21.4867 61.4744 21.4766H64.3128C64.7721 21.4783 65.2212 21.341 65.6015 21.0828C65.9817 20.8246 66.2754 20.4574 66.4441 20.0294L66.5653 19.7358H67.2218L67.3431 20.0496C67.5183 20.4715 67.8142 20.8321 68.1934 21.086C68.5726 21.3399 69.0183 21.4758 69.4744 21.4766H72.3734C72.5782 21.4797 72.7825 21.4524 72.9794 21.3957C73.1762 21.4533 73.3805 21.4806 73.5855 21.4766H78.636C80.0727 21.5347 81.4898 21.1265 82.6764 20.3127C82.9517 20.1137 83.2056 19.8864 83.434 19.6346C84.8663 20.9571 86.7489 21.6813 88.6966 21.6588C90.2229 21.6652 91.7169 21.2179 92.9895 20.3735C93.1957 20.7052 93.483 20.9788 93.8241 21.1683C94.1652 21.3578 94.549 21.4569 94.939 21.4564H97.6966C98.3056 21.4564 98.8899 21.2147 99.3215 20.7841C99.7531 20.3535 99.997 19.7692 99.9996 19.1589V16.4364C99.997 15.8261 99.7531 15.2418 99.3215 14.8112C98.8899 14.3807 98.3056 14.139 97.6966 14.139ZM27.4643 14.5843H27.4138C27.3658 14.4907 27.3448 14.3855 27.3532 14.2806C27.3462 14.1856 27.3672 14.0905 27.4138 14.0074C27.5176 14.0845 27.6095 14.1766 27.6865 14.2806V14.3313C27.6238 14.425 27.5491 14.5101 27.4643 14.5843ZM37.8481 14.311C37.8558 14.4121 37.8271 14.5126 37.7673 14.5944C37.7673 14.5944 37.7673 14.5944 37.6764 14.5944C37.5855 14.5944 37.4845 14.2806 37.4845 14.2604C37.4768 14.1593 37.5055 14.0588 37.5653 13.977C37.5653 13.977 37.5653 13.977 37.6461 13.977C37.7269 13.977 37.8481 14.2503 37.8481 14.3009V14.311ZM88.8986 14.311C88.9063 14.4121 88.8776 14.5126 88.8178 14.5944C88.8178 14.5944 88.8178 14.5944 88.7269 14.5944C88.636 14.5944 88.535 14.2806 88.535 14.2604C88.5273 14.1593 88.556 14.0588 88.6158 13.977C88.6158 13.977 88.6158 13.977 88.6966 13.977C88.7774 13.977 88.8986 14.2503 88.8986 14.3009V14.311Z" fill="#1E212B"/>
              <path d="M23.8564 14.1188C23.8564 13.4474 23.9896 12.7826 24.2485 12.1633C24.5073 11.544 24.8866 10.9825 25.3642 10.5115C25.8417 10.0405 26.4081 9.66951 27.0302 9.42002C27.6523 9.17052 28.3177 9.04756 28.9877 9.0583C29.7923 9.01943 30.5936 9.18455 31.3175 9.53837C32.0414 9.8922 32.6645 10.4233 33.1292 11.0825L31.109 12.6512C30.8739 12.303 30.5582 12.0171 30.1888 11.8179C29.8193 11.6188 29.4072 11.5123 28.9877 11.5076C28.6644 11.519 28.3466 11.5955 28.0533 11.7325C27.76 11.8694 27.4972 12.0641 27.2805 12.3048C27.0637 12.5456 26.8975 12.8276 26.7917 13.134C26.6859 13.4403 26.6427 13.7649 26.6645 14.0884C26.6384 14.4143 26.6785 14.7422 26.7823 15.0521C26.8862 15.3621 27.0517 15.6477 27.2689 15.8918C27.486 16.1358 27.7503 16.3332 28.0457 16.4721C28.3412 16.6109 28.6616 16.6883 28.9877 16.6996C29.4231 16.6974 29.8512 16.5871 30.2336 16.3787C30.6161 16.1703 30.9411 15.8703 31.1797 15.5053L33.1999 16.9628C32.5805 17.8553 31.6947 18.5281 30.6698 18.8846C29.6449 19.2411 28.5335 19.263 27.4954 18.947C26.4573 18.631 25.5459 17.9935 24.8921 17.126C24.2383 16.2585 23.8757 15.2057 23.8564 14.1188Z" fill="white"/>
              <path d="M33.998 14.1187C34.0058 13.4384 34.1488 12.7664 34.4186 12.142C34.6885 11.5176 35.0799 10.9534 35.5698 10.4823C36.0598 10.0111 36.6385 9.64256 37.2722 9.39806C37.9059 9.15356 38.5819 9.03806 39.2607 9.05827C39.9391 9.03379 40.6154 9.14658 41.2493 9.3899C41.8832 9.63323 42.4616 10.0021 42.95 10.4745C43.4384 10.9468 43.8268 11.513 44.0919 12.1392C44.357 12.7653 44.4934 13.4386 44.493 14.1187C44.4337 15.4733 43.8549 16.7526 42.8773 17.6901C41.8997 18.6276 40.5987 19.1509 39.2455 19.1509C37.8923 19.1509 36.5914 18.6276 35.6138 17.6901C34.6362 16.7526 34.0574 15.4733 33.998 14.1187ZM41.7455 14.1187C41.7577 13.7801 41.7021 13.4424 41.582 13.1256C41.4619 12.8088 41.2798 12.5193 41.0464 12.2741C40.813 12.0289 40.5329 11.8329 40.2228 11.6978C39.9127 11.5627 39.5787 11.4911 39.2405 11.4873C38.9059 11.4883 38.575  11.5572 38.2677 11.6899C37.9605 11.8227 37.6833 12.0165 37.4529 12.2596C37.2225 12.5027 37.0437 12.7902 36.9274 13.1045C36.811 13.4188 36.7594 13.7535 36.7758 14.0884C36.7623 14.4257 36.8163 14.7623 36.9346 15.0784C37.0529 15.3944 37.2332 15.6836 37.4647 15.9289C37.6963 16.1741 37.9745 16.3704 38.2829 16.5062C38.5913 16.6421 38.9238 16.7147 39.2607 16.7198C39.5966 16.7201 39.929 16.6522 40.238 16.5202C40.5469 16.3882 40.826 16.1948 41.0582 15.9517C41.2905 15.7086 41.4711 15.4208 41.5892 15.1057C41.7074 14.7907 41.7605 14.455 41.7455 14.1187Z" fill="white"/>
              <path d="M46.1689 9.16956H48.8659V16.5578H53.5831V18.9262H46.1689V9.16956Z" fill="white"/>
              <path d="M55.0069 9.16956H57.7038V16.5578H62.3907V18.9262H54.9766L55.0069 9.16956Z" fill="white"/>
              <path d="M67.2091 9.16956H69.8152L73.9566 18.997H71.0677L70.3505 17.2562H66.593L65.896 18.997H63.0576L67.2091 9.16956ZM69.5728 15.151L68.4516 12.3475L67.4415 15.1207L69.5728 15.151Z" fill="white"/>
              <path d="M75.17 9.16955H80.17C80.6491 9.12983 81.1313 9.18733 81.5878 9.33862C82.0442 9.48991 82.4655 9.73189 82.8265 10.0501C83.0319 10.2551 83.1934 10.5 83.3011 10.7698C83.4088 11.0395 83.4604 11.3284 83.4528 11.6188C83.4626 12.0941 83.3224 12.5604 83.0521 12.9512C82.7819 13.3419 82.3954 13.6372 81.9477 13.7948C82.5021 13.896 83.0021 14.1922 83.3577 14.6302C83.7133 15.0681 83.9011 15.619 83.8871 16.1834C83.8871 17.8634 82.5235 18.8755 80.1902 18.8755H75.1396L75.17 9.16955ZM79.5033 13.056C80.3215 13.056 80.776 12.7827 80.776 12.2058C80.776 11.6795 80.3619 11.3759 79.5538 11.3759H77.7962V13.0863L79.5033 13.056ZM79.8871 16.7501C80.7053 16.7501 81.1801 16.4364 81.1801 15.8595C81.1801 15.3332 80.7659 14.9891 79.8568 14.9891H77.8366V16.7805L79.8871 16.7501Z" fill="white"/>
              <path d="M85.0479 14.1187C85.1072 12.7641 85.686 11.4848 86.6636 10.5473C87.6412 9.60979 88.9421 9.08649 90.2953 9.08649C91.6485 9.08649 92.9495 9.60979 93.9271 10.5473C94.9047 11.4848 95.4835 12.7641 95.5428 14.1187C95.4835 15.4732 94.9047 16.7525 93.9271 17.69C92.9495 18.6275 91.6485 19.1508 90.2953 19.1508C88.9421 19.1508 87.6412 18.6275 86.6636 17.69C85.686 16.7525 85.1072 15.4732 85.0479 14.1187ZM92.7852 14.1187C92.7988 13.7797 92.7442 13.4414 92.6246 13.124C92.505 12.8065 92.323 12.5165 92.0893 12.271C91.8556 12.0255 91.575 11.8296 91.2642 11.6949C90.9534 11.5603 90.6188 11.4897 90.2802 11.4872C89.9456 11.4882 89.6147 11.5571 89.3074 11.6899C89.0002 11.8226 88.723 12.0164 88.4926 12.2595C88.2622 12.5027 88.0834 12.7901 87.9671 13.1044C87.8507 13.4187 87.7991 13.7534 87.8155 14.0883C87.802 14.4264 87.8563 14.7639 87.9752 15.0806C88.0942 15.3974 88.2753 15.687 88.508 15.9324C88.7406 16.1777 89.02 16.3738 89.3296 16.509C89.6392 16.6443 89.9727 16.7159 90.3105 16.7197C90.6459 16.7201 90.978 16.6522 91.2864 16.5201C91.5948 16.3879 91.8732 16.1944 92.1047 15.9511C92.3361 15.7078 92.5158 15.4199 92.6328 15.1049C92.7498 14.7899 92.8017 14.4544 92.7852 14.1187Z" fill="white"/>
              <path d="M96.5332 16.2542H99.2908V18.9666H96.5332V16.2542Z" fill="white"/>
              <path d="M8.64672 28.5714C6.39506 28.5492 4.23888 27.6568 2.62793 26.0804C1.01698 24.504 0.0756426 22.3652 0.000258689 20.1103C-0.0601214 17.8742 0.739026 15.7003 2.23259 14.0377C1.97546 13.7182 1.74248 13.3799 1.53562 13.0256C0.798144 11.6971 0.419924 10.1986 0.438433 8.67851C0.456941 7.15844 0.871532 5.66962 1.64113 4.35953C2.41073 3.04944 3.50863 1.96358 4.82603 1.20955C6.14342 0.455521 7.63459 0.0594824 9.15177 0.0606913C11.416 0.0507284 13.5932 0.93421 15.2124 2.52007C15.8291 3.10388 16.2555 3.86072 16.4358 4.69144C16.616 5.52216 16.5417 6.38804 16.2225 7.17572C15.9264 7.90959 15.4334 8.5471 14.7982 9.01773C15.5621 9.69077 16.0626 10.6137 16.2106 11.622C16.3586 12.6304 16.1445 13.6587 15.6063 14.5235C15.873 14.8746 16.116 15.2432 16.3336 15.6267C17.0829 16.9537 17.4717 18.4544 17.461 19.979C17.4504 21.5035 17.0407 22.9987 16.2729 24.315C15.5051 25.6313 14.4061 26.7227 13.0856 27.4803C11.7651 28.2379 10.2694 28.635 8.74774 28.6321L8.64672 28.5714ZM8.70733 19.6751C8.67336 19.6751 8.64017 19.6852 8.61193 19.7041C8.5837 19.723 8.56168 19.7499 8.54868 19.7813C8.53568 19.8127 8.53228 19.8473 8.53891 19.8807C8.54553 19.9141 8.56189 19.9447 8.5859 19.9688C8.60992 19.9929 8.64052 20.0093 8.67383 20.0159C8.70714 20.0225 8.74167 20.0191 8.77305 20.0061C8.80442 19.9931 8.83124 19.971 8.85011 19.9427C8.86898 19.9144 8.87904 19.8812 8.87904 19.8471C8.87662 19.8023 8.85776 19.7599 8.82607 19.7282C8.79437 19.6964 8.75208 19.6775 8.70733 19.6751ZM9.15177 8.54205C9.12763 8.54132 9.10359 8.54541 9.08104 8.55409C9.0585 8.56278 9.03789 8.57589 9.02045 8.59264C9.00656 8.63539 9.00656 8.68146 9.02045 8.72422C9.02484 8.76566 9.04329 8.80434 9.0727 8.8338C9.10211 8.86327 9.14071 8.88176 9.18207 8.88616C9.21514 8.89519 9.25002 8.89519 9.28309 8.88616L9.44471 8.76471L9.29319 8.63313C9.27975 8.60755 9.25931 8.58632 9.23426 8.57198C9.20921 8.55763 9.18059 8.55078 9.15177 8.55218V8.54205Z" fill="#1E212B"/>
              <path d="M13.3507 9.78695C12.9066 9.79346 12.477 9.94644 12.1285 10.2222C11.8206 10.4733 11.4569 10.6465 11.0682 10.7272C10.6794 10.8079 10.277 10.7937 9.89489 10.6858C9.51278 10.5779 9.16217 10.3795 8.87268 10.1073C8.58318 9.83511 8.3633 9.49711 8.23158 9.12187C8.09985 8.74662 8.06016 8.34514 8.11586 7.95129C8.17155 7.55744 8.32098 7.1828 8.55155 6.85898C8.78212 6.53517 9.08706 6.27168 9.44063 6.09077C9.79419 5.90986 10.186 5.81684 10.583 5.81956C11.2149 5.81733 11.823 6.06034 12.28 6.49764C12.6474 6.84244 13.1301 7.03735 13.6335 7.04418C14.0218 7.04347 14.4011 6.92724 14.7233 6.71017C15.0455 6.49311 15.2961 6.18503 15.4433 5.82502C15.5905 5.46502 15.6276 5.0693 15.55 4.68811C15.4723 4.30693 15.2834 3.95745 15.0072 3.68402C14.3636 3.05003 13.5936 2.55932 12.7477 2.24393C11.9017 1.92854 10.9989 1.79559 10.0981 1.85377C9.19741 1.91195 8.31909 2.15994 7.52058 2.58155C6.72206 3.00316 6.02134 3.5889 5.46423 4.30046C4.90713 5.01201 4.50618 5.83336 4.2876 6.71082C4.06901 7.58828 4.0377 8.50209 4.19573 9.39249C4.35377 10.2829 4.69757 11.1299 5.20468 11.878C5.71179 12.6262 6.37077 13.2587 7.13855 13.7341C5.88921 14.3901 4.89095 15.4411 4.29877 16.7238C3.70659 18.0065 3.55362 19.4492 3.8636 20.8279C4.17359 22.2066 4.92919 23.4442 6.01309 24.3486C7.09699 25.253 8.44856 25.7735 9.85796 25.8294C11.2674 25.8852 12.6557 25.4733 13.8075 24.6576C14.9593 23.8418 15.8102 22.6678 16.2279 21.3179C16.6456 19.968 16.6068 18.5177 16.1176 17.1922C15.6284 15.8666 14.7161 14.74 13.5224 13.9872C13.9058 13.7845 14.2678 13.5437 14.6032 13.2686C14.9162 13.0113 15.1421 12.6632 15.2497 12.2722C15.3572 11.8811 15.3413 11.4662 15.204 11.0846C15.0667 10.703 14.8148 10.3733 14.4829 10.1409C14.1511 9.90858 13.7555 9.78491 13.3507 9.78695ZM12.5729 19.4221C12.5729 19.9125 12.4278 20.3919 12.1558 20.7997C11.8839 21.2075 11.4974 21.5253 11.0452 21.713C10.593 21.9006 10.0954 21.9498 9.61535 21.8541C9.13529 21.7584 8.69434 21.5223 8.34824 21.1755C8.00214 20.8287 7.76644 20.3869 7.67095 19.9059C7.57546 19.4249 7.62447 18.9263 7.81177 18.4732C7.99908 18.0201 8.31628 17.6328 8.72325 17.3604C9.13022 17.0879 9.60868 16.9425 10.0981 16.9425C10.7545 16.9425 11.384 17.2037 11.8481 17.6687C12.3122 18.1338 12.5729 18.7645 12.5729 19.4221Z" fill="white"/>
            </>
            <defs>
              <clipPath id="clip0_81_1443">
                <rect width="100" height="28.5714" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-6 flex-grow justify-end">
        <a href="#" className="text-black hover:text-purple-700 transition duration-300">LOCATIONS</a>
        <a href="#" className="text-black hover:text-purple-700 transition duration-300">SUPPORT</a>
        <a href="#" className="text-black hover:text-purple-700 transition duration-300">ABOUT</a>
        <a href="/#how-it-works" className="text-black hover:text-purple-700 transition duration-300">HOW IT WORKS?</a>
        <a href="/faq" className="text-black hover:text-purple-700 transition duration-300">FAQ</a>
        <button className="bg-purple-400 text-black px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300">
          <Link href="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">LOCATIONS</a>
            <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">SUPPORT</a>
            <a href="#" className="text-black hover:text-purple-700 py-2 transition duration-300">ABOUT</a>
            <a href="#how-it-works" className="text-black hover:text-purple-700 py-2 transition duration-300">HOW IT WORKS?</a>
            <Link href="/register">
              <button className="bg-purple-400 text-black px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300 w-full max-w-xs mt-4">
                Register
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
</header>

      <main className="container mx-auto p-4">
        <div className="relative overflow-hidden rounded-3xl my-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur-xl"></div>
          <div className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-12">
            <h1 className="text-4xl md:text-6xl font-black text-center leading-tight text-white">
              SHIP TOGETHER, SAVE INDIVIDUALLY :<br />WITH COLLABO
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 my-12">
          <div className="md:w-1/2">
            <motion.div 
              className="bg-purple-300 p-6 rounded-3xl h-full flex flex-col justify-between"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div className="bg-black text-white px-3 py-1 rounded-full text-sm inline-block mb-4">#1</div>
                <h3 className="text-2xl font-bold mt-2">Don&apos;t clear that cart because of the shipping fee: With Collabo </h3>
                <p className="font-bold text-xl mt-2">  You shop and spend then ship and save <br/> Say goodbye to high Shipping fee </p>

              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  <span className="text-4xl font-bold mr-2">Win</span>
                  <span className="text-4xl font-bold text-purple-500">Win</span>
                </div>
                <div className="mt-4">
                  <span className="text-6xl">😊</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div 
              className="bg-yellow-300 p-6 rounded-3xl h-full flex flex-col justify-between relative shadow-xl"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <motion.div
                  className="cursor-pointer mb-8"
                  whileTap={{ scale: 0.9 }}
                  onClick={handleTap}
                >
                  <ShoppingCart size={80} />
                  {showPlus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -10 }}
                      exit={{ opacity: 0 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <Plus size={32} className="text-green-500" />
                    </motion.div>
                  )}
                </motion.div>
                <motion.div
                  className="cursor-pointer bg-white px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 text-xl font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  REGISTER NOW
                </motion.div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  }}
                >
                  <svg width="64" height="64" viewBox="0 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 62C48.5685 62 48.5685 32C62 15.4315 2 32 2C15.4315 32C2 62Z" fill="white"/>
                    <path d="M32 42V22M32 22L22 32M32 22L42 32" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 my-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Why Choose Collabo?</h2>
            <p className="text-xl mb-8">With our group based approach to Shipping, shopping both in bulk and individually has never been cheaper</p>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-6xl font-bold">4.9</span>
                <Star className="text-yellow-400" size={40} fill="currentColor" />
              </div>
              <p className="mt-4 font-bold text-xl">#satisfied users worldwide</p>
              <div className="mt-4 flex space-x-2">
                <span className="text-4xl">😊</span>
                <span className="text-4xl">😊</span>
                <span className="text-4xl">😊</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <ul className="space-y-6">
              {[
                { icon: "💸", title: "Save on Delivery", description: "Split shipping costs with nearby users and maximize savings." },
                { icon: "👥", title: "Group Purchases", description: "Easily share cart items and costs with friends or new connections." },
                { icon: "🤝", title: "Connect with Locals ", description: "Match with others in your area for joint deliveries and savings." },
                { icon: "🔒", title: "Secure & Convenient", description: "Effortless, secure transactions and real-time updates on group orders." },
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-white rounded-xl p-4 shadow-md">
                  <span className="text-4xl mr-4">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section id="how-it-works" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎮", title: "Find Your Shopping Crew", description: "Add items to your cart, and Collabo pairs you with others nearby who want to place an order on the same site." },
              { icon: "💰", title: "Split the Shipping", description: "We divide the shipping cost among everyone in the group, letting you pay less for delivery.The more people, the bigger the savings!" },
              { icon: "🚀", title: "Save", description: "Confirm your group order, and Collabo handles payments and updates. Enjoy fast, affordable shipping while saving big with your team!." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10">Delivery to your doorstep?</h2>

        </section>

        <section id="location" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10">The catch?</h2>

        </section>

        <section id="Support" className="my-20 bg-white rounded-3xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-10"> Want to be a beta tester? </h2>

        </section>

        <section className="my-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start?</h2>
          <button className="bg-purple-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-purple-600 transition duration-300 shadow-lg">
            Join Collabo Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Collabo</h3>
              <p>Revolutionizing Community shopping.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Home</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Developer</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Discord</a></li>
                <li><a href="#" className="hover:text-purple-400 transition duration-300">Telegram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Collabo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}