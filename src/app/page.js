import React from "react";
import { NavigationMenuDemo } from "@/components/nav";
import Image from "next/image";
import logo from "../../public/images/logo-no-bg.png";
import { CarouselDemo } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemoFooter } from "@/components/navfooter";
export default function Page() {
  return (
    <>
      <nav className="bg-error-100 h-20 sticky top-0">
        <div className="flex items-center justify-between h-full">
          <div>
            <Image src={logo} width="150" height="150" alt="logo"></Image>
          </div>
          <div className="flex justify-end flex-grow">
            <NavigationMenuDemo />
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </nav>
      <div>
        <div>
        <h1 className="flex justify-center text-5xl	mt-5">Empowering Student</h1>
        <h1 className="flex justify-center text-5xl	mt-5">Freelance Talent</h1>
        </div>
        <div>
        <h3 className="flex justify-center text-xl	mt-5">Join our vibrant student freelance community today</h3>
        <h3 className="flex justify-center text-xl">and unlock endless opportunities to showcase your</h3>
        <h3 className="flex justify-center text-xl">skills and grow your career!</h3>
        </div>
        <div className="flex justify-center pt-5">
          <Link href="/signup" legacyBehavior passHref>
          <Button className='bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12'>Get Started</Button>
          </Link>
        </div>
      </div>
      <div className="pt-14 flex items-center justify-center">
        <CarouselDemo></CarouselDemo>
      </div>
      <div>
        <footer className="bg-error-100 h-20 w-full absolute left-0 bottom-0">
        <div className="flex items-center justify-between h-full">
          <h4 className="text-2xl text-error-200 ml-8">UTalent</h4>
          {/* <h4 className="flex justify-end flex-grow"></h4> */}
          <div className="flex justify-end flex-grow mr-10  ">
          <NavigationMenuDemoFooter ></NavigationMenuDemoFooter>
          </div>
          </div>
        </footer>
      </div>
    </>
  );
}
