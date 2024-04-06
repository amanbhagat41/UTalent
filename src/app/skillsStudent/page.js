"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/UTalent-DarkBlue.png";
import logoDark from "../../../public/images/logo-no-bg.png";
import { Button } from "@/components/ui/button";
import {
    collection,
    addDoc,
    doc,
    setDoc,
    updateDoc,
    getDoc,
} from "firebase/firestore";
import { db } from "../../firebaseKey";
import Link from "next/link";
import { useTheme } from "next-themes";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SkillsStudent() {
    const router = useRouter();
    const auth = getAuth();
    const user = auth.currentUser;
    const { theme, setTheme } = useTheme();
    const [skills, setSkills] = useState([]);
    const [curSkill, setCurSkill] = useState("");
    const onInputChange = (e) => {
        setCurSkill(e.target.value);
    };

    const _handleKeyDown = (e) => {
        if (e.key === "Enter" && skills.length < 50) {
            setSkills([...skills, curSkill]);
            setCurSkill("");
            //   setDoc(doc(db, "users", userauth.uid), data)
        }
    };
    useEffect(() => {
        const fetchSkills = async () => {
            console.log(user);
            console.log("yooo");
            if (user) {
                const userData = await getDoc(doc(db, "users", user.uid));
                if (userData.skills) {
                    setSkills(userData.skills);
                }
            }
        };
        fetchSkills();
    }, []);

    const onSubmit = (e) => {
        updateDoc(doc(db, "users", user.uid), {
            skills: skills,
        });
        router.push("/loggedinStudent");
    };
    function deleteSkill(index) {
        const res = skills.filter((e, i) => i !== index);
        setSkills(res);
    }
    return (
        <div className="bg-error-100 dark:bg-error-black">
            <div className="flex items-center justify-center h-screen">
                <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-2 w-full h-full">
                        
                        <div className="flex flex-col p-4 justify-center">
                            <div className="flex flex-col p-4 gap-4">
                                <h1 className="text-center text-3xl font-bold mb-8">Display Your Skills</h1>
                                <div className="flex flex-col lg:flex-row justify-between">
                                    <div className="flex-auto lg:w-64">
                                        <div className="pt-4">
                                            <label htmlFor="skills" className="text-center text-sm font-bold">When adding a skill, press enter to submit it to the list</label>
                                            <input
                                                type="text"
                                                id="skills"
                                                className="border border-gray-400 border-opacity-35 pl-4 rounded-sm h-12 lg:w-full w-8/12"
                                                value={curSkill}
                                                onChange={onInputChange}
                                                onKeyDown={_handleKeyDown}
                                            />
                                        </div>
                                        <h1 className="text-left text-xl font-bold mt-4 mb-2">Your Skills:</h1>
                                        <div className="flex flex-row gap-x-4 flex-wrap gap-y-2 text-xs items-center overflow-y-auto h-40">
                                            
                                            {skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className=" bg-error-gray hover:bg-[#FF0000] rounded-2xl text-lg h-12 p-4 w-auto text-error-white text-center pt-1"
                                                    onClick={(e) => deleteSkill(index)}
                                                >
                                                    {skill}{" "}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="">
                                            <Button
                                                className="bg-error-300 rounded-sm hover:bg-error-100 text-lg h-12 w-full dark:text-error-200"
                                                onClick={onSubmit}
                                            >
                                                Continue
                                            </Button>
                                        </div>
                                    </div>
                                </div>
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
