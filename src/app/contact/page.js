"use client";

import React, { useEffect, useState } from "react";
import { NavigationMenuStudentLoggedIn } from "@/components/navbar/navloggedinStudent";
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import logo2 from "../../../public/images/UTalent-DarkBlue.png";
import Link from "next/link";
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
import { NavigationMenuDemoFooter } from "@/components/navbar/navfooter";
import { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader2 } from "lucide-react";
export default function Page() {
  const [role, setRole] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const auth = getAuth();

  useEffect(() => {
      const fetchUserRole = onAuthStateChanged(auth, (user) => {
          if (user) {
              const uid = user.uid;
              const userRef = doc(db, "users", uid);
              getDoc(userRef)
                  .then((docSnap) => {
                      if (docSnap.exists()) {
                          const userData = docSnap.data();
                          setRole(userData.role); // Set fetched data into userDetails
                      } else {
                          console.log("No such document!");
                      }
                  })
                  .catch((error) => {
                      console.log("Error getting document:", error);
                  });
          }
      });
      return () => fetchUserRole();
  }, []);
  useEffect(() => {
      const fetchUserUid = onAuthStateChanged(auth, (user) => {
          if (user) {
              const uid = user.uid;
              const userRef = doc(db, "users", uid);
              getDoc(userRef)
                  .then((docSnap) => {
                      if (docSnap.exists()) {
                          const userData = docSnap.data();
                          setUserUid(userData.uid); // Set fetched data into userDetails
                      } else {
                          console.log("No such document!");
                      }
                  })
                  .catch((error) => {
                      console.log("Error getting document:", error);
                  });
          }
      });
      return () => fetchUserUid();
  }, []);
  return (
    <><div className="dark:bg-error-black">
        <nav className="bg-error-100 h-20 sticky top-0 z-40 dark:bg-error-black">
          <div className="flex items-center justify-between h-full">
            <div>
            {role === null ? (
                                    <Link href="/" legacyBehavior passHref>
                                        <Image
                                            src={logo}
                                            width="150"
                                            height="150"
                                            alt="logo"
                                            className="cursor-pointer"
                                        ></Image>
                                    </Link>
                                ) : role === "Student" ? (
                                    <Link
                                        href="/loggedinStudent"
                                        legacyBehavior
                                        passHref
                                    >
                                        <Image
                                            src={logo}
                                            width="150"
                                            height="150"
                                            alt="logo"
                                            className="cursor-pointer"
                                        ></Image>
                                    </Link>
                                ) : (
                                    <Link
                                        href="/loggedInEmployer"
                                        legacyBehavior
                                        passHref
                                    >
                                        <Image
                                            src={logo}
                                            width="150"
                                            height="150"
                                            alt="logo"
                                            className="cursor-pointer"
                                        ></Image>
                                    </Link>
                                )}
            </div>
            <div className="flex justify-end flex-grow">
              <NavigationMenuStudentLoggedIn />
            </div>
          </div>
        </nav>

      <div className="flex flex-col items-center justify-center mt-32">
        <h2 className="text-center text-error-black text-5xl font-bold dark:text-error-white">Contact Us</h2>
        <div className="w-[30vw] max-w-2xl h-[0.3vw] bg-error-300 rounded-lg mt-5"></div>
      </div>

      <div className="grid grid-cols-6 mt-10 gap-16">
        <div></div>
        <div>
        <Image src={zachabout} alt="Zach"></Image>
        <div className="mt-2 sm:text-[4px] md:text-[10px] lg:text-sm xl:text-base">zacharygilbert@utalent.com</div>
        </div>
        <div>
        <Image src={michaelabout} alt="Michael"></Image>
        <div className="mt-2 sm:text-[4px] md:text-[10px] lg:text-sm xl:text-base">michaelchagnon@utalent.com</div>
        </div>
        <div>
        <Image src={amanabout} alt="Aman"></Image>
        <div className="mt-2 sm:text-[4px] md:text-[10px] lg:text-sm xl:text-base">amanbhagat@utalent.com</div>
        </div>
        <div>
        <Image src={alexabout} alt="Alex"></Image>
        <div className="mt-2 sm:text-[4px] md:text-[10px] lg:text-sm xl:text-base">alexkashian@utalent.com</div>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12">
        <div className="w-[30vw] max-w-2xl h-[0.3vw] bg-error-300 rounded-lg mt-5"></div>
      </div>

      {/* <div>
        <Link href="/loggedInEmployer" legacyBehavior passHref>
          <Image src={logo2} width="150" height="150" alt="logo" className="cursor-pointer"></Image>
        </Link>
      </div> */}

      <div className="grid grid-cols-5 mt-6 gap-16">
        <div></div>
        <div></div>
        <div className="text-center ">contact@utalent.com</div>
        <div></div>
        <div></div>
      </div>


      <footer className="h-20 w-full relative bottom-0 dark:bg-error-black bg-error-reallyDarkBlue">
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
