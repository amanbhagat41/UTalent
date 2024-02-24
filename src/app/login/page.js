"use client"

import React from "react";
import Image from "next/image";
import logo from "../../../public/images/UTalent-DarkBlue.png";
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { collection, getDoc, doc} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function login() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const auth = getAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  const onLoginSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      console.log("All fields are required");
      return;
    }
    try {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const docRef = collection(db, "users");
          const userDocRef = doc(docRef, user.uid);
          getDoc(userDocRef).then((doc) => {
            if (doc.exists) {
              // console.log(docRef)
              // console.log(userDocRef)
              // console.log(doc)
              const userData = doc.data();
              const role = userData.role;
              console.log(userData)
              console.log(role)
              if (role === "Student") {
                router.push("/loggedinStudent");
              } else if (role === "Employer") {
                router.push("/loggedInEmployer");
              }
            } else {
              console.log("No such document!");
            }
          }).catch((error) => {
            console.log("Error getting document:", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorMessage);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-error-100 dark:bg-error-black">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl">
          <h1 className="pt-20 text-2xl pl-10 dark:text-error-200">
            Login
          </h1>
          <div className="pl-10 text-sm">
                  Don't Have An Account? <Link
                    href="/student-employersignup"
                    legacyBehavior
                    passHref
                    className="text-error-300">
                    Signup
                  </Link>
                </div>
          <div className="flex flex-col md:flex-row">
            <form onSubmit={onLoginSubmit} className="w-full md:w-1/2 pt-8">
              <label htmlFor="email" className=" pt-10 pl-10">
                Email
              </label>
              <div className="flex pl-10">
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={onInputChange}
                  className="border border-gray-400 border-opacity-35 rounded-xl text-center h-8 w-full"
                />
              </div>
              <label htmlFor="password" className="flex pt-4 pl-10">
                Password
              </label>
              <div className="pl-10 min-w-fit">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={onInputChange}
                  className="border border-gray-400 border-opacity-35 rounded-xl text-center h-8 w-full"
                />
              </div>
              <div className="pt-10 pl-10 flex justify-center">
                <Button type="submit" id="login" className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12">
                  Sign Up
                </Button>
              </div>
            </form>
            <div className="flex justify-center md:justify-end items-start w-full md:w-1/2">
            <Image src={theme === 'dark' ? logoDark : logo} width="350" height="350" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
  
}

