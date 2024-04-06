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
import { db } from "../../firebaseKey";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignupEmployer() {
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
          <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-2 w-full h-full">
                  <div className="flex flex-col p-4 justify-center">
                      <div className="flex flex-col p-4 gap-4">
                          <h1 className="text-center text-3xl font-bold mb-8">Create an Account</h1>
                          <form onSubmit={onSignUpSubmit} className="w-full">
                              <div className="mb-4">
                                  <label htmlFor="cName" className="">
                                      Company Name
                                  </label>
                                  <input
                                      type="text"
                                      id="cName"
                                      name="companyName"
                                      value={user.companyName}
                                      onChange={onInputChange}
                                      className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                  />
                              </div>  
                              <div className="mb-4">
                                  <label htmlFor="cEmail" className="">
                                      Email
                                  </label>
                                  <input
                                      type="text"
                                      id="cEmail"
                                      name="email"
                                      value={user.email}
                                      onChange={onInputChange}
                                      className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                  />
                              </div>
                              <div className="mb-4">
                                  <label htmlFor="cPassword" className="">
                                      Password
                                  </label>
                                  <input
                                      type="password"
                                      id="cPassword"
                                      name="password"
                                      value={user.password}
                                      onChange={onInputChange}
                                      className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                  />
                              </div>
                              <div className="mb-8">
                                  <label htmlFor="cConfirmPassword" className="">
                                      Confirm Password
                                  </label>
                                  <input
                                      type="password"
                                      id="cConfirmPassword"
                                      name="confirmPassword"
                                      value={user.confirmPassword}
                                      onChange={onInputChange}
                                      className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                  />
                              </div>
                              <div className="flex justify-center ">
                                  <button
                                      type="submit"
                                      id="signUp"
                                      className="transition ease-in-out delay-150 bg-error-300 hover:bg-error-100 duration-300 text-error-white rounded-sm text-lg h-12 w-full "
                                  >
                                      Sign Up
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="relative flex ml-2 w-full h-full">
                      <Image
                          src={theme === "dark" ? logoDark : logo}
                          alt="logo"
                          priority
                          layout="fill"
                          objectFit="contain"
                          className="rounded-br-3xl rounded-tr-3xl"
                      />
                  </div>
              </div>
          </div>
      </div>
  </div>

  );
  
}

