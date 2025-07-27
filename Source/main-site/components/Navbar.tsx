"use client";

import {
  CreditCardIcon,
  MenuSquareIcon,
  User2Icon,
  UserPlus2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Settings from "./Settings";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import About from "./About";

function Navbar() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="sticky top-0 z-10 bg-background flex w-screen border-b p-6 animation-duration-[3s] fade-in animate-in max-h-[84px] overflow-y-hidden">
      <div className="container flex items-center justify-between mx-auto gap-6">
        <span className="w-max">
          <Link
            href="/"
            className="font-black text-2xl truncate flex gap-x-4 items-center"
          >
            <Image
              src={"/Linkient Logo - No Background.png"}
              alt="logo"
              width={256}
              height={64}
            />
          </Link>
        </span>

        <span className="w-full justify-self-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"} className="float-end">
                <MenuSquareIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="z-100">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Found what you are looking for?
                </SheetDescription>
              </SheetHeader>
              <ul className="flex flex-col gap-4 w-full">
                <li className="mx-4">
                  <Link href="/#pricing" className="w-full">
                    <Button
                      variant={"outline"}
                      className="flex w-full gap-x-2 items-center hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-all"
                    >
                      <CreditCardIcon /> Pricing
                    </Button>
                  </Link>
                </li>
                <li className="mx-4">
                  <Link href="/login" className="w-full">
                    <Button
                      variant={"outline"}
                      className="flex w-full gap-x-2 items-center hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-all"
                    >
                      <User2Icon /> Login
                    </Button>
                  </Link>
                </li>
                <li className="mx-4">
                  <Link href="register" className="w-full">
                    <Button
                      variant={"outline"}
                      className="flex gap-x-2 w-full items-center hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-all"
                    >
                      <UserPlus2Icon /> Register
                    </Button>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </span>
      </div>
    </div>
  ) : (
    <div className="sticky top-0 z-10 bg-background flex w-screen border-b p-6 animation-duration-[3s] fade-in animate-in max-h-[84px] overflow-y-hidden">
      <div className="container flex items-center justify-between mx-auto gap-6">
        <span className="w-max">
          <Link
            href="/"
            className="font-black text-2xl truncate flex gap-x-4 items-center"
          >
            <Image
              src={"/Linkient Logo - No Background.png"}
              alt="logo"
              width={256}
              height={64}
            />
          </Link>
        </span>

        <span className="block w-full justify-self-center">
          <ul className="hidden md:flex gap-x-4 w-full justify-evenly">
            <li>
              <Link href="/#pricing">
                <Button
                  variant={"ghost"}
                  className="flex gap-x-2 items-center hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-all"
                >
                  <CreditCardIcon /> Pricing
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <Button
                  variant={"ghost"}
                  className="flex gap-x-2 items-center hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-all"
                >
                  <User2Icon /> Login
                </Button>
              </Link>
            </li>
            <li>
              <Link href="register">
                <Button
                  variant={"ghost"}
                  className="flex gap-x-2 items-center hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-all"
                >
                  <UserPlus2Icon /> Register
                </Button>
              </Link>
            </li>
          </ul>
        </span>

        <span className="hidden md:flex w-max justify-evenly">
          <Settings />
          <About />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
