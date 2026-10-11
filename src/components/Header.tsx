
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.png";

// Keep your existing navLink styling if you already have one.
const navLink =
  "text-sm font-semibold uppercase tracking-wider text-[#211d23] no-underline transition-colors duration-200 hover:text-[#765080]";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const closeMenu = () => setIsOpen(false);

  // Close menu when clicking or tapping outside the navigation.
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent | TouchEvent) {
      if (
        navRef.current &&
        event.target instanceof Node &&
        !navRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-[rgba(125,88,148,0.18)] bg-[rgba(247,242,238,0.86)] shadow-[0_8px_26px_rgba(45,31,54,0.08)] backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[104px] w-[calc(100%-2rem)] max-w-[1180px] items-center justify-between gap-4 max-[680px]:min-h-0 max-[680px]:py-3">

        {/* Brand */}
        <a
          href="/"
          aria-label="Serenity home"
          className="group inline-flex items-center gap-4 no-underline max-[680px]:gap-3"
        >
          <img
            src={logo}
            alt="Serenity logo"
            className="h-[72px] w-[72px] object-contain drop-shadow-[3px_5px_7px_rgba(45,31,54,0.18)] transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-[1.04] max-[680px]:h-14 max-[680px]:w-14"
          />

          <div className="flex flex-col gap-[0.2rem] pt-[0.15rem]">
            <span className="font-['Cormorant_Garamond'] text-[2rem] font-semibold uppercase leading-[0.8] tracking-[0.12em] text-[#211d23] min-[481px]:text-[clamp(2rem,4vw,3rem)] max-[680px]:text-[1.7rem]">
              Serenity
            </span>

            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#765080] max-[680px]:text-[0.53rem] max-[680px]:tracking-[0.12em]">
              Decor &amp; Events Planning
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav
          ref={navRef}
          aria-label="Primary navigation"
          className="relative flex items-center justify-end"
        >
          {/* Hamburger button: mobile only */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="primary-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="hidden rounded-md p-2 text-[#70517b] transition-colors hover:bg-purple-100 max-[680px]:flex"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          {/* Navigation links */}
          <div
            id="primary-menu"
            className={`
              flex items-center justify-end gap-[1.45rem]
              max-[680px]:absolute max-[680px]:right-0 max-[680px]:top-full
              max-[680px]:z-50 max-[680px]:w-56 max-[680px]:flex-col
              max-[680px]:items-stretch max-[680px]:gap-0
              max-[680px]:rounded-lg max-[680px]:border
              max-[680px]:border-[rgba(125,88,148,0.18)]
              max-[680px]:bg-white max-[680px]:p-2
              max-[680px]:shadow-lg
              ${isOpen ? "max-[680px]:flex" : "max-[680px]:hidden"}
            `}
          >
            <a
              href="#about"
              onClick={closeMenu}
              className={`${navLink} max-[680px]:rounded-xl max-[680px]:p-3 max-[680px]:hover:bg-purple-100`}
            >
              About
            </a>

            <a
              href="#menu"
              onClick={closeMenu}
              className={`${navLink} max-[680px]:rounded-xl max-[680px]:p-3 max-[680px]:hover:bg-purple-100`}
            >
              Menu
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className={`${navLink} max-[680px]:rounded-xl max-[680px]:p-3 max-[680px]:hover:bg-purple-100`}
            >
              Services
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className={`${navLink} max-[680px]:rounded-xl max-[680px]:p-3 max-[680px]:hover:bg-purple-100`}
            >
              Gallery
            </a>

            <a
              href="#brands"
              onClick={closeMenu}
              className={`${navLink} max-[680px]:rounded-xl max-[680px]:p-3 max-[680px]:hover:bg-purple-100`}
            >
              Brands
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="whitespace-nowrap rounded-full bg-[#70517b] px-4 py-[0.7rem] text-center text-[0.75rem] font-bold uppercase tracking-[0.06em] text-white no-underline transition-colors duration-200 hover:bg-[#211d23] max-[680px]:mt-2"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
