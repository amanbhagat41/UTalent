import React from "react";
import { NavigationMenuDemo } from "@/components/navbar/navhomepage";
import Image from "next/image";
import logo from "../../public/images/logo-no-bg.png";
import { CarouselDemo } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen dark:bg-error-black">
        <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
          <div className="flex items-center justify-between h-full">
            <div>
            <Link href="/loggedInEmployer" legacyBehavior passHref>
              <Image src={logo} width="150" height="150" alt="logo"></Image>
            </Link>
            </div>
            <div className="flex justify-end flex-grow">
              <NavigationMenuDemo />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>

        {/* Main content container */}
        <div className="flex-grow">
          <div>
            <h1 className="flex justify-center text-5xl mt-5">Empowering Student</h1>
            <h1 className="flex justify-center text-5xl mt-5">Freelance Talent</h1>
          </div>
          <div>
            <h3 className="flex justify-center text-xl mt-5">Join our vibrant student freelance community today</h3>
            <h3 className="flex justify-center text-xl">and unlock endless opportunities to showcase your</h3>
            <h3 className="flex justify-center text-xl">skills and grow your career!</h3>
          </div>

          <div className="flex justify-center pt-5">
            <Link href="/student-employersignup" legacyBehavior passHref>
              <Button className='bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12 dark:text-error-200'>Get Started</Button>
            </Link>
          </div>

          <div className="pt-14 flex items-center justify-center mb-10 z-0">
            <CarouselDemo></CarouselDemo>
          </div>
        </div>

       
      </div>
      <footer className="bg-error-100 h-20 w-full sticky bottom-0 dark:bg-error-black">
          <div className="flex items-center justify-between h-full">
            <h4 className="text-2xl text-error-200 ml-8">UTalent</h4>
            <div className="flex justify-end flex-grow mr-10">
              <NavigationMenuDemoFooter></NavigationMenuDemoFooter>
            </div>
          </div>
        </footer>
    </>
  );
}
