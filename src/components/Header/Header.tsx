"use client";

import { useState, useEffect } from "react";

import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MobileMenu from "../MobileMenu/MobileMenu";

import useScreenSize from "@/hooks/useScreenSize";

export default function Header() {
  const screenSize = useScreenSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (screenSize === "large") {
      setIsOpen(false);
    }
  }, [screenSize]);

  return (
    <>
      <div className="p-4 sticky top-0 bg-white z-10 w-full shadow-sm">
        <div className="flex justify-between container mx-auto">
          <Logo />
          <div className="flex justify-center items-center">
            {screenSize === "large" && <Nav direction="row" />}
            {(screenSize === "small" || screenSize === "medium") && (
              <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            )}
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </>
  );
}
