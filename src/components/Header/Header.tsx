"use client";

import { useState } from "react";

import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

import useScreenSize from "@/hooks/useScreenSize";

export default function Header() {
  const screenSize = useScreenSize();


  return (
    <div className="p-4">
      <div className="flex justify-between max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex justify-center items-center">
          {screenSize === "large" && <Nav />}
          {(screenSize === "small" || screenSize === "medium") && <Hamburger />}
        </div>
      </div>
    </div>
  );
}
