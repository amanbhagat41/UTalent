"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/images/UTalent-DarkBlue.png";
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast"
export default function SignupStudent() {
    const { toast } = useToast()
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const auth = getAuth();
    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        role: "Student",
    });

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSignUpSubmit = async (e) => {
        e.preventDefault();
        if (
            !user.email ||
            !user.firstName ||
            !user.lastName ||
            !user.password ||
            !user.confirmPassword
        ) {
            console.log("All fields are required");
            toast({
                variant: "destructive",
                title: "All fields are required",
            })
            return;
        }
        // Validate if passwords match
        if (user.password.length !== 6) {
            console.log("Password must be 6 characters long");
            toast({
                variant: "destructive",
                title: "Password must be 6 characters long",
            });
            return;
        }
        if (user.password !== user.confirmPassword) {
            console.log("Passwords do not match");
            return;
        }
        try {
            createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
            ).then((userCredential) => {
                const userauth = userCredential.user;
                const data = {
                    uid: userauth.uid,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    role: user.role,
                    title: "",
                    
                };
                const docRef = setDoc(
                    doc(db, "users", userauth.uid),
                    data
                ).finally(() => {
                    console.log("User written with ID: ", docRef.id);
                    router.push("/skillsStudent");
                });
            });
        } catch (error) {

            const errorCode = error.code;
            const errorMessage = error.message;
            toast({
                variant: "destructive",
                title: errorMessage,
            })
            console.log(errorCode, errorMessage);
        }
        console.log(user);
    };

    return (
        <div className="bg-error-100 dark:bg-error-black">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-2 w-full h-full">
                        
                        <div className="flex flex-col p-4 justify-center">
                            <div className="flex flex-col p-4 gap-4">
                                <h1 className="text-center text-3xl font-bold mb-8">Create an Account</h1>
                                <form onSubmit={onSignUpSubmit} className="w-full">
                                    <div className="flex justify-between gap-4">
                                        <div className="flex-1">
                                            <label htmlFor="FirstName" className="">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="FirstName"
                                                name="firstName"
                                                value={user.firstName}
                                                onChange={onInputChange}
                                                className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="cLastName" className="">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="cLastName"
                                                name="lastName"
                                                value={user.lastName}
                                                onChange={onInputChange}
                                                className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                            />
                                        </div>
                                    </div>  
                                    <div className="mt-4">
                                        <label htmlFor="cEmail" className="">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="cEmail"
                                            name="email"
                                            value={user.email}
                                            onChange={onInputChange}
                                            className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                        />
                                    </div>
                                    <div className="flex justify-between gap-4 mt-4">
                                        <div className="flex-1">
                                            <label htmlFor="cPassword" className="">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="cPassword"
                                                name="password"
                                                value={user.password}
                                                onChange={onInputChange}
                                                placeholder="Please Enter a 6 charcter Password"
                                                className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="cConfirmPassword" className="">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                id="cConfirmPassword"
                                                name="confirmPassword"
                                                placeholder="Please Enter a 6 charcter Password"
                                                value={user.confirmPassword}
                                                onChange={onInputChange}
                                                className="border border-gray-400 rounded-sm h-8 w-full text-left"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-center ">
                                            <Button
                                                type="submit"
                                                id="signUp"
                                                className="transition ease-in-out delay-150 bg-error-300 hover:bg-error-100 duration-300 text-error-white rounded-sm text-lg h-12 w-full "
                                                
                                            >
                                                Sign Up
                                            </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="relative flex ml-2 w-full h-full"> {/* Adjust the w-1/2 to control the width of the image container */}
                            <Image
                                src={theme === "dark" ? logoDark : logo}
                                alt="logo"
                                priority
                                layout="fill"
                                objectFit="contain" // Use "contain" to ensure the image fits within the container without cropping
                                className="rounded-br-3xl rounded-tr-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
