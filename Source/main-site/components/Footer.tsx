import Link from "next/link";
import React from "react";
import { LogosBluesky, LogosX } from "./logos/Logos";
import { TwemojiRedHeart } from "./logos/Icons";

function Footer() {
  return (
    <div className="md:h-[400px] h-full border-t animation-duration-[3.5s] fade-in flex flex-col animate-in dark:bg-secondary/10 bg-neutral-200/60">
      <div className="container h-min mx-auto pt-4 px-4 grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 my-auto gap-x-4 gap-y-6">
        <span className="flex flex-col">
          <h1 className="font-black text-2xl">The Legal Side</h1>
          <hr></hr>
          <ul className="list-inside mt-4">
            <li className="list-item">
              <Link href="#tos">Terms & Conditions</Link>
            </li>
            <li className="list-item">
              <Link href="#privacy">Privacy Policy</Link>
            </li>
            <li className="list-item">
              <Link href="#gdpr">GDPR Compliance</Link>
            </li>
          </ul>
        </span>
        <span className="flex flex-col">
          <h1 className="font-black text-2xl text-center">The Useful Side</h1>
          <hr></hr>
          <ul className="list-inside text-center mt-4">
            <li className="list-item">
              <Link href="/#pricing">Our Pricing Options</Link>
            </li>
            <li className="list-item">
              <Link href="/register">Register</Link>
            </li>
            <li className="list-item">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </span>
        <span className="flex flex-col">
          <h1 className="font-black text-2xl text-end">The Social Side</h1>
          <hr></hr>
          <ul className="list-inside text-center flex justify-end gap-x-6 mt-4">
            <li className="list-item">
              <Link href="#">
                <LogosX className="dark:fill-white" />
              </Link>
            </li>
            <li className="list-item">
              <Link href="#">
                <LogosBluesky />
              </Link>
            </li>
          </ul>
        </span>
      </div>
      <p className="text-center mb-1 flex items-center gap-x-2 mx-auto">
        Copyright &copy; {new Date().getFullYear()}
      </p>
      <p className="mx-auto flex gap-x-2 mb-2 items-center">
        Made with
        <TwemojiRedHeart className="hover:cursor-pointer hover:animate-spin" />
      </p>
    </div>
  );
}

export default Footer;
