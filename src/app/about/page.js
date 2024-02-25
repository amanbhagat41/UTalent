import React from "react";

import { NavigationMenuStudentLoggedIn } from "@/components/navloggedinStudent";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import section1 from "../../../public/images/about/Section1Picture.png";
import section2 from "../../../public/images/about/Section2Picture.png";
import section3 from "../../../public/images/about/Section3Picture.png";
import zachabout from "../../../public/images/about/ZacharyAbout.png"
import amanabout from "../../../public/images/about/AmanAbout.png"
import michaelabout from "../../../public/images/about/MichaelAbout.png"
import alexabout from "../../../public/images/about/AlexAbout.png"
import specializework from "../../../public/images/about/specializedWorkLogo.png"
import reliablework from "../../../public/images/about/reliableWorkLogo.png"
import earlyinvestment from "../../../public/images/about/earlyInvestmentLogo.png"
import banner from "../../../public/images/about/university-massachusetts-lowell.jpg"
import { NavigationMenuDemoFooter } from "@/components/navfooter";
export default function Page() {
  return (
    <><div className="dark:bg-error-black">
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
        <section className="relative flex items-center justify-center h-auto py-24">
            <Image className="absolute inset-0 w-full h-full object-cover blur-md" src={banner}></Image>
            <div class="z-10">
                <h1 className="text-error-white text-[10vw] text-center">About Us</h1>
                <p className="text-center text-error-white w-[40vw] font-bold">
                    We are looking to revolutionize the Freelance market  for college students in hopes of growing their skills, improving portfolios, and giving real-world applications in their respective fields. With UTalent younger generations are given an new opportunity.
                </p>
            </div>
        </section>
        <div className="flex flex-col w-full items-center">
    <h1 className="text-center text-error-black mt-12 text-5xl font-bold dark:text-error-white">
        Changing the job market for Companies and Students
    </h1>

          <div className="flex flex-col md:flex-row items-center justify-center mt-32">
              <div className="flex-1 flex justify-center md:justify-start md:pl-6 w-[30vw] mr-44">
                  <div>
                      <h2 className="text-4xl font-semibold text-start mb-10">Creating a New <br></br>Opportunity for Students</h2>
                      <div className="w-[20vw] h-[.3vw] -mt-5 bg-error-300 rounded-lg float-left"></div>
                      <p className="text-3xl font-light">We provide students with an alternative option to typical work experiences. With a network of employers seeking various projects, we provide students with opportunities tailored to their skills and interests.</p>
                  </div>
              </div>
              <Image src={section1} className="md:w-100 object-cover"></Image>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-32">
            <Image src={section2} className="md:w-100 object-cover"></Image>
              <div className="flex-1 flex justify-center md:justify-start md:pl-6 w-[30vw] ml-44">
                  <div>
                      <h2 className="text-4xl font-semibold text-end mb-10"> A place for employers eager to <br></br>tap into fresh, innovative talent.</h2>
                      <div className="w-[20vw] h-[.3vw] -mt-5 bg-error-300 rounded-lg float-right"></div>
                      <p className="text-3xl font-light text-end">UTalent streamlines the process of connecting with motivated and skilled students, inspiring collaborations that create innovation and success. Employers are given an opportunity to invest in young talent in a low risk manner.</p>
                  </div>
              </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-32">
              <div className="flex-1 flex justify-center md:justify-start md:pl-6 w-[30vw] mr-44">
                  <div>
                      <h2 className="text-4xl font-semibold text-start mb-10">A Glimpse Into an <br></br>Alternative to Traditional Work </h2>
                      <div className="w-[20vw] h-[.3vw] -mt-5 bg-error-300 rounded-lg float-left"></div>
                      <p className="text-3xl font-light">UTalent offers students an alternative to traditional employment, empowering them to take control of their work experience and schedule. Giving the ability to explore diverse projects that align with their skills and interests.</p>
                  </div>
              </div>
              <Image src={section3} className="md:w-100 object-cover"></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-32">
      </div>
      <div className="flex flex-col items-center justify-center mt-32">
          <h2 className="text-center text-error-black text-5xl font-bold dark:text-error-white">Founders</h2>
          <div className="w-[30vw] max-w-2xl h-[0.3vw] bg-error-300 rounded-lg mt-5"></div>
      </div>

      <div className="grid grid-cols-8 mt-10 gap-16">
        <div></div>
        <div></div>
        <Image src={zachabout} class=""></Image>
        <Image src={michaelabout} class=""></Image>
        <Image src={amanabout} class=""></Image>
        <Image src={alexabout} class=""></Image>
        <div></div>
        <div></div>
      </div>

      <div className="flex flex-col items-center justify-center mt-32">
          <h2 className="text-center text-error-black text-5xl font-bold dark:text-error-white">Why it works</h2>
          <div className="w-[30vw] max-w-2xl h-[0.3vw] bg-error-300 rounded-lg mt-5"></div>
      </div>

      <div className="grid grid-cols-7 mt-10 gap-16 mb-40">
        <div></div>
        <div></div>
        <div>
          <Image src={specializework} class="m-auto"></Image>
          <h1 className="text-center text-2xl font-bold mt-4">Specialized Work</h1>
          <p className="text-center mt-2 text-xl">Students can apply themselves to jobs that they are interested in and companies can select candidates that fit their needs.</p>
        </div>
        <div>
          <Image src={reliablework} class="m-auto"></Image>
          <h1 className="text-center text-2xl font-bold mt-4">Reliable Work</h1>
          <p className="text-center mt-2 text-xl">Requiring University verified accounts gives companies confidence in their selection for freelance work.</p>
        </div>
        <div>
          <Image src={earlyinvestment} class="m-auto"></Image>
          <h1 className="text-center text-2xl font-bold mt-4">Early Investment</h1>
          <p className="text-center mt-2 text-xl">By creating early connections with fresh talent companies increase their reach to a new generation of driven workers.</p>
        </div>
        <div></div>
      </div>

      <footer className="h-20 w-full sticky bottom-0 dark:bg-error-black bg-error-reallyDarkBlue">
          <div className="flex items-center justify-between h-full">
            <h4 className="text-3xl text-error-200 ml-8 font-extrabold">UTalent</h4>
            <div className="flex justify-end flex-grow mr-10">
              <NavigationMenuDemoFooter></NavigationMenuDemoFooter>
            </div>
          </div>
        </footer>
        
        </div>
    </>
  );
}
