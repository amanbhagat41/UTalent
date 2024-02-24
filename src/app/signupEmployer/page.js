"use client"

import React from "react";
import Image from "next/image";
import logo from "../../../public/images/UTalent-DarkBlue.png";
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import { collection, addDoc, doc, setDoc} from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function signupEmployer() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const auth = getAuth();
  const [user, setUser] = useState({
    email: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    role: "Employer"
  })

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const onSignUpSubmit = async(e) =>{
    e.preventDefault()
    if (!user.email || !user.companyName || !user.password || !user.confirmPassword) {
      console.log("All fields are required");
      return;
    }
    // Validate if passwords match
    if (user.password !== user.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const userauth = userCredential.user;
        const data =  {
          uid: userauth.uid,
          email: user.email,
          companyName: user.companyName,
          role: user.role,
        }
        const docRef = setDoc(doc(db, "users", userauth.uid), data)
      .finally(()=> {
        console.log("User written with ID: ", docRef.id);
        router.push("/loggedInEmployer")
      });

      })
      // const user = userCredential.user;
      // console.log(user);
      // const docRef = await addDoc(collection(db, "users"), {
      //   email: user.email,
      //   password: user.password,
      //   companyName: user.companyName,
      //   role: user.role,
      // });
      // console.log("User written with ID: ", docRef.id);

  } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  }
    console.log(user)
  }



  return (
    <div className="bg-error-100 dark:bg-error-black">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl">
          <h1 className="pt-20 text-2xl pl-10 dark:text-error-200">
            Create an Account
          </h1>
          <div className="flex flex-col md:flex-row">
            <form onSubmit={onSignUpSubmit} className="w-full md:w-1/2">
              <label htmlFor="cName" className="flex pt-10 pl-10">
                Company Name
              </label>
              <div className="flex pl-10">
                <input
                  type="text"
                  id="cName"
                  name="companyName"
                  value={user.companyName}
                  onChange={onInputChange}
                  className="border border-gray-400 border-opacity-35 rounded-xl text-center h-8 w-full"
                />
              </div>
              <label htmlFor="cEmail" className="flex pt-4 pl-10">
                Email
              </label>
              <div className="pl-10 min-w-fit">
                <input
                  type="email"
                  id="cEmail"
                  name="email"
                  value={user.email}
                  onChange={onInputChange}
                  className="border border-gray-400 border-opacity-35 rounded-xl text-center h-8 w-full"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="cPassword" className="pt-6 pl-10">
                  Password
                </label>
                <label
                  htmlFor="cConfirmPassword"
                  className="pt-4 pl-10 md:pl-36"
                >
                  Confirm Password
                </label>
                <div className="flex pl-10">
                  <input
                    type="password"
                    id="cPassword"
                    name="password"
                    value={user.password}
                    onChange={onInputChange}
                    className="border border-gray-400 border-opacity-35 rounded-xl text-center h-8 w-full md:w-2/3 mr-10"
                  />
                  <input
                    type="password"
                    id="cConfirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={onInputChange}
                    className="border border-gray-400 border-opacity-35 rounded-xl text-center h-8 w-full md:w-2/3"
                  />
                </div>
              </div>
              <div className="pt-10 pl-10 flex">
                <Button type="submit" id="signUp" className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12">
                  Sign Up
                </Button>
              </div>
              <div>
                <div className="pl-10 text-sm pt-4">
                  Already have an account? <Link
                    href="/login"
                    legacyBehavior
                    passHref
                    className="text-error-300">
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
            <div className="flex justify-center md:justify-end items-start w-full md:w-1/2">
            <Image src={theme === 'dark' ? logoDark : logo} width="350" height="350" alt="logo" priority />
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
  
}

