"use client";

import React from "react";
import Image from "next/image";
import studentBid from "../../../public/images/studentbidding.webp"
import logo from "../../../public/images/UTalent-DarkBlue.png";
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { collection, getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { Label } from "@radix-ui/react-dropdown-menu";


export default function login() {
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const auth = getAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
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
                    console.log(user.uid);
                    console.log(userDocRef);
                    getDoc(userDocRef)
                        .then((doc) => {
                            if (doc.exists) {
                                // console.log(docRef)
                                // console.log(userDocRef)
                                // console.log(doc)
                                const userData = doc.data();
                                const role = userData.role;
                                console.log(userData);
                                console.log(role);
                                if (role === "Student") {
                                    router.push("/loggedinStudent");
                                } else if (role === "Employer") {
                                    router.push("/loggedInEmployer");
                                }
                            } else {
                                console.log("No such document!");
                            }
                        })
                        .catch((error) => {
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
                <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-2 w-full h-full">
                        
                        <div className="flex flex-col p-4 justify-center">
                            <div className="flex w-full justify-center">
                                <Image
                                    src={theme === "dark" ? logoDark : logo}
                                    width="150"
                                    height="150"
                                    alt="logo"
                                    priority
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                            
                            <div className="flex flex-col p-4 gap-4">
                                <h1 className="text-center text-3xl font-bold">Welcome back to UTalent!</h1>
                                <h2 className="text-center">With an innovative platform such as this one, we look to help and aid students in their endeavors.</h2>
                                <div className="flex flex-col w-full h-auto gap-2">
                                    <form onSubmit={onLoginSubmit} >
                                        <label htmlFor="email" className="font-bold">Email address</label>
                                        <input 
                                            type="email"
                                            id = "email"
                                            name = "email"
                                            value={user.email}
                                            onChange={onInputChange}
                                            placeholder="   Enter your email address"
                                            className="w-full h-12 border-2 border-error-darkGray text-error-white rounded-sm"
                                        ></input>
                                        <label htmlFor="password" className="font-bold">Password</label>
                                        <input 
                                            type="password"
                                            id = "password"
                                            name = "password"
                                            value={user.password}
                                            onChange={onInputChange}
                                            placeholder="   Enter your password"
                                            className="w-full h-12 border-2 border-error-darkGray text-error-white rounded-sm"
                                        ></input>
                                        <div className="mt-4 flex justify-center ">
                                            <Button
                                                type="submit"
                                                id="login"
                                                className="transition ease-in-out delay-150 bg-error-300 hover:bg-error-100 duration-300 text-error-white rounded-sm text-lg h-12 w-full "
                                                
                                            >
                                                Sign in
                                            </Button>
                                        </div>
                                    </form>
                                    <div className="flex justify-between">
                                        <div className="text-sm gap-1">
                                            Don't Have An Account?{" "}
                                            <Link href="/student-employersignup" legacyBehavior passHref>
                                                <a className="text-error-darkPink underline">Signup</a>
                                            </Link>
                                        </div>
                                        <div className="text-sm gap-1">
                                            <Link href="/null" legacyBehavior passHref>
                                                <a className="text-error-darkPink underline">Forgot Password</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex ml-2 w-full h-full"> {/* Adjust the w-1/2 to control the width of the image container */}
                            <Image
                                src={studentBid}
                                alt="logo"
                                priority
                                layout="fill"
                                objectFit="cover" // Use "contain" to ensure the image fits within the container without cropping
                                className="rounded-br-3xl rounded-tr-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
