"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/UTalent-DarkBlue.png";
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function studentemployersignup() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-error-100 dark:bg-error-black">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl">
          <h1 className="pt-40 text-2xl pl-10 dark:text-error-200">
            Are you a Student or Employer?
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="pt-10 pl-10 flex">
              <div className="pr-10">
                <Link href="/signupStudent" legacyBehavior passHref>
                  <Button className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12 w-36">
                    Student
                  </Button>
                </Link>
              </div>
              <Link href="/signupEmployer" legacyBehavior passHref>
                <Button className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12 w-36">
                  Employer
                </Button>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end items-start w-full md:w-1/2">
              <Image
                src={theme === "dark" ? logoDark : logo}
                width="350"
                height="350"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
