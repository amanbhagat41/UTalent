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
import { db } from "../../firebase";
import Link from "next/link";
import { useTheme } from "next-themes";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function skillsStudent() {
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
        if (e.key === "Enter" && skills.length < 10) {
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
                <div className="bg-error-200 dark:bg-error-black dark:outline dark:outline-offset-2 dark:outline-white-500 dark:shadow-[0_4px_36px_16px_rgba(255,255,255,0.25)] w-10/12 md:w-6/12 h-4/6 rounded-3xl">
                    <h1 className="pt-40 text-2xl pl-10 dark:text-error-200">
                        Display Your Skills (Max of 10)
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="flex-auto lg:w-64">
                            <div className="pl-10 pt-4">
                                <input
                                    type="text"
                                    id="skills"
                                    className="border border-gray-400 border-opacity-35 pl-4 rounded-xl h-8 lg:w-full w-8/12"
                                    value={curSkill}
                                    onChange={onInputChange}
                                    onKeyDown={_handleKeyDown}
                                />
                            </div>
                            <div className="pl-4 pt-4 flex flex-row gap-x-4 flex-wrap gap-y-2 text-xs items-center">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className=" bg-error-gray hover:bg-[#FF0000] rounded-2xl text-lg h-10 w-20 text-error-white text-center"
                                        onClick={(e) => deleteSkill(index)}
                                    >
                                        {skill}{" "}
                                    </div>
                                ))}
                            </div>
                            <div className="pt-10 pl-10">
                                <Button
                                    className="bg-error-300 rounded-2xl hover:bg-error-100 text-lg h-12 w-36"
                                    onClick={onSubmit}
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end items-start lg:w-32 flex-auto">
                            <Image
                                src={theme === "dark" ? logoDark : logo}
                                width="350"
                                height="350"
                                alt="logo"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
