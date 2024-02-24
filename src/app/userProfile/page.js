import React from "react";
import Head from 'next/head';
import Image from "next/image";
import logo from "../../../public/images/logo-no-bg.png";
import {LoggedInUserProfileNav} from "@/components/loggedInUserProfileNav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


export default function Page() {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <nav className="bg-error-100 h-[6vh] sticky top-0 z-40 dark:bg-error-black">
        
        <div className="flex items-center justify-between h-full">
          <div>
            <Image src={logo} width="150" height="150" alt="logo"></Image>
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
                            <h1 id="firstName" className="font-semibold text-[1.5vw]">FirstName</h1>
                            <h2 id="title" className="font-light mt-1 text-[1vw]">Web-Designer</h2>
                            <h3 id="location" className="font-normal mt-2 text-[1.2vw]">Location</h3>
                            <span id="bio" className="mt-4 text-base text-center w-[20vw] h-[10vw] text-[1vw] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet.</span>
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
                                                <h1 className = "uppercase text-[1.2vw]" id="firstName">FirstName</h1>
                                            </div>
                                            <div>
                                                <Label className="uppercase text-[.5vw]" htmlFor="lastName">LASTNAME</Label>
                                                <h1 className = "uppercase text-[1.2vw]" id="lastName">LastName</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="title">TITLE</Label>
                                            <h1 className = "uppercase text-[1.2vw]" id="title">TITLE</h1>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="email">Email</Label>
                                            <h1 className = "uppercase text-[1.2vw]" id="email">email</h1>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="skills">skills</Label>
                                            <p className = "text-[1vw]" id="skills">Explore, UI/UX, Logo Design, Design Systems, MySQL, Urgent, Medical, Typography, Mobile Design, Web Design, React.js</p>
                                        </div>
                                        <div>
                                            <Label className="uppercase text-[.5vw]" htmlFor="aboutMe">ABOUT ME</Label>
                                            <p className = "text-[1vw]" id="aboutMe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet.</p>
                                        </div>
                                </div>
                                
                                </TabsContent>
                                <TabsContent className="dark:bg-error-black" value="accountSettings">
                                <div className="grid grid-flow-row gap-6">
                                        <div>
                                            <Label className="uppercase" htmlFor="editFirstName">FIRSTNAME</Label>
                                            <Input id="editFirstName" defaultValue="FirstName" className="mt-1 block w-full dark:bg-error-black" />
                                        </div>
                                        <div>
                                            <Label className="uppercase" htmlFor="editLastName">LASTNAME</Label>
                                            <Input id="editLastName" defaultValue="LastName" className="mt-1 block w-full dark:bg-error-black" />
                                        </div>
                                        <div>
                                            <Label className="uppercase" htmlFor="editEmail">EMAIL</Label>
                                            <Input id="editEmail" type="email" defaultValue="email@example.com" className="mt-1 block w-full dark:bg-error-black" />
                                        </div>
                                        <div>
                                            <Label className="" htmlFor="editSkills">SKILLS (Seperate with comma)</Label>
                                            <textarea id="editSkills" defaultValue="Explore, UI/UX, Logo Design, Design Systems, MySQL, Urgent, Medical, Typography, Mobile Design, Web Design, React.js" className="mt-1 block w-full p-2.5 dark:bg-error-black" />
                                        </div>
                                        <div>
                                            <Label className="uppercase" htmlFor="editAboutMe">ABOUT ME</Label>
                                            <textarea id="editAboutMe" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet." className="mt-1 block w-full p-2.5 dark:bg-error-black" />
                                        </div>
                                        <div>
                                            <Label className="uppercase" htmlFor="avatarUpload">CHANGE AVATAR</Label>
                                            <input type="file" id="avatarUpload" className="mt-1 block w-full dark:bg-error-black cursor-pointer" accept="image/*" />
                                            {/* Optionally display an image preview here */}
                                        </div>
                                        <div>
                                            <Button type="submit" className="mt-4">Save Changes</Button>
                                        </div>
                                    </div>
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
