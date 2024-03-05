"use client";
import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import {LoggedInUserProfileNav} from "@/components/loggedInUserProfileNav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db, auth } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Page() {
    const MAX_WORDS = 100;
    const [wordsRemaining, setWordsRemaining] = useState(100);
    const [userDetails, setUserDetails] = useState({
        uid: '', // Include uid for update operations
        firstName: "",
        lastName: "",
        email: "",
        skills: [],
        bio: "",
        title: "",
        location: "",
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                const userRef = doc(db, "users", uid);
                getDoc(userRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        setUserDetails({ uid: uid, ...docSnap.data() });
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({...userDetails, [name]: value});
    };

    const handleSkillsChange = (e) => {
        setUserDetails({...userDetails, skills: e.target.value.split(',').map(skill => skill.trim())});
    };
    const handleAboutMeChange = (e) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(Boolean); // Filter out any empty strings due to extra spaces
        const numberOfWords = words.length;
    
        if (numberOfWords <= MAX_WORDS) {
            setUserDetails({ ...userDetails, bio: text });
            // Update words remaining only if within limit
            setWordsRemaining(MAX_WORDS - numberOfWords);
        } else {
            // If user tries to add more words beyond the limit, prevent it
            e.preventDefault();
            // Optionally, provide feedback that the word limit has been reached
            console.log(`Maximum word count of ${MAX_WORDS} has been reached.`);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, "users", userDetails.uid), {
                ...userDetails,
                skills: userDetails.skills,
            });
            console.log("Profile updated successfully.");
            router.push('/loggedinStudent')
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <nav className="bg-error-100 h-[6vh] sticky top-0 z-40 dark:bg-error-black">
        
        <div className="flex items-center justify-between h-full">
          <div>
            <Link href="/" passHref>
                <Image src={logo} width="150" height="150" alt="logo" style={{ cursor: 'pointer' }} />
            </Link>
          </div>
          <div className="flex justify-end flex-grow ">
            <LoggedInUserProfileNav />
          </div>
          <div className="w-10 h-10"></div>
        </div>
        <div className="w-full h-screen dark:bg-error-black">
        <div className="grid grid-cols-2 h-full">
            <div className="w-full h-full">
                <div className="flex items-center justify-end h-screen ">
                    <div className="w-[35vw] h-[35vw]">
                    <Avatar className="w-[10vw] h-[10vw] m-auto mt-16">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="grid grid-flow-row auto-rows-max justify-items-center mt-9 ">
                        <h1 id="fullName" className="font-semibold text-[1.5vw]">
                            {userDetails.firstName} {userDetails.lastName}
                        </h1>
                        <h2 id="title" className="font-light mt-1 text-[1vw]">{userDetails.title}</h2>
                        <h3 id="location" className="font-normal mt-2 text-[1.2vw]">{userDetails.location}</h3>
                        <span id="bio" className="mt-4 text-center w-[20vw] h-[10vw] text-[.7vw] leading-relaxed">{userDetails.bio}</span>
                    </div>

                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                <div className="flex items-center justify-start h-screen ">
                        <div className="w-[35vw] h-[35vw]">
                        <Tabs defaultValue="basicInfo" className="w-[35vw] mt-12 ">
                            <TabsList className="grid w-full h-auto min-h-[1vw] grid-cols-2 dark:bg-error-black dark:border dark:border-error-white dark:active:bg-error-white">
                                <TabsTrigger className=" dark:bg-error-black dark:text-error-white text-[1vw] dark:focus:bg-error-white dark:focus:text-error-black dark:active:bg-error-white" value="basicInfo">Basic Info</TabsTrigger>
                                <TabsTrigger className=" dark:bg-error-black dark:text-error-white text-[1vw] dark:focus:bg-error-white dark:focus:text-error-black dark:active:bg-error-white" value="accountSettings">Account Settings</TabsTrigger>
                            </TabsList >
                                <TabsContent value="basicInfo">
                                <div className="grid grid-flow-row gap-[1vw]">
                                        <div className="grid grid-flow-col">
                                            <div>
                                                <Label className="uppercase text-[.5vw]" htmlFor="firstName">FIRSTNAME</Label>
                                                <h1 className = "text-[1.2vw]" id="firstName">{userDetails.firstName}</h1>
                                            </div>
                                            <div>
                                                <Label className="uppercase text-[.5vw]" htmlFor="lastName">LASTNAME</Label>
                                                <h1 className = "text-[1.2vw]" id="lastName">{userDetails.lastName}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="title">TITLE</Label>
                                            <h1 className = "text-[1.2vw]" id="title">{userDetails.title}</h1>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="email">Email</Label>
                                            <h1 className = "text-[1.2vw]" id="email">{userDetails.email}</h1>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="skills">skills</Label>
                                            <p className = "text-[1vw]" id="skills">{userDetails.skills.join(', ')}</p>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="aboutMe">ABOUT ME</Label>
                                            <p className = "text-[1vw]" id="aboutMe">{userDetails.bio}</p>
                                        </div>
                                </div>
                                
                                </TabsContent>
                                <TabsContent className="dark:bg-error-black" value="accountSettings">
                                    <form onSubmit={handleSubmit} className="grid grid-flow-row gap-6">
                                        <Label htmlFor="editFirstName">First Name</Label>
                                        <Input name="firstName" value={userDetails.firstName} onChange={handleChange} />

                                        <Label htmlFor="editLastName">Last Name</Label>
                                        <Input name="lastName" value={userDetails.lastName} onChange={handleChange} />

                                        <Label htmlFor="editEmail">Email</Label>
                                        <Input name="email" type="email" value={userDetails.email} onChange={handleChange} />

                                        <Label htmlFor="editTitle">Title</Label>
                                        <Input name="title" value={userDetails.title} onChange={handleChange} />

                                        <Label htmlFor="editLocation">Location</Label>
                                        <Input name="location" value={userDetails.location} onChange={handleChange} />

                                        <Label htmlFor="editSkills">Skills (Separate with comma)</Label>
                                        <textarea name="skills" value={userDetails.skills.join(', ')} onChange={handleSkillsChange} />

                                        <Label htmlFor="editAboutMe">
                                            About Me: ({wordsRemaining} words remaining)
                                        </Label>
                                        <textarea className="h-56" name="bio" value={userDetails.bio} onChange={handleAboutMeChange} />

                                        <Button type="submit">Save Changes</Button>
                                    </form>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  );
}
