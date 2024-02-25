import React from "react";

import { NavigationMenuStudentLoggedIn } from "@/components/navloggedinStudent";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import section1 from "../../../public/images/Section1Picture.png";
import section2 from "../../../public/images/Section2Picture.png";
import section3 from "../../../public/images/Section3Picture.png";
import banner from "../../../public/images/university-massachusetts-lowell.jpg"

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-screen dark:bg-error-black">
        <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
          <div className="flex items-center justify-between h-full">
            <div>
              <Image src={logo} width="150" height="150" alt="logo" ></Image>
            </div>
            <div className="flex justify-end flex-grow">
              <NavigationMenuStudentLoggedIn />
            </div>
            <div className="w-10 h-10"></div>
          </div>
        </nav>
        <section class="relative flex items-center justify-center h-auto py-24">
            <Image className="absolute inset-0 w-full h-full object-cover blur-md" src={banner}></Image>
            <div class="z-10">
                <h1 className="text-error-white text-[10vw] text-center">About Us</h1>
                <p className="text-center text-error-white w-[40vw] font-bold">
                    We are looking to revolutionize the Freelance market  for college students in hopes of growing their skills, improving portfolios, and giving real-world applications in their respective fields. With UTalent younger generations are given an new opportunity.
                </p>
            </div>
        </section>
        <div class="flex flex-col w-full items-center">
            <h1 class="text-center text-error-black mt-10 text-[3vw] font-bold">
                Changing the job market for Companies and Students
            </h1>

            <div class="flex flex-col md:flex-row items-center my-8">
                 <div class="md:w-1/2 md:pl-6">
                    <h2 class="text-lg font-semibold">Creating a New Opportunity for Students</h2>
                    <p>We provide students with an alternative option to typical work experiences. With a network of employers seeking various projects we provide students with opportunities tailored to their skills and interests.</p>
                </div>
                <Image src={section1} class="md:w-1/3 object-cover"></Image>
            </div>

            <div class="flex flex-col md:flex-row items-center my-8">
                <Image src={section2} class="md:w-1/3 object-cover"></Image>
                <div class="md:w-1/2 md:pl-6">
                    <h2 class="text-lg font-semibold"> A place for employers eager to tap into fresh, innovative talent.</h2>
                    <p>UTalent streamlines the process of connecting with motivated and skilled students, inspiring collaborations that create innovation and success. Employers are given an opportunity to invest in young talent in a low risk manner.</p>
                </div>
            </div>

            <div class="flex flex-col md:flex-row items-center my-8">
                <div class="md:w-1/2 md:pl-6">
                    <h2 class="text-lg font-semibold">A Glimpse Into an Alternative to Traditional Work </h2>
                    <p>UTalent offers students an alternative to traditional employment, empowering them to take control of their work experience and schedule. Giving the ability to explore diverse projects that align with their skills and interests.</p>
                </div>
                <Image src={section3} class="md:w-1/3 object-cover"></Image>
            </div>
        </div>





      </div>


    </>
  );
}
